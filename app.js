import Trivia from './Trivia.js';

const $txtQuestion = document.getElementById("question")
const $txtAnswerA = document.getElementById("answerA")
const $txtAnswerB = document.getElementById("answerB")
const $txtAnswerC = document.getElementById("answerC")
const $txtAnswerD = document.getElementById("answerD")
const $quizForm = document.getElementById("quizForm")
const $container = document.getElementById('container-questions')

const quizzes = []

$quizForm.addEventListener("submit", addTrivia);


function addTrivia(e){
    e.preventDefault();

    const $optionA = document.getElementById('optionA')
    const $optionB = document.getElementById('optionB')
    const $optionC = document.getElementById('optionC')
    const $optionD = document.getElementById('optionD')
    let answerCorrect = undefined

    if($optionA.checked){
        answerCorrect = $optionA.value
    }
    if($optionB.checked){
        answerCorrect = $optionB.value
    }
    if($optionC.checked){
        answerCorrect = $optionC.value
    }
    if($optionD.checked){
        answerCorrect = $optionD.value
    }


    const question = $txtQuestion.value
    const answers = {
        'A': $txtAnswerA.value,
        'B': $txtAnswerB.value,
        'C': $txtAnswerC.value,
        'D': $txtAnswerD.value,
    }

    const trivia = new Trivia(question, answers, answerCorrect)
    quizzes.push(trivia)

    reset()
    createCard()


}

function createCard(){
    const fragment = document.createDocumentFragment()
    const template = document.getElementById('card').content
    quizzes.forEach(trivia =>{
        const question = template.querySelector('.question')
        
        question.textContent = trivia.question

        const $templateAnswers = template.querySelectorAll('label')
        //Recorre los label del template y recorre los objetos para agregarlo al canvas
        Array.from($templateAnswers).forEach(element =>{
            const $answer = element.querySelectorAll("span")[1]

            for(const answer in trivia.answers){
                if($answer.classList.contains("answerA")){
                    $answer.textContent = trivia.answers[answer]
                }
                if($answer.classList.contains("answerB")){
                    $answer.textContent = trivia.answers[answer]
                }
                if($answer.classList.contains("answerC")){
                    $answer.textContent = trivia.answers[answer]
                }
                if($answer.classList.contains("answerD")){
                    $answer.textContent = trivia.answers[answer]
                }

            }

        })
        const clone = template.cloneNode(template)

        fragment.appendChild(clone)
    })

    $container.appendChild(fragment)


}


function reset(){
    $txtQuestion.value = "",
    $txtAnswerA.value = "",
    $txtAnswerB.value = "",
    $txtAnswerC.value = "",
    $txtAnswerD.value = "",
    $container.innerHTML=""
}

