import Trivia from './Trivia.js';

const $txtQuestion = document.getElementById("question")
const $txtAnswerA = document.getElementById("answerA")
const $txtAnswerB = document.getElementById("answerB")
const $txtAnswerC = document.getElementById("answerC")
const $txtAnswerD = document.getElementById("answerD")
const $quizForm = document.getElementById("quizForm")
const $container = document.getElementById('container-questions')
const $modalEdit = document.getElementById("modalEdit")
const $btnEdit = document.getElementById("btnEdit") 

const quizzes = []

$quizForm.addEventListener("submit", addTrivia);
$container.addEventListener("click", changeCard)
$btnEdit.addEventListener("click", saveEdit)



//Crea las cards en base la quizzes
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

        const btnDelete =  template.querySelector(".btnDelete")
        const btnEdit = template.querySelector(".btnEdit")
        btnDelete.setAttribute("data-id", quizzes.indexOf(trivia))
        btnEdit.setAttribute("data-id", quizzes.indexOf(trivia))

        const clone = template.cloneNode(template)

        fragment.appendChild(clone)
    })

    $container.appendChild(fragment)


}
//Guarda la data editada
function saveEdit(e){
    e.preventDefault()

    const $answerA = document.getElementById("answerAEdit")
    const $answerB = document.getElementById("answerBEdit")
    const $answerC = document.getElementById("answerCEdit")
    const $answerD = document.getElementById("answerDEdit")

    const $optionAEdit = document.getElementById('optionAEdit')
    const $optionBEdit = document.getElementById('optionBEdit')
    const $optionCEdit = document.getElementById('optionCEdit')
    const $optionDEdit = document.getElementById('optionDEdit')
    const $questionEdit = document.getElementById("questionEdit")
    let answerCorrect = undefined

    const question = $questionEdit.value

    if($optionAEdit.checked){
        answerCorrect = $optionAEdit.value
    }
    if($optionBEdit.checked){
        answerCorrect = $optionBEdit.value
    }
    if($optionCEdit.checked){
        answerCorrect = $optionCEdit.value
    }
    if($optionDEdit.checked){
        answerCorrect = $optionDEdit.value
    }


    const answers = {
        'A': $answerA.value,
        'B': $answerB.value,
        'C': $answerC.value,
        'D': $answerD.value,
    }

    //Instancio nuevo objeto con la nueva data
    const newTrivia = new Trivia(question, answers,answerCorrect)
    //El index de la posicion id reemplaza a la trivia
    quizzes[Number($btnEdit.id)] = newTrivia
    //Limpio txt Edit
    resetEdit($questionEdit, $answerA, $answerB, $answerC, $answerD)
    //Creo las nueva card con quizzes actualizados
    createCard()
    //oculto modal
    $modalEdit.classList.toggle("hidden")

}

//Guarda nueva trivia al arreglo quizzes
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
//Control botones cards
function changeCard(e){
    const btnSelect = e.target
    //Al indice que es el id del btn lo eliminamos y volvemos a pintar el canvas de las cartas con el nuevo array
    if(btnSelect.classList.contains("btnDelete")){
        quizzes.splice(Number(btnSelect.dataset.id), 1)
    }
    if(btnSelect.classList.contains("btnEdit")){

        $modalEdit.classList.toggle("hidden")
        $btnEdit.id = btnSelect.dataset.id;
        
    }

    reset()
    createCard()
}

//Limpia form trivia
function reset(){
    $txtQuestion.value = "",
    $txtAnswerA.value = "",
    $txtAnswerB.value = "",
    $txtAnswerC.value = "",
    $txtAnswerD.value = "",
    $container.innerHTML=""
}
//Limpia formEdit
function resetEdit(question, answerA, answerB, answerC, answerD){
    question.value = "",
    answerA.value = "",
    answerB.value = "",
    answerC.value = "",
    answerD.value = "",
    $container.innerHTML=""

}

