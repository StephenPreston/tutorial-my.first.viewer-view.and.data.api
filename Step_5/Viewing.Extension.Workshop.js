  ///////////////////////////////////////////////////////////////////////////////
  // Demo Workshop Viewer Extension
  // by Philippe Leefsma, April 2015
  //
  ///////////////////////////////////////////////////////////////////////////////

  AutodeskNamespace("Viewing.Extension");

  Viewing.Extension.Workshop = function (viewer, options) {

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

    Viewing.Extension.Workshop.WorkshopPanel = function(parentContainer, id, title, options)
    {
        Autodesk.Viewing.UI.PropertyPanel.call(this, parentContainer, id, title);
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

        _viewer.addEventListener(
            Autodesk.Viewing.SELECTION_CHANGED_EVENT,
            _self.onSelectionChanged);

        _self.panel = new Viewing.Extension.Workshop.WorkshopPanel (
        _viewer.container, 'WorkshopPanelId', 'Workshop Panel');
        _self.interval = 0;
        
        return true;
    };

    /////////////////////////////////////////////////////////////////
    // unload callback: invoked when viewer.unloadExtension is called
    //
    /////////////////////////////////////////////////////////////////

    _self.unload = function () {

        _self.panel.setVisible(false);
        _self.panel.uninitialize();

        return true;

    };
      
      
      
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

      _self.startRotation();
    }
    else {
      clearInterval(_self.interval); // where is this function defined? Go to line 151.

      _viewer.isolate([]);
      _viewer.fitToView();
      _self.panel.setVisible(false);
    }
  }
      
      
      
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

  };




  
  
  

  /////////////////////////////////////////////////////////////////
  // sets up inheritance for extension and register
  //
  /////////////////////////////////////////////////////////////////

  Viewing.Extension.Workshop.prototype =
    Object.create(Autodesk.Viewing.Extension.prototype);

  Viewing.Extension.Workshop.prototype.constructor =
    Viewing.Extension.Workshop;

  Autodesk.Viewing.theExtensionManager.registerExtension(
    'Viewing.Extension.Workshop',
    Viewing.Extension.Workshop);