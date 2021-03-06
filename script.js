// starts with start button
//     event listener?

// register the click from the button

var controls = document.querySelector(".controls")
var startButton = document.querySelector(".btn.btn-primary")
var questionContainer = document.querySelector("#question-container")
var container = document.querySelector(".container")
const questionElement = document.querySelector("#question")
const answerButtons = document.querySelector("#answer-buttons")
var scoreDisplay = document.querySelector("#display-score")
var questionDisplay = document.querySelector("#question-number")
var saveScore = document.querySelector("#save-score")
var submit = document.querySelector(".submit-button")
var initialsInput = document.querySelector("#initials")
var restartButton = document.querySelector("#restart")
var timeLeft = document.querySelector("#timer")
var secondsRemaining = 91
let currentQuestionIndex = 0
let countRightAnswers = 0



// timer that counts down, decreases with every incorrect answer
//     decrement time
startButton.addEventListener("click", start)
 // timer begins on start
 function setTimer() {
        var secondsLeft = setInterval(function() {
        secondsRemaining--;
        timeLeft.textContent = "Time: " + secondsRemaining;

        if(secondsRemaining === 0) {
            clearInterval(secondsLeft);
            enterScore();
        }
    },1000);
}
    //start button to start quiz
    // quiz starts // 1st question and answers come up // timer starts
function start() {
    setTimer();
    controls.classList.add("hide")
    currentQuestionIndex = 0
    questionContainer.classList.remove("hide")
    container.classList.remove("hide")
    scoreDisplay.classList.remove("hide")
    questionDisplay.classList.remove("hide")
    nextQuestion()

}

    // get to next question
function nextQuestion() {
    resetState()
    showQuestion(questions[currentQuestionIndex])
}

// Show questions and make buttons for answers
// Multiple choice questions one at a time

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        //     Make each answer a button
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtons.appendChild(button)

        })

    var questionNumber = currentQuestionIndex + 1
    questionDisplay.innerText = "Question " + (questionNumber) + "/10"
    }
    

// reset right and wrong answers every question
function resetState() {
    clearStatusClass(document.body)
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
    // end of quiz, start function to allow user to enter initials
    if (questions.length === currentQuestionIndex + 1) {
        enterScore();}
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtons.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (selectedButton.dataset = correct) {
    // Keep score for correct answers
    countRightAnswers++;
    scoreDisplay.innerHTML = "Score: " + countRightAnswers + "/10";
    }
    // mark answers if wrong
        else if (selectedButton.dataset = "wrong") {
            scoreDisplay.innerHTML = "Score: " + countRightAnswers + "/10";
    // Decrement 10 seconds for wrong answer
            secondsRemaining = secondsRemaining - 10
        }
    }
    
    // save high score to local storage
    function enterScore () {
        questionContainer.classList.add("hide")
        timeLeft.classList.add("hide")
        questionDisplay.classList.add("hide")
        saveScore.classList.remove("hide")
    // enter initials at the end to save your score
        submit.addEventListener("click",function(event) {
            saveHighUserScore = {
                initials: initialsInput.value.trim(),
                score: countRightAnswers
            }
            event.preventDefault()
            localStorage.setItem("Scores",JSON.stringify(saveHighUserScore));
            restartButton.classList.remove("hide")
        })
        //start quiz over
        restartButton.addEventListener("click", function() {
            location.reload()
        })
    }

        // make clicking on an answer move to next question
    answerButtons.addEventListener("click", function() {
        currentQuestionIndex++
        nextQuestion();
})

    //adding class right or wrong to answers
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

    //questions and answers:
const questions = [
    {
    question: "What are the three base languages of coding?",
    answers: [
        { text: "html, css, JavaScript", correct: true},
        { text: "span, qwerty, div", correct: false},
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
    },
    {
    question: "What is the terminal command to create a new file?",
    answers: [
        { text: "mkfile", correct: false},
        { text: "mkdir", correct: false},
        { text: "tchfile", correct: false},
        { text: "touch", correct: true},
    ]
    },
    {
    question: "What is Pseudocode?",
    answers: [
        { text: "Half-assing code", correct: false},
        { text: "Plain language description of the code you will write", correct: true},
        { text: "Getting through some of your code", correct: false},
        { text: "Sham code", correct: false},
    ]
    },
    //placeholder question to avoid error
    {
    question: "This is the end of the quiz",
    answers: [
        { text: "answer", correct: false},
        { text: "answer", correct: false},
        { text: "answer", correct: true},
        { text: "answer", correct: false},
    ]
    }
]