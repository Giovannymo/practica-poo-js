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

    reset()

    const trivia = new Trivia(question, answers, 0)

    quizzes.push(trivia)
    createCard()
}

function createCard(){
    const fragment = document.createDocumentFragment()


    quizzes.forEach(quiz =>{
        /**
        const $card = document.createElement('div')
        $card.className = "p-5 rounded w1/4"
        fragment.appendChild($card)


        const $question = document.createElement('h2')
        $question.textContent = quiz.question
        fragment.appendChild($question)
        * */
        

    })
    Object.entries(quizzes[0].answers)
    
    

}


function reset(){
    $txtQuestion.value = "",
    $txtAnswerA.value = "",
    $txtAnswerB.value = "",
    $txtAnswerC.value = "",
    $txtAnswerD.value = ""      
}

 




