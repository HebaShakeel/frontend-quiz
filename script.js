const quizData = [
  {
    question:
      "What does an object need to be able to send a message to another object?",
    a: "Its class type",
    b: "The method for the message",
    c: "Polymorphism",
    d: "A reference to it",
    correct: "d",
  },
  {
    question: "What are props to a component?",
    a: "The properties of the class created for the component",
    b: "The proprietary, or parent component",
    c: "The object parameter to the component, arbitrary input",
    d: "Propagation, a flag for the component.",
    correct: "c",
  },
  {
    question:
      "If you have to create a new object from a previous one but modifying one property value, which of the following would be most useful?",
    a: "Ternary operator",
    b: "map method",
    c: "new operator",
    d: "Spread syntax",
    correct: "d",
  },
  {
    question:
      "Which is the most appropriate data structure for unique key-value pairs?",
    a: "Arrays",
    b: "Linked Lists",
    c: "Double linked binary tree invertible by a crazy algorithm",
    d: "Map",
    correct: "d",
  },
  {
    question:
      "How many OBJECTS do we need to have in order to say we are using polymorphism?",
    a: "3",
    b: "4",
    c: "2",
    d: "What is an object?",
    correct: "c",
  },
  {
    question: "Which are the 3 most common types of Dependency Injection?",
    a: "constructor, method and properties",
    b: "instantiation, consumer and command",
    c: "proxy, adapter and subclassing",
    d: "interface, setter and constructor",
    correct: "d",
  },
  {
    question:
      "What are the 6 primitive types according to the latest ECMAScript Standard?Number, Boolean, Symbol, String, and ...",
    a: "Float,Char",
    b: "Bit, Double",
    c: "BigInt, undefined",
    d: "Object,null",
    correct: "c",
  },
  {
    question: "What is a Thread?",
    a:
      "The instance of a computer program that can be executed by several Processes",
    b:
      "The smallest sequence instructions that can be managed independently by a scheduler",
    c: "An endpoint of two-way communication link",
    d: "None of the above",
    correct: "b",
  },
  {
    question: "What is Method Lookup?",
    a: "The process of finding an object through its reference",
    b: "The process to find the method definition for a message received",
    c: "The idea of hiding implementation of your methods",
    d: "Finding inner peace",
    correct: "b",
  },
  {
    question: "What is a Higher Order Function?",
    a: "A func that can be applied partially",
    b: "A func that is immutable",
    c: 'A func that is part of the cult "High Order"',
    d: "A func that receives or returns another func",
    correct: "d",
  },
  {
    question:
      "In Computer Science one form of automatic memory management is...",
    a: "Scheduler Automation",
    b: "Pointers Removal",
    c: "Garbage Collector",
    d: "Heap Overflow",
    correct: "c",
  },
  {
    question: "Which are the 3 fundamental pillars of OOP?",
    a: "Composition, Method Lookup, Inheritance",
    b: "Encapsulation, Messages, Polymorphism",
    c: "Interfaces, Scope, Delegation",
    d: "Encapsulation, Inheritance, Polymorphism",
    correct: "d",
  },
  {
    question: "How do you embed an audio player into your site?",
    a: '<a href="myCoolAudio.mp3">',
    b: '<iframe src="myCoolAudio.mp3">',
    c: '<reproducer from="myCoolAudio.mp3">',
    d: '<reproducer from="myCoolAudio.mp3"> src="myCoolAudio.mp3">',
    correct: "d",
  },
  {
    question:
      "Which method applied to a regex, returns true or false depending on finding your pattern on a string?",
    a: 'regex.try("a string")',
    b: 'regex.workPlsImBeggingYou("a string")',
    c: 'regex.match("a string")',
    d: 'regex.test("a string")',
    correct: "d",
  },
  {
    question: "What is a shallow copy?",
    a: "Is a copy of the pointer to an object, no values are copied.",
    b:
      "Is a copy of the values of an object. References to other objects are copied as a ref address.",
    c: "Is a full copy, all values, all levels.",
    d: "None of the above",
    correct: "b",
  },
  {
    question: "How many Headings tags are available (<h#>)?",
    a: "4 Headings, from 1 to 4",
    b: "6 Headings, from 0 to 6",
    c: "7 Headings from 1 to 7",
    d: " 6 Headings, from 1 to 6",
    correct: "d",
  },
  {
    question: "What is an IIFE?",
    a: "Immediately Initialized Function Established",
    b: "Immediately Invoked Function Expression",
    c: "Internal Input Function Expression",
    d: "Initialize Input Function Express",
    correct: "b",
  },
  {
    question: "How is Big O notation mostly used in computer science?",
    a: "To describe database performance",
    b: "To describe time and space complexity of algorithms",
    c: "To show how many days a project will take",
    d: "To explain scalability",
    correct: "b",
  },
  {
    question: "What does the splice method allow you to do?",
    a:
      "Remove 1 item from the array, add items to an array, get a new array with removed items",
    b: "Delete props from an object",
    c: "Map items",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "What is the purpose of an interface?",
    a: "Allowing multiple classes to share functionality",
    b: "Sharing state across your application",
    c: "Creating a contract to allow classes to implement it",
    d: "Something about TDD, interface all the things",
    correct: "c",
  },
  {
    question: "What is the difference between the tags <ul> and <ol>?",
    a: "ul is unit list, ol for every other type of lists",
    b: "ol for ordered list, ul for universal list",
    c: "ul for unordered list, ol  for outstanding list",
    d: "ul for unordered list, ol for ordered list",
    correct: "d",
  },
  {
    question: "What is a Mixin used for?",
    a: "Creating new objects from a blueprint",
    b: "Injecting dependencies across project",
    c: "Sharing methods between classes",
    d: "Work with collections in an easy manner",
    correct: "c",
  },
  {
    question:
      "Which tag is used for further describing the surrounding content (indirectly related)?",
    a: "<article>",
    b: "<footer>",
    c: "<aside>",
    d: "<indirect>",
    correct: "c",
  },
  {
    question: "Where should the <title> tag be written?",
    a: "Inside the <body>",
    b: "Inside the <header>",
    c: "Inside the <head>",
    d: "None of the above",
    correct: "c",
  },
  {
    question: "What is the DOM?",
    a: "Domain Objects Manipulation is a tool to encapsulate domain objects.",
    b: "Document Object Model is a standard for accessing documents.",
    c:
      "Documenter Of Metrics is a JS framework that tracks the performance of your site.",
    d: "None of the above",
    correct: "b",
  },
  {
    question: "Single and double quotes in JS:",
    a: "Single for characters, double for strings",
    b: "Singles for string template, double for standard",
    c: "They work the same but have to start and end with the same type",
    d: "No idea",
    correct: "c",
  },
  {
    question: "The attribute alt in tag img is for:",
    a: "Key combination with Alt key to select the image",
    b: "Alternate text for the image if it cannot be displayed.",
    c: "To specify if the image is alterable dynamically.",
    d: "None of the above",
    correct: "b",
  },
  {
    question:
      "In CSS which of the following can't be the value of clear property? ",
    a: "left",
    b: "center",
    c: "right",
    d: "both",
    correct: "b",
  },
  {
    question: "What command would let you modify your previous commit?",
    a: "--fix",
    b: "--modify",
    c: "--amend",
    d: "--quickfix",
    correct: "c",
  },
  {
    question:
      "In JavaScript, which of given options is an incorrect variable name?",
    a: "javascript",
    b: "_javascript",
    c: "$javascript",
    d: "-javascript",
    correct: "d",
  },
  {
    question: "In HTML which of the following is not an HTML 5 tag?",
    a: "<video>",
    b: "<track>",
    c: "<source>",
    d: "<slider>",
    correct: "d",
  },
  {
    question: "Which element is restricted to inline content? ",
    a: "<dt>",
    b: "<dl>",
    c: "<dd>",
    d: "<ul>",
    correct: "a",
  },
  {
    question: "Which of these CSS properties isn't real?",
    a: "object-fit",
    b: "pointer-events",
    c: "font-smoothing",
    d: "text-opacity",
    correct: "d",
  },
  {
    question:
      "Which of the following function of String object would compare a regular expression with a string?",
    a: "match()",
    b: "concat()",
    c: "replace()",
    d: "search()",
    correct: "a",
  },
  {
    question:
      "What is the function of Array object that runs through each element of the array?",
    a: "filter()",
    b: "every()",
    c: "forEach()",
    d: "concat()",
    correct: "c",
  },
  {
    question:
      "What is the function of Array object that adds and/or removes elements from an array?",
    a: "sort()",
    b: "splice()",
    c: "unshift()",
    d: "toSource()",
    correct: "b",
  },
  {
    question:
      "In CSS, Select the property used to set the spacing in between lines of text?",
    a: "line-height",
    b: "letter-spacing",
    c: "line-spacing",
    d: "None",
    correct: "a",
  },
  {
    question: "What are the three phases of event propagation? ",
    a: "Target > Capturing > Bubbling",
    b: "Bubbling > target > Capturing",
    c: "Target > Bubbling > Capturing",
    d: "Capturing > Target > Bubbling",
    correct: "d",
  },
  {
    question:
      "Which of the following type of variable is visible everywhere in your JavaScript code?",
    a: "global variable",
    b: "local variable",
    c: "both of the above",
    d: "none of the above",
    correct: "a",
  },
  {
    question:
      "In CSS Which of the following property is used to control the scrolling of an image in the background?",
    a: "background-attachment",
    b: "background-repeat",
    c: "background",
    d: "background-position",
    correct: "a",
  },
  {
    question: "HTML documents are saved in",
    a: "Special binary format",
    b: "Machine language codes",
    c: "ASCII text",
    d: "None of the above",
    correct: "c",
  },
  {
    question: "What's the correct HTML for adding a background color?",
    a: '<body bg="green">',
    b: '<body style="background-color: green;">',
    c: "<background> green <background>",
    d: "All the above",
    correct: "b",
  },
  {
    question: "In HTML <input> is",
    a: "format tag",
    b: "empty tag",
    c: "both of the above",
    d: "none of these",
    correct: "b",
  },
];
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const question01 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  question01.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  //check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} correctly.</h2>

      <button onclick="location.reload()">Reload</button>`;
    }
  }
});
