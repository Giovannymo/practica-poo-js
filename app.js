import Trivia from './Trivia.js';

const $txtQuestion = document.getElementById("question")
const $txtAnswerA = document.getElementById("answerA")
const $txtAnswerB = document.getElementById("answerB")
const $txtAnswerC = document.getElementById("answerC")
const $txtAnswerD = document.getElementById("answerD")
const $quizForm = document.getElementById("quizForm")

const quizzes = []

$quizForm.addEventListener("submit", addTrivia);


function addTrivia(e){
    e.preventDefault();

    const question = $txtQuestion.value
    const answers = {
        'A': $txtAnswerA.value,
        'B': $txtAnswerB.value,
        'C': $txtAnswerC.value,
        'D': $txtAnswerD.value,
    }

    const trivia = new Trivia(question, answers, 0)

    quizzes.push(trivia)



}

