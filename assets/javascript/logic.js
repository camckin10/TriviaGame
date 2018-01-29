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

//function for displaying questions
function displayQuestions (startNum, endNum) {
  var quiz = $("#quiz");
  for (var i = 0; i < gameQuestions.length; i++) {
          if(i <= endNum && i > startNum){
            for (var i = 0; i < gameQuestions.length; i++) {
          quiz.append("<h2>" + gameQuestions[i].question + "</h2>");
          for (var j = 0; j < gameQuestions[i].choices.length; j++) {
            quiz.append("<input type='radio' name='question-" + i +
            "' value='" + gameQuestions[i].choices[j] + "''>" + gameQuestions[i].choices[j]);
          }
        }
      }
    }
    quiz.append("<button id=Next>Next</button>");
}

//on click function for input buttons


//function and/or object for counting correct/incorrect answers
//clicker counting correct/incorrect answers adds up regardless 1/28/18
var correct=0;
var incorrect=0;

function checkedQuestions() {
  if (incorrect > correct) {
    console.log("incorrect!");
    //alert("incorrect");
    incorrect++;
    $("#incorrect").html("Incorrect:" + incorrect);
  } else {
    console.log("correct");
    //alert("correct");
    correct++;
    $("#correct").html("Correct:" + correct);

  } 
  
}

//function for registering input/answers to be clicked
//MUST change the id...id in current parenthesis is temp placement
$("input-question-0").on("click", function (){
      if ($(this).val() === gameQuestions[0].answer) {
        correct++;
      }
      else {
        incorrect++;
      }
    })


//.each method example used for reference 
// $.each($("input[name='question-0']:checked"), function() {
//       if ($(this).val() === gameQuestions[0].answer) {
//         correct++;
//       }
//       else {
//         incorrect++;
//       }
//     });

// function to set off time count
function start() {
  console.log(gameQuestions[0].question);
  intervalId = setInterval(count, 45000);
  $("#quiz").empty();
  displayQuestions(0,4);
  checkedQuestions();

 }
                


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


