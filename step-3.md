<a name="Step3"></a>
# Step 3 – Adding a selection handler

Now we will add some more interesting functionality to the basic extension:

Start by adding a handler for the SELECTION_CHANGED event to the Extension (i.e. editing the file 'Viewing.Extension.Workshop.js'). This event is triggered when user
selects (or unselects) a component in the model. Register your handler callback in the _self.load function, and then add the function definition below.

```js
  _self.load = function () {

    _viewer.addEventListener(
      Autodesk.Viewing.SELECTION_CHANGED_EVENT,
      _self.onSelectionChanged);

    console.log('Viewing.Extension.Workshop loaded');

    return true;
  };

  /////////////////////////////////////////////////////////////////
  // selection changed callback
  //
  /////////////////////////////////////////////////////////////////
  _self.onSelectionChanged = function (event) {

    // event is triggered also when component is unselected

    // in that case event.dbIdArray is an empty array
    if(event.dbIdArray.length) {

      var dbId = event.dbIdArray[0];

      // do stuff with selected component
    }
    else {
      // all components unselected
    }
  }
```

Every element in the displayed model has a unique ID called a dbId. The code you've just written simply stores the dbId of the first element in the list of elements that the
user selected and also prints it out to your browser console. (Usually, the user will only select a single element, but more complete code would handle multiple selected elements).

You can test your code now, if you like. Put a breakpoint in the event handler to check its being called when you select an element or just open the browser console and look for the text utput by the extension. You can use the Developer
Tools of Chrome or similar tools in other modern browsers to perform debugging operations such as setting breaking points, watching variable values, etc.  (Hint: You select a model
element by clicking it with you mouse; elements are highlighted in blue when selected. You can unselect by simply clicking in space).


=========================
[Home](README.md) | [Step 2](step-2.md) | [Step 4](step-4.md)