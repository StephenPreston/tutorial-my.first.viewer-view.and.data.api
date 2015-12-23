<a name="Step5"></a>
## Step 5 (Bonus step) – Moving the camera

Finally, we'll add some animation - orbiting the camera around the model.
We'll take a simple approach using the JavaScript setInterval method.
For a more robust approach, take a look at the blog post article describing
[http://adndevblog.typepad.com/cloud_and_mobile/2015/04/how-to-create-animations-in-the-viewer.html](how to create animations in the viewer).

Add a property the extension to hold the interval id, so we can cancel it.

```js
  _self.load = function () {

    _viewer.addEventListener(
      Autodesk.Viewing.SELECTION_CHANGED_EVENT,
      _self.onSelectionChanged);

    _self.panel = new Viewing.Extension.Workshop.WorkshopPanel (
      _viewer.container,
      'WorkshopPanelId',
      'Workshop Panel');

    _self.interval = 0;

    console.log('Viewing.Extension.Workshop loaded');

    return true;
  };
```

Add the following methods to handle the animation immediately below the end of the _self.onSelectionChanged function implementation.

```js
    /////////////////////////////////////////////////////////////////
    // rotate camera around axis with center origin
    //
    /////////////////////////////////////////////////////////////////
    _self.rotateCamera = function(angle, axis) {
      var pos = _viewer.navigation.getPosition();

      var position = new THREE.Vector3( // Point?
        pos.x, pos.y, pos.z);

      var rAxis = new THREE.Vector3(
        axis.x, axis.y, axis.z);

      var matrix = new THREE.Matrix4().makeRotationAxis(
        rAxis,
        angle);

      position.applyMatrix4(matrix);

      _viewer.navigation.setPosition(position);
    };

    /////////////////////////////////////////////////////////////////
    // start rotation effect
    //
    /////////////////////////////////////////////////////////////////

    _self.startRotation = function() {
      clearInterval(_self.interval);

      // sets small delay before starting rotation

      setTimeout(function() {
        _self.interval = setInterval(function () {
        _self.rotateCamera(0.05, {x:0, y:1, z:0});
        }, 100)}, 500);
    };
```

Finally modify the selection handler to trigger the animation when a component is selected:

```js
  /////////////////////////////////////////////////////////////////
  // selection changed callback
  //
  /////////////////////////////////////////////////////////////////
  _self.onSelectionChanged = function (event) {

    function propertiesHandler(result) {

      if (result.properties) {

        _self.panel.setProperties(
        result.properties);

        _self.panel.setVisible(true);
      }
    }

    if(event.dbIdArray.length) {

      var dbId = event.dbIdArray[0];

      _viewer.getProperties(
        dbId,
        propertiesHandler);

      _viewer.fitToView(dbId);
      _viewer.isolateById(dbId);

      _self.startRotation();
    }
    else {
      clearInterval(_self.interval); // where is this function defined?

      _viewer.isolateById([]);
      _viewer.fitToView();
      _self.panel.setVisible(false);
    }
  }
```

## Test your extension

Relaunch the root folder 'index.html file, and click on the 'Step 5' link (or on the 'Step 1' link if you've been editing the code as you go along). This time, in addition to displaying the panel, the camera (your view of the model) starts rotating when you select a model element.



=========================
[Home](README.md) | [Step 4](step-4.md) | [Step 6](step-6.md)