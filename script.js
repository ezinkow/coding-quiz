// starts with start button
//     event listener?

// register the click from the button


var button = document.querySelector(".button")
var questionContainer = document.querySelector("#question-container")

const questionElement = document.querySelector("#question")
const answerButtons = document.querySelector("#answer-buttons")
let currentQuestionIndex

button.addEventListener("click", start)

function start() {
    setTimer()
    console.log("button click")
    button.parentElement.innerHTML = "";
    currentQuestionIndex = 0
    questionContainer.classList.remove("hide")
    nextQuestion()

}

// timer that counts down, decreases with every incorrect answer
//     timer on the left hand side
//     decrement time

var timeLeft = document.querySelector("#timer")
var secondsRemaining = 91

 // quiz starts // 1st question and answers come up // timer starts

 // timer begins on start
function setTimer() {
    var secondsLeft = setInterval(function() {
        secondsRemaining--;
        timeLeft.textContent = "Time: " + secondsRemaining;

        if(secondsRemaining ===0) {
            clearInterval(secondsLeft);
            // send message?
        }
    },1000);
}

function nextQuestion() {
    resetState()
    showQuestion(questions[currentQuestionIndex])
}

// Multiple choice questions one at a time
//     print on the screen a question with 4 multiple choice answers
//     each answer should be a button
//     answers appear in a list under the question

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtons.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })  
    answerButtons.addEventListener("click", () => {
        console.log("next question")
        currentQuestionIndex++
        nextQuestion()
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
        }
    }

    function clearStatusClass(element) {
        element.classList.remove("correct")
        element.classList.remove("wrong")
      }

const questions = [
    {
    question: "What are the three base languages of coding?",
    answers: [
        { text: "html, css, JavaScript", correct: true},
        { text: "html, qwerty, JavaScript", correct: false},
        { text: "jquery, bootstrap, html", correct: false},
        { text: "css, pdf, ruby", correct: false}
        ]
    },
    {
    question: "In JavaScript, what element is used to store and manipulate text usually in multiples?",
    answers: [
        { text: "Arrays", correct: false},
        { text: "Function", correct: false},
        { text: "Strings", correct: true},
        { text: "Variables", correct: false},
    ]
    },
    {
    question: "What is the element used – and hidden – in code that explains things and makes the content more readable?",
    answers: [
        { text: "Notes", correct: false},
        { text: "Comments", correct: true},
        { text: "Quotations", correct: false},
        { text: "Comparisons", correct: false},
    ]
    },
    {
    question: "What is a JavaScript element that represents either TRUE or FALSE values?",
    answers: [
        { text: "Event", correct: false},
        { text: "RegExp", correct: false},
        { text: "Condition", correct: false},
        { text: "Boolean", correct: true},
    ]
    },
    {
    question: "What is the mathematical operator for not equal to?",
    answers: [
        { text: "/=", correct: false},
        { text: "=|=", correct: false},
        { text: "!=", correct: true},
        { text: "<=>", correct: false},
    ]
    },
    {
    question: "We use 'prompt' to:",
    answers: [
        { text: "return a user input", correct: true},
        { text: "return a true or false", correct: false},
        { text: "tell the user they did something incorrect", correct: false},
        { text: "send a message to the user", correct: false},
    ]
    },
    {
    question: "What is the selector for 'class'?",
    answers: [
        { text: "$", correct: false},
        { text: ".", correct: true},
        { text: "#", correct: false},
        { text: "!", correct: false},
    ]
    },
    {
    question: "We use _____ to retrieve data in an input field.",
    answers: [
        { text: ".getInput", correct: false},
        { text: ".retrieveData", correct: false},
        { text: ".value", correct: true},
        { text: ".inputData", correct: false},
    ]
    }
]

// tracks high scores
//     save scores to local storage

// enter initials at the end to save your score
    // input field for initials that save to local
// */ /*