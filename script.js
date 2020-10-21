// starts with start button
//     event listener?

// register the click from the button


var button = document.querySelector(".btn.btn-primary")
var questionContainer = document.querySelector("#question-container")
var wrong1 = document.querySelector("#wrong1")
var wrong2 = document.querySelector("#wrong2")
var wrong3 = document.querySelector("#wrong3")
var right = document.querySelector("#right")

const questionElement = document.querySelector("#question")
const answerButtons = document.querySelector("#answer-buttons")
let shuffledQuestions, currentQuestionIndex

button.addEventListener("click", start)

function start() {
    console.log("button click")
    button.parentElement.innerHTML = "";
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setTimer()
    questionContainer.classList.remove("hide")
    nextQuestion()
}
function nextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

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
    
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
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
//     
//     // timer begins
    
//     
// // quiz starts // 1st question and answers come up // timer starts
//     var btn1 = document.createElement("answer1")
//     btn1.innerHTML = ""
//     document.body.append(btn1)
//     question.textContent = question1.question;
//     wrong1.textContent = question1.wrong1;
//     wrong2.textContent = question1.wrong2;
//     wrong3.textContent = question1.wrong3;
//     right.textContent = question1.right;
// })

// var question = document.querySelector("#question")
// var questions = [question1, question2, question3]
// var theQuiz = document.querySelector("#quiz")

// function renderQuestions (){
//     // question.innerHTML = "";

//     // render a new list for each question
//     for (var i = 0; i < 10; i++) {
//         var question = questions[i];

//     var li = document.createElement("li");
//     li.textContent = question;
//     li.setAttribute("q-and-a", i);

//     var button = document.createElement("button");
//     button.textContent = question1.question;

//     li.append(button);
//     theQuiz.append(li);
//     }
// }


// Multiple choice questions one at a time
//     print on the screen a question with 4 multiple choice answers
//     each answer should be a button
//     NOTE: need to decide how to print on the screen
//     answers appear in a list under the question


const questions = [
    {
    question: "What are the three base languages of coding?",
    answers: [
        {text: "html, css, JavaScript", correct: true },
        {text: "html, qwerty, JavaScript", correct: false}
    // wrong1 : ,
    // wrong2 : "jquery, bootstrap, html",
    // wrong3 : "css, pdf, ruby",
    // right : "html, css, JavaScript"
        ]
    }
]

// var question2 = {
//     wrong1 : "wrong answer 1",
//     wrong2 : "wrong answer 2",
//     wrong3 : "wrong answer 3",
//     right : "right answer"
// };

// var question3 = {
//     wrong1 : "wrong answer 1",
//     wrong2 : "wrong answer 2",
//     wrong3 : "wrong answer 3",
//     right : "right answer"
// };

// timer that counts down, decreases with every incorrect answer
//     timer on the left hand side
//     decrement time

var timeLeft = document.querySelector("#timer")
var secondsRemaining = 90

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

timeLeft.setAttribute("style", "text-align: right; font-size:40px; margin-right: 20px; color: blue; width: auto")
// tracks high scores
//     save scores to local storage

// enter initials at the end to save your score
//     input field for initials that save to local

// renderQuestions()
// var submitButton = document.createElement()

