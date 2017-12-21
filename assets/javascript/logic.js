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

//Problems:
//will not display multiple choice answers
//no reset function
//the buttons for the choices does not work?

//start game function
$("#start").on("click", function () {
  setTimeout(gameEnd, 45000);
  start();
});


// Start timer
// variable to hold interval
var intervalId;
var counter = 45;
console.log(counter);

//array that has questions, choices, and answers
var gameQuestions = [
  {
    question: "Biggie Smalls is from..",
    choices:["New York", "Philadelphia","Florida", "Boston"],
    answer: 0 // "New York" 
  },
  {
    question: "First African American principal dancer for American Ballet Theatre",
    choices:["debbie allen", "phyllica rashad","misty copeland", "halle berry"],
    answer: 2 //"misty copeland",
  },
  {
    question: "Breakdancing is a type of dance that includes...",
    choices:["soul trains", "salsa","jerking", "power moves"],
 answer: 3 //"power moves",
  },
  {
    question: "This government official became viral for saying the phrase,'reclaiming my time'.",
       choices:["maxine waters", "gabrielle union","omarosa manigault", "michelle obama"],
   answer: 0 // "maxine waters",
  },
  {
    question: "This actor always has a job",
    choices:["james earl jones", "samuel l jackson","terrence howard", "luther vandross"],
    answer: 1 //"samuel l jackson",
  },
  {
    question: "Which store always has one line open?",
    choices:["Dollar Tree", "Family Dollar","Walmart", "Target"],
    answer: 3 //"Walmart",
  },
  {
    question: "New Orleans star famous for founding 'bounce music'",
    choices:["zebra katz", "katey red","big freedia", "SZA"],
    answer: 2 //"big freedia", 
  },
  {
    question: "Felicia  wanted to borrow Craig's.....",
    choices:["money", "jacket","pen", "car"],
    answer: 3 // "car",
  },
  {
    question: "Superhero and socialist organization",
    choices:["black panther", "spiderman","wolverine", "daredevil"],
    answer: 0 //"black panther",
  },
  {
    question: "2017 Make-up line that is always sold out of darker foundation shades ",
     choices:["NYX", "fenty beauty","jackie aina", "M.A.C."],
    answer:  1 //"fenty beauty",
  },
  {
    question: "Started as a rapper, and now an actor",
     choices:["common", "terry crews","ice cube", "tupac"],
    answer: 3 //"ice cube",
  },
  {
    question: "Artist turned chef",
    choices:["patti labelle", "kelis","jazmine sullivan", "kerry washington"],
    answer:  2 , //"kelis"
  }
]


// function to set off time count
function start() {
  console.log(gameQuestions[0].question);

  intervalId = setInterval(count, 45000);
$('#questionOne').append(gameQuestions[0].question);
$('#questionTwo').append(gameQuestions[1].question);
$('#questionThree').append(gameQuestions[2].question);
$('#questionFour').append(gameQuestions[3].question);
//for loop for choices to display?
//console.log(gameQuestions[0]);
var choices = gameQuestions[0].choices;
for (var i = 0; i <choices.length; i ++) {
   intervalId= setInterval(count, 45000);
   console.log(gameQuestions[0].choices)
  $('#button').append("<button>" + gameQuestions[0].choices[i] + "</button>");
  //$('#button').append("<button>" + gameQuestions[1].choices[i] + "</button>");
 //$('#button').append("<button>" + gameQuestions[2].choices[i] + "</button>");
 //$('#button').append("<button>" + gameQuestions[3].choices[i] + "</button>");
}

 }


//function to show choices
//$('#choices').on("click", function () {
   //intervalId= setInterval(count, 45000);
  //$('#choices').append(gameQuestions[0].choices);
//});
                





// function that will keep track of time by increasing by variable by 1
function count() {
  counter = counter - 1;
  // console.log(counter);
  $("#timer").html(counter);
  checkForZero();
}

function checkForZero() {
  if (counter === 0) {
    clearInterval(intervalId);
  }
}

//function to end game 
function gameEnd () {
  alert("time is up!");
  //check if user is winning or losing
  //increase or decrease 
}




//var currentQuestion = 0 ;
//var wins=0;
//var losses=0;

//var quizSetup = document.getElemenyById('quiz');
//var question ; //question in gameQuestions array
//var choices; //multiple choice options in question array
//var index = 0; //index is 0 since will be indexing into choices array

//function askQuestion () {  //function for questions in the game 
//choices = gameQuestions[currentQuestion].choices;
//question= gameQuestions[currentQuestion].question;

//if (currentQuestion === gameQuestions.length - 1) {
//start.value = "Next"; //changing start button to next so user can go to next page with questions
//}
//} -->
