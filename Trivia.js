export default class Trivia {

    constructor(question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    setQuestion(newQuestion){
        this.question = newQuestion
    }
    getQuestion(){
        return this.question
    }

    setAnswers(answers){
        this.answers = answers
    }

    getAnswers(){
        return this.answers
    }

    setCorrect(correct){
        this.correct = correct
    }

    getCorrect(){
        return this.correct
    }


    show(){
        return console.log(this.question, this.answers, this.correct);
    }

}