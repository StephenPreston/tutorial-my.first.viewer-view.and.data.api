<a name="Introduction"></a>
# Autodesk View & Data API &ndash; My First Viewer Tutorial

* [Introduction](#Introduction)
  - [Audience](#Audience)
  - [What do you need for your project?](#WhatDoYouNeed)
  - [What don't you need for your project?](#WhatDontYouNeed)
  - [What are you going to achieve in this workshop?](#WhatAreYouGoingToAchieve)
* [Step 1 &ndash; Displaying a simple model](step-1.md)
* [Step 2 &ndash; Implementing a basic extension](step-2.md)
* [Step 3 &ndash; Adding a selection handler](step-3.md)
* [Step 4 &ndash; Displaying a panel](step-4.md)
* [Step 5 (Bonus step) &ndash; Moving the camera](step-5.md)
* [Step 6 &ndash; Conclusion and next steps](step-6.md)




<a name="Audience"></a>
## Audience

This tutorial is intended to get you started with the [View & Data API](https://developer.autodesk.com) &ndash; which is a zero-client, WebGL viewer capable of displaying 2D and 3D designs on your webpage.

The tutorial is for people familiar with [JavaScript](http://www.ecma-international.org/publications/standards/Ecma-262.htm) programming and object-oriented programming concepts.
You should also be familiar with the Autodesk View & Data technology from a user's point of view. You can play with the technology [here](https://360.autodesk.com/viewer) &ndash; simply Drag and Drop a 2D/3D file,
and enjoy the result in your browser with no extension or plug-in installed on your computer or device. Or if you don't have a design file of your own, take a quick look at the live demo on our [github.io page](http://developer-autodesk.github.io/).

This tutorial focuses on the View & Data client-side API and uses a local 3D model (included with thie tutorial download). If you prefer to focus on the server-side APIs (accessing files stored on the Autodesk server or uploading and translating your own files), then we recommend you start with [this tutorial](https://github.com/Developer-Autodesk/tutorial-getting.started-view.and.data) instead.

(**Note** &ndash; To display a model in the viewer, the original file format it came in must be translated to a special format (based on JSON). Most of the server-side APIs are for creating that translation).


<a name="WhatDoYouNeed"></a>
## What do you need for your project?

To work through this tutorial, you will need the following:

* **A WebGL-enabled browser.**
  - For example, Chrome, Firefox, Safari, IE11/Edge.
* **Your favorite JavaScript editor.**
	- If you don't already have a favorite, you might try [Brackets](http://brackets.io/) (because its free). Or you can just use a text editor.

* **Your favourite local webserver.** 
  - You need this because the tutorial webpages use resources from external files. If you open the webpage as a file, a security exception will be triggered due to your browser's "same origin policy". The free version of the [Mongoose](https://www.cesanta.com/products) server is pretty much as easy as it gets. (This tutorial assumes you'll be using Mongoose, but its not required).




<a name="WhatDontYouNeed"></a>
## What don't you need for your project?

* **Server-side programming.**
  - This tutorial is intended for people who are excited by client-side programming and view server-side programming as a necessary evil. Although you need to run your webpage from a local webserver, you don't need to know anything about server-side programming to complete this tutorial.
  - If you want to dive straight into the server-side APIs, then work through [this tutorial](https://github.com/Developer-Autodesk/tutorial-getting.started-view.and.data) instead. As you progress to more complex applications (beyond this tutorial), you will eventually need to implement some server-side code.
* **GitHub commands.**
  - You don't need to understand how to use GitHub &ndash; except how to click through this readme and tutorial steps and how to download a zip file (hint &ndash; there's a button on GitHub that says 'Download ZIP'). Unlike some of our other tutorials, this tutorial doesn't make use of GitHub commands that you have to run in your terminal/command console. The tutorial steps are all separated into folders &ndash; if you don't want to write the code as you go along just launch the index.html file in the root tutorial folder and click on the link to the step you're working on.
* **Terminal/Command Console.**
  - The Mac Unix Terminal is a fantastic tool. But we're not going to use it.


<a name="WhatAreYouGoingToAchieve"></a>
## What are you going to achieve in this workshop?

When you finish this tutorial you will be able to:

- Create a dynamic 3D-enabled web application that works in all modern browsers.
- View 2D/3D models in a browser or mobile device without plug-ins or additional software.
- Extend the View & Data API WebGL viewer to interact with the 2D/3D models.
- Identify resources for learning more about the Autodesk View & Data API.

The tutorial guides you through the entire process of building a simple application, including writing and running viewer extensions.


=========================
[Step 1](step-1.md)