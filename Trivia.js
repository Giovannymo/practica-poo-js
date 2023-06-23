export default class Trivia {

    constructor(question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    set question(question){
        this.question = question
    }
    get question(){
        return this.question
    }

    set answers(answers){
        this.answers = answers
    }

    get answers(){
        return this.answers
    }

    set correct(correct){
        this.correct = correct
    }

    get correct(){
        return this.correct
    }


    show(){
        return console.log(this.question, this.answers, this.correct);
    }

}