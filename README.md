 <!-- question-1 -->

What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

<!-- 1.getElementbyId -->
 getElementById is DOM method which is used to select an id of a HTML element.
This method only select one unique id. That means one element should have one id.
Example:In html code we have a h1 tag and has an id called "header-title"
<h1 id="header-title">Hello World</h1>
In javascript we can select the id using getElementId method like document.getElementById("header-title")
<!-- 2.getElementsByClassName:  -->
getElementsByClassName is a javaScript DOM method used to select class name. It can select multiple class name and style it and control it using getElementsByClassName method.
Example: <p class="p-1">This is  first paragraph</p> <p class="p-1">This is second paragraph</p>
we can select document.getelementsByClassName("p1").
