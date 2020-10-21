document.addEventListener("DOMContentLoaded", function(event){
    showQuizBtn.addEventListener('click', function(event) {
    console.log("what")
    buildQuiz()
    })
})

function buildQuiz() {
console.log('hey')
const output = [];

myQuestions.forEach((currentQuestion, questionNumber) => {
  const answers = [];

  for (var letter in currentQuestion.answers) {
    answers.push(
      `<label>
      <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
    </label>`
    );
  }

  output.push(
    `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join("")} </div>`
  );
});

quizContainer.innerHTML = output.join("");
}


const quizContainer = document.getElementById("quiz");
const showQuizBtn = document.getElementById('showQuiz')
const myQuestions = [{
  question: "Who is the strongest?",
  answers: {
    a: "Superman",
    b: "The Terminator",
    c: "Waluigi, obviously"
  },
  correctAnswer: "c"
},
{
  question: "What is the best site ever created?",
  answers: {
    a: "SitePoint",
    b: "Simple Steps Code",
    c: "Trick question; they're both the best"
  },
  correctAnswer: "c"
}
]
