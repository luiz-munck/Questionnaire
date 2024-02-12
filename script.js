
const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");
const quizItem = template.content.cloneNode(true);

quiz.appendChild(quizItem);