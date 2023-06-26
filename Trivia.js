export default class Trivia {

    constructor(question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    set setQuestion(question){
        this.question = question
    }
    get getQuestion(){
        return this.question
    }

    set setAnswers(answers){
        this.answers = answers
    }

    get getAnswers(){
        return this.answers
    }

    set setCorrect(correct){
        this.correct = correct
    }

    get getCorrect(){
        return this.correct
    }


    show(){
        return console.log(this.question, this.answers, this.correct);
    }

}