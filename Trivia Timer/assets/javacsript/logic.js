//start function 
//start timer
//display questions

//function in order of importance
//start game function
//input functions:
//click function for answers
//function for right/wrong answers
//end game function
//reset  game function

//start game function
$("#start").on("click", function () {
  setTimeout(gameEnd, 45000);
  start();
});
  
// function gameStart () {
//   start();
//   alert("time is up");
// }

//var useranswers=['new york', 'misty copeland', 'power moves', 'maxine waters','samuel l jackson', 'walmart', 'big freedia','ice cube','car','black panther', 'fenty beauty', 'kelis'];


//create a variable for answer choices? 
var answerChoices = []
//click function for user to click on multiple choice answers
$("#answers").on("click", function () {
  $("#answerChoices").text(questions.choices);
  setTimeout(gameEnd, 45000);
  start();
});


//click function for answers
// $("#useranswers").on("click", function () {
//     $("#useranswers").html(useranswers);
// });

// function userAnswers () {
//     $("#useranswers").text()
// }

//function for game reset
function gameReset () {
  //use clearInterval to reset game
  clearInterval();
  start();
}

var answerscorrect= 0;

//function to end game 
function gameEnd () {
  alert("time is up!");
  //check if user is winning or losing
  //increase or decrease 
}

var questions = [
  {
    question: "Biggie Smalls is from..",
    choices:['New York', 'Philadelphia','Florida', 'Boston'],
    answer: "New York" 
  },
  {
    question: "First African American principal dancer for American Ballet Theatre",
    answer: "misty copeland",
  },
  {
    question: "Breakdancing is a type of dance that includes...",
    answer:"power moves",
  },
  {
    question: "This government official became viral for saying the phrase,'reclaiming my time'.",
    answer: "maxine waters",
  },
  {
    question: "This actor always has a job",
    answer:"samuel l jackson",
  },
  {
    question: "Which store always has one line open?",
    answer: "Walmart",
  },
  {
    question: "New Orleans star famous for founding 'bounce music'",
    answer:"big freedia", 
  },
  {
    question: "Felicia  wanted to borrow Craig's.....",
    answer: "car",
  },
  {
    question: "Superhero and socialist organization",
    answer:"black panther",
  },
  {
    question: "2017 Make-up line that is always sold out of darker foundation shades ",
    answer: "fenty beauty",
  },
  {
    question: "Started as a rapper, and now an actor",
    answer:"ice cube",
  },
  {
    question: "Artist turned chef",
    answer:"kelis",
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
$('#questionTwo').append(questions[1].question);
$('#questionThree').append(questions[2].question);
$('#questionFour').append(questions[3].question);

}
// function that will keep track of time by increasing by variable by 1
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


//conditional checking if answer is correct or wrong

