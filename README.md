To incorporate javascript with HTML and CSS, we use the <script src="./script.js"></script>. This enables you to go from HTML to javascript, however in javascript, to access HTML, you have to use the code:

 const element = document.getElementById("elementId");

Here, you can access a specific HTML code via its ID, this can also be used to access a class or a tagname considering you substitute either of these two with the ID otherwise the code still remains the same. For class it would look like,

const element = document.getElementById("className");

To access CSS in javascript we use a method called a querry selector. Here, for it to return te first matching element we use the following code:

const element = document.querySelector(".className"); 

this will select the first item with class in it. For us to select all items with the said class we use the following method:

const allElements = document.querySelectorAll(".className"); 

Additionally, to access the entire document body we use this code:

const body = document.body;

lastly, we may want to change or modify the elemets in my HTML file, we use the following code:

element.innerHTML = "New content";  // Changes inner HTML
element.style.color = "blue";       // Changes CSS style
element.classList.add("new-class"); // Adds a new CSS class

//Core concepts to grasp;
# Core Concepts to Master

Before adding complexity to your project, ensure you have a solid understanding of the following core concepts:

| Concept                     | Why It Matters                                           | Example                               |
|-----------------------------|---------------------------------------------------------|---------------------------------------|
| **Event Handling**          | Used to trigger responses through user interactions.    | Sending a message on pressing the Enter key. |
| **DOM Manipulation**        | Enables dynamic creation and management of elements.    | Using `document.createElement()` and `.appendChild()`. |
| **Functions & Modular Code**| Keeps your code organized and easy to expand.           | Functions like `sendMessage()` and `getBotResponse()`. |
| **LocalStorage / SessionStorage** | Allows you to save chat history or user settings. | Using `localStorage.setItem()`.      |
| **JSON**                    | Helps in storing messages in a structured format.       | Converting a chat array to a JSON string. |
| **Conditionals and Loops**  | Provides logic for generating responses or matching patterns. | Using `if...else` statements and `.forEach()`. |

Make sure to master these concepts before moving on to more complex features!