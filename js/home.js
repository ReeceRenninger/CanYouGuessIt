'use strict';

//********** GLOBAL VARIABLES*/
let questionListKeys = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
];
let questionDisplay = document.createElement('h2');
let startBtn = document.getElementById('startGame');
let userName = document.getElementById('user-information');
let questionBox = document.getElementById('question-box');
let answers = document.getElementById('solution-container');
let score = 0;
let questionIndex = 0;
let playerArray = [];

//********** CONSTRUCTOR FUNCTION(S) */

function User(name) {
  this.name = name;
  this.score = 0;
}

//********** HELPER FUNCTIONS*/

function startGame() {
  questionDisplay.id = 'questionDisplay';
  questionBox.appendChild(questionDisplay);
  renderQuestion();
  document.getElementById('intro').style.visibility = 'hidden';
}

function renderQuestion() {
  questionDisplay.textContent = questionList[questionListKeys[questionIndex]].question;
  renderAnswers();
}
function renderAnswers() {
  for (let i = 0; i < questionList[questionListKeys[questionIndex]].questionChoices.length; i++) {
    let answerChoices = document.createElement('div');
    answerChoices.id = 'answerChoices';
    answerChoices.textContent = questionList[questionListKeys[questionIndex]].questionChoices[i];
    answers.appendChild(answerChoices);
  }
}

//********** LOCAL STORAGE STARTS HERE **********

function storeData() {
  let dataStored = readData();
  if (dataStored) {
    for (let i = 0; i < dataStored.length; i++) {
      playerArray.push(dataStored[i]);
    }
  }
  let stringifiedUsers = JSON.stringify(playerArray);
  localStorage.setItem('playerArray', stringifiedUsers);
}

function readData() {
  let rawData = localStorage.getItem('playerArray');
  let parsedData = JSON.parse(rawData);
  return parsedData;
}


// ******* EVENT HANDLER ********/
function handleStartGame() {
  document.getElementById('startGame').style.visibility = 'hidden';
  answers.style.visibility = 'visible';
  questionBox.style.visibility = 'visible';
  startGame();
}

function clickHandler(event) {
  if (
    questionIndex === 0 &&
    event.target.textContent === questionList.one.correct
  ) {
    alert('That was CORRECT!');
    score++;
  } else if (
    questionIndex === 0 &&
    event.target.textContent !== questionList.one.correct
  ) {
    alert('Sorry, the correct answer was Hyper Text Mark Up Language');
  }


  if (
    questionIndex === 1 &&
    event.target.textContent === questionList.two.correct
  ) {
    alert('That was CORRECT!');
    score++;
  } else if (
    questionIndex === 1 &&
    event.target.textContent !== questionList.two.correct
  ) {
    alert('Sorry, the correct answer was `You have logged in as ${first} ${last}`!');
  }


  if (
    questionIndex === 2 &&
    event.target.textContent === questionList.three.correct
  ) {
    alert('That was CORRECT!');
    score++;
  } else if (
    questionIndex === 2 &&
    event.target.textContent !== questionList.three.correct
  ) {
    alert('Sorry, the correct answer was The function must be called upon with a given set of arguments!');
  }


  if (
    questionIndex === 3 &&
    event.target.textContent === questionList.four.correct
  ) {
    alert('That was CORRECT!');
    score++;
  } else if (
    questionIndex === 3 &&
    event.target.textContent !== questionList.four.correct
  ) {
    alert('Sorry, the correct answer was the shift() method!');
  }


  if (
    questionIndex === 4 &&
    event.target.textContent === questionList.five.correct
  ) {
    alert('That was CORRECT!');
    score++;
  } else if (
    questionIndex === 4 &&
    event.target.textContent !== questionList.five.correct
  ) {
    alert('Sorry, the correct answer was em is relative to the font size of the parent and rem is relative to the font size of an html element!');
  }


  if (
    questionIndex === 5 &&
    event.target.textContent === questionList.six.correct
  ) {
    alert('That was CORRECT!');
    score++;
  } else if (
    questionIndex === 5 &&
    event.target.textContent !== questionList.six.correct
  ) {
    alert('Sorry, the correct answer was When an element receives an event and that event is transmitted to its parent elements in the DOM tree until it gets to the root element!');
  }


  if (
    questionIndex === 6 &&
    event.target.textContent === questionList.seven.correct
  ) {
    alert('That was CORRECT!');
    score++;
  } else if (
    questionIndex === 6 &&
    event.target.textContent !== questionList.seven.correct
  ) {
    alert('Sorry, the correct answer was You can use Inline, Internal, or External styling method. An external link file is generally best practice, however!');
  }


  if (
    questionIndex === 7 &&
    event.target.textContent === questionList.eight.correct
  ) {
    alert('That was CORRECT!');
    score++;
  } else if (
    questionIndex === 7 &&
    event.target.textContent !== questionList.eight.correct
  ) {
    alert('Sorry, the correct answer was The keys and values are always stored in the UTF-16 string format. As with objects, integer keys are automatically converted to strings!');
  }


  if (
    questionIndex === 8 &&
    event.target.textContent === questionList.nine.correct
  ) {
    alert('That was CORRECT!');
    score++;
  } else if (
    questionIndex === 8 &&
    event.target.textContent !== questionList.nine.correct
  ) {
    alert('Sorry, the correct answer was Headings!');
  }


  if (
    questionIndex === 9 &&
    event.target.textContent === questionList.ten.correct
  ) {
    alert('That was CORRECT!');
    score++;
  } else if (
    questionIndex === 9 &&
    event.target.textContent !== questionList.ten.correct
  ) {
    alert('Sorry, the correct answer was :border-color!');
  }

  if (questionIndex < 10) {
    questionIndex++;
  }

  if (questionIndex === 10) {
    document.querySelectorAll('#answerChoices').forEach((element) => element.remove());
    let gameOver = document.createElement('h1');
    gameOver.textContent = 'Thank you for playing our game, please enter your name! Then check the Score Board above to see how you did!';
    answers.appendChild(gameOver);
    userName.style.visibility = 'visible';
    questionDisplay.style.visibility = 'hidden';
    questionBox.style.visibility = 'hidden';
    answers.removeEventListener('click', clickHandler);//trying to prevent h1 repopulating on click
  } else {
    document.querySelectorAll('#answerChoices').forEach(element => element.remove()); // !! audrey told me to do it 2/28/23 @ 11:55
    renderQuestion();
  }
}
// ****** FORM HANDLING */
function handleFormSubmit(event) {
  event.preventDefault();
  let userName = event.target.userName.value;
  let scoreStore = { score, userName };
  playerArray.push(scoreStore);
  storeData();
  document.getElementById('user-information').reset();
}

// ********** EXECUTABLE CODE */
userName.addEventListener('submit', handleFormSubmit);
startBtn.addEventListener('click', handleStartGame);
answers.addEventListener('click', clickHandler);
userName.style.visibility = 'hidden';
answers.style.visibility = 'hidden';
questionBox.style.visibility = 'hidden';

