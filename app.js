var app = new Vue ({
    el: "#app",
    data: {
        message: "",
        prompt: "Ask a question",
        messageBank: [
            "Yes",
            "No",
            "Maybe",
            "Ask Again Tomorrow",
            "Probably",
            "Probably Not"
        ],
        //Question asked by user
        question: ""
    },
    methods: {
        askQuestion: function() {
            if (this.isValidQuestion()){
            //Not necessary as it is data this.question;
            let nextIndex = Math.floor(Math.random()*this.messageBank.length);
            let nextResponse = this.messageBank[nextIndex];
            this.message = nextResponse;
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