const API_URL = "https://cs2022-eight-ball.herokuapp.com"
/*
Fetch Methods (Restful Api):
Get - Recieve something from server
Post - Give something to the server
Put - Replace entry with new entry
    Patch - Convoluted
Delete 

Example:
fetch(URL + "/resource", {
    method: "GET"
})
*/

var app = new Vue ({
    el: "#app",
    data: {
        message: "",
        messageColor: "",
        answerReady: true,
        prompt: "Ask a question",
        // messageBank: [
        //     "Yes",
        //     "No",
        //     "Maybe",
        //     "Ask Again Tomorrow",
        //     "Probably",
        //     "Probably Not"
        // ],
        //Question asked by user
        question: ""
    },
    methods: {
        askQuestion: function() {
            if (this.isValidQuestion()){
            //Not necessary as it is data this.question;
            // let nextIndex = Math.floor(Math.random()*this.messageBank.length);
            // let nextResponse = this.messageBank[nextIndex];
            //this.message = nextResponse;
            this.answerReady = false;
            this.message = "";
            this.messageColor = "rgba(255, 255, 255, 0)";
            setTimeout(() => {
                fetch(API_URL + "/questions").then((response) => {
                    response.json().then((data) => {
                        console.log(data);
                        this.message = data.answer;
                        this.messageColor = data.color;
                        setInterval(() => {
                            this.answerReady = true;
                        }, 1000);
                        //This forces vue to update html
                        //this.$forceUpdate();
                    });
                });
            }, 2000);
            this.prompt = "Ask another question";
            this.question = "";
            }
            //this.question = "";
        },
        isValidQuestion: function() {
            return this.question[this.question.length-1] == "?";
    
        }
    }
})