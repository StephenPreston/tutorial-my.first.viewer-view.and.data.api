<a name="Step6"></a>
# Step 4 – Displaying a panel

Now we'll do something a bit more interesting in response to the selection event. We'll query the properties of the selected component and display them in a custom viewer panel. 

By the way, writing all your custom code as extensions will help you re-use your code between 
projects, as it keeps your extension independent of the client. However, you can still  manipulate any other component of your web application from the extension –
you could read or write information stored in a separate database, or update a table somewhere else on the webpage, etc.

## Implement the panel code

Add some code to initialize an empty panel in the body of your extension:

```js
  /////////////////////////////////////////////////////////////////
  //  base class constructor
  //
  /////////////////////////////////////////////////////////////////

  Autodesk.Viewing.Extension.call(this, viewer, options);

  var _self = this;

  var _viewer = viewer;

  /////////////////////////////////////////////////////////////////
  // create panel and set up inheritance
  //
  /////////////////////////////////////////////////////////////////

  Viewing.Extension.Workshop.WorkshopPanel = function(
    parentContainer,
    id,
    title,
    options)
  {
    Autodesk.Viewing.UI.PropertyPanel.call(
      this,
      parentContainer,
      id, title);
  };

  Viewing.Extension.Workshop.WorkshopPanel.prototype = Object.create(
    Autodesk.Viewing.UI.PropertyPanel.prototype);

  Viewing.Extension.Workshop.WorkshopPanel.prototype.constructor =
    Viewing.Extension.Workshop.WorkshopPanel;

  /////////////////////////////////////////////////////////////////
  // load callback: invoked when viewer.loadExtension is called
  //
  /////////////////////////////////////////////////////////////////

  _self.load = function () {
```

Instantiate the panel in your load method and uninitialize it in unload.
Edit _self.load and _self.unload as follows:

```js
  /////////////////////////////////////////////////////////////////
  // load callback: invoked when viewer.loadExtension is called
  //
  /////////////////////////////////////////////////////////////////
  _self.load = function () {

    _viewer.addEventListener(
      Autodesk.Viewing.SELECTION_CHANGED_EVENT,
      _self.onSelectionChanged);

    _self.panel = new Viewing.Extension.Workshop.WorkshopPanel (
      _viewer.container,
      'WorkshopPanelId',
      'Workshop Panel');

    console.log('Viewing.Extension.Workshop loaded');

    return true;
  };

  /////////////////////////////////////////////////////////////////
  // unload callback: invoked when viewer.unloadExtension is called
  //
  /////////////////////////////////////////////////////////////////
  _self.unload = function () {

    _self.panel.setVisible(false);

    _self.panel.uninitialize();

    console.log('Viewing.Extension.Workshop unloaded');

    return true;
  };
```

## Populate the panel

Replace the implementation of the selection handler with the following code, so the panel is populated with the properties of the selected element and displayed when an item is selected.
Just for fun, we also isolate the component that is clicked:

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
      _viewer.isolate(dbId);
    }
    else {
      _viewer.isolate([]);
      _viewer.fitToView();
      _self.panel.setVisible(false);
    }
  }
```
## Test the extension

You've now finished writing your extension to respond to a user selecting a model element by displaying its properties in a panel and isolating it in the view.
Launch the client page and select a model element by clicking on it.
The model and camera view will reset if you clear your selection or click in space.

=========================
[Home](README.md) | [Step 3](step-3.md) | [Step 5](step-5.md)