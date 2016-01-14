# Step 6 - Loading other models

You're probably now wondering how to display your own models. 

This tutorial uses a local, pre-translated model, so you didn't have to bother with implementing a bunch of server-side OAuth and REST API calls to upload, translate and access models on the Autodesk server. As you start using this API more, you'll almost certainly want to learn how to work with the server-side API. More on that [later](#End).

But before you do that, here's a way to translate your own model using one of our live samples ...

[extract.autodesk.io](http://extract.autodesk.io) is a live sample (with associated GitHub source code) that demonstrates how to translate a model and download the translated result. Here are the steps to translate your own model and replace the 'robot arm model' you've been using in this tutorial. These steps assume you're using a single file model and don't have to setup dependencies for a multi-file model - if you're using a mutli-file model from an Autodesk product, I recommend you export it as a 3D DWF file and translate the DWF file for the purposes of this tutorial.

* Delete all the files in the SampleModel folder for this tutorial.
* Open the webpage [extract.autodesk.io](http://extract.autodesk.io).
* Drag the file you want to translate to the 'Drag and Drop' area on the webpage and wait until the file has uploaded.
* Click the 'Create Project' button. The page will switch to a view of submitted projects. Your project will appear in the displayed list. You may have to wait a short time for the translation to complete.
* When the translation is complete, move your mouse over the thumbnail for your project and click the 'Explore' text that appears.
* A view of your model will now appear. On the Extract dialog that is displayed, enter your email address and click the 'Proceed' button. When the translated model is ready to download, a URL will appear under the email address editbox.
* Click the URL to download the zipped, translated file.
* Extract the files from the zip. A subfolder of the extracted folder will have a very long name. Inside that folder will be lots of small files, including a file called '0.svf'.
* Copy all these files into the SampleModel folder in your tutorial folder. 
* Reload the one of the 'Step X' webpages from the tutorial.

You should now see your model. If you don't, you may need to clear your cache or reopen the webpage using a private/anonymous window.

So that you can try this even if you don't have your own file, an additional sample file has been included in the tutorial download. See the 'V8 Engine.stp file in the 'TestFile' folder.


=========================
[Home](README.md) | [Step 5](step-5.md) | [Step 7](step-7.md)
