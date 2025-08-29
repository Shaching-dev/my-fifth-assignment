Question-1
What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

1.getElementById:
getElementById is DOM method which is used to select an id of a HTML element.
This method only select one unique id. That means one element should have one id.
Example:In html file we have a h1 tag and has an id called "header-title"
In javascript we can select the id using getElementId method like document.getElementById("header-title")
It returns html collection. It will give null if the id name is not matched.

2.getElementsByClassName:
getElementsByClassName is a javaScript DOM method used to select class name. It can select multiple class name and style it and control it using getElementsByClassName method.
Example: In HTML file we have some elements class name "comment"
we can select document.getelementsByClassName("commment").
It returns html collection. It will give null if the id name is not matched.

3.querySelector: 
querySelector is a javaScript DOM method. It only selects first element from the html file using CSS selector.
document.querySelector("css selector")

4.querySelectorAll:
querySelectorAll is a javaScript DOM method used that selects multiple elements from the html file using CSS Selectors
For example we have a div and it's  id named "comment" and in this div we have a h1 tag and it's class name is 'header-title' .
we can select using querySelectorAll method
document.querySelectorAll("#comment .header-title"). It returns NodeList.

Question-2:How do you create and insert a new element into the DOM?.
Answer: To create an element we use document.createElement() method and to make visisble it in browser                                                                         we use document.body.appendChild("created element name")
What is Event Bubbling and how does it work?
What is Event Bubbling and how does it work?

Question-3:What is Event Bubbling and how does it work?
Answer: Event bubbling is a process where if you click or change something the browser will change. It happens when  an element receives an event. For example : want to make a function where if i click a button the button's background color will change. So to do that we have to target the button's id to get button id we have to use getElememntById method. Then have to use .addEventListener("click", function(){

}).

Question-4: What is Event Delegation in JavaScript? Why is it useful?
