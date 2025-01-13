const questions = [
    {
      question: "Which is the largest animal in the world?",
      answers: [
        { text: "Shark", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Elephant", correct: false },
        { text: "Giraffe", correct: false },
      ],
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Earth", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Venus", correct: false },
      ],
    },
    {
      question: "What is the capital of France?",
      answers: [
        { text: "Rome", correct: false },
        { text: "Madrid", correct: false },
        { text: "Paris", correct: true },
        { text: "Berlin", correct: false },
      ],
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      answers: [
        { text: "Oxygen", correct: true },
        { text: "Gold", correct: false },
        { text: "Silver", correct: false },
        { text: "Iron", correct: false },
      ],
    },
  ];

  
const questionElement= document.getElementById("question")
const answerButtons= document.getElementById("answer-buttons")
const nextButton=document.getElementById("next-btn");

let currQuestionIndex=0;
let score=0;

function startQuiz(){
    currQuestionIndex=0;
    score=0;
    nextButton.innerHTML="next"
    showQuiz()
}

function showQuiz(){
    resetState();
    //for question
    let currQuestion= questions[currQuestionIndex];
    let questionNo= currQuestionIndex+1;
    questionElement.innerHTML= questionNo +". " + currQuestion.question

    //for answers
    currQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn")
        answerButtons.appendChild(button)
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }

        button.addEventListener("click",selectAnswer)
    }) 
}

function selectAnswer(e){
    
    const selectedbtn= e.target;
    const isCorrect= selectedbtn.dataset.correct==="true";

    if(isCorrect){
        selectedbtn.classList.add("correct");
        score++;
    }
    else{
        selectedbtn.classList.add("incorrect");
    }

    // to select button only single time
    Array.from(answerButtons.children).forEach((button) => {
        if (button.dataset.correct == "true") {
          button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
  }

function handleNextButton(){
    currQuestionIndex++;
  if (currQuestionIndex < questions.length) {
    showQuiz();
  }
  else{
    showScore();
  }

}


nextButton.addEventListener("click", () => {
    if (currQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      startQuiz();
    }
  });


function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }


startQuiz();