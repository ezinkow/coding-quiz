// starts with start button
//     event listener?

// register the click from the button


var startButton = document.querySelector("#start")
var question = document.querySelector("#question")
var wrong1 = document.querySelector("#wrong1")
var wrong2 = document.querySelector("#wrong2")
var wrong3 = document.querySelector("#wrong3")
var right = document.querySelector("#right")

startButton.addEventListener("click",function(event) {
    console.log("button click")
    // timer begins
    setTimer()
    startButton.parentElement.innerHTML = "";
// quiz starts // 1st question and answers come up // timer starts
    question.textContent = question1.question;
    wrong1.textContent = question1.wrong1;
    wrong2.textContent = question1.wrong2;
    wrong3.textContent = question1.wrong3;
    right.textContent = question1.right;
})



// Multiple choice questions one at a time
//     print on the screen a question with 4 multiple choice answers
//     NOTE: need to decide how to print on the screen
//     answers appear in a list under the question

var question1 = {
    question: "question",
    wrong1 : "wrong answer 1",
    wrong2 : "wrong answer 2",
    wrong3 : "wrong answer 3",
    right : "right answer",
};

var question2 = {
    wrong1 : "wrong answer 1",
    wrong2 : "wrong answer 2",
    wrong3 : "wrong answer 3",
    right : "right answer",
};

var question3 = {
    wrong1 : "wrong answer 1",
    wrong2 : "wrong answer 2",
    wrong3 : "wrong answer 3",
    right : "right answer",
};

// timer that counts down, decreases with every incorrect answer
//     timer on the left hand side
//     decrement time

var timeLeft = document.querySelector("#timer")
var secondsRemaining = 90

function setTimer() {
    var secondsLeft = setInterval(function() {
        secondsRemaining--;
        timeLeft.textContent = secondsRemaining + " seconds left";

        if(secondsRemaining ===0) {
            clearInterval(secondsLeft);
            // send message?
        }
    },1000);
}

// tracks high scores
//     save scores to local storage

// enter initials at the end to save your score
//     input field for initials that save to local

var eachQuestion = document.querySelector("#question")
var theQuiz = document.querySelector("#quiz")