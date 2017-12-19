//start function 
//start timer
//display questions

$("#start").on("click", function () {
  setTimeout(gameEnd, 45000);
  start();
});
  
// function gameStart () {
//   start();
//   alert("time is up");
// }

var answerscorrect= 0;

function gameEnd () {
  alert("time is up!");
  //check if user is winning or losing
  //increase or decrease 
}

var questions = [
  {
    question: "what color is the sky",
    answer: "blue"
  },
  {
    question: "question number 2",
    answer: "answer number 2",
  }
]





// Start timer
// variable to hold interval
var intervalId;
var counter = 45;
console.log(counter);
// function to set off time count
function start() {
  intervalId = setInterval(count, 45000);
$('#questionOne').append(questions[0].question);
$('#questionTwo').append(question[1].question);
}
// function that will keep track of time by increasing ba variable by 1
function count() {
  counter = counter - 1;
  // console.log(counter);
  $("#timer").html(counter);
  checkForZero();
}

function checkForZero() {
  if (counter == 0) {
    clearInterval(intervalId);
  }
}

//start();
