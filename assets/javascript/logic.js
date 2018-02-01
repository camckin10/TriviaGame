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

//function to start game over
 function startOver() {
    location.reload(true);
  }


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
    answer: "New York" 
  },
  {
    question: "First African American principal dancer for American Ballet Theatre",
    choices:["debbie allen", "phyllica rashad","misty copeland", "halle berry"],
    answer: "misty copeland",
  },
  {
    question: "Breakdancing is a type of dance that includes...",
    choices:["soul trains", "salsa","jerking", "power moves"],
 answer: "power moves",
  },
  {
    question: "This government official became viral for saying the phrase,'reclaiming my time'.",
       choices:["maxine waters", "gabrielle union","omarosa manigault", "michelle obama"],
   answer: "maxine waters",
  },
  {
    question: "This actor always has a job",
    choices:["james earl jones", "samuel l jackson","terrence howard", "luther vandross"],
    answer:"samuel l jackson",
  },
  {
    question: "Which store always has one line open?",
    choices:["Dollar Tree", "Family Dollar","Walmart", "Target"],
    answer: "Walmart",
  },
  {
    question: "New Orleans star famous for founding 'bounce music'",
    choices:["zebra katz", "katey red","big freedia", "SZA"],
    answer: "big freedia", 
  },
  {
    question: "Felicia  wanted to borrow Craig's.....",
    choices:["money", "jacket","pen", "car"],
    answer:  "car",
  },
  {
    question: "Superhero and socialist organization",
    choices:["black panther", "spiderman","wolverine", "daredevil"],
    answer: "black panther",
  },
  {
    question: "2017 Make-up line that is always sold out of darker foundation shades ",
     choices:["NYX", "fenty beauty","jackie aina", "M.A.C."],
    answer:  "fenty beauty",
  },
  {
    question: "Started as a rapper, and now an actor",
     choices:["common", "terry crews","ice cube", "tupac"],
    answer: "ice cube",
  },
  {
    question: "Artist turned chef",
    choices:["patti labelle", "kelis","jazmine sullivan", "kerry washington"],
    answer:  "kelis"
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
    //quiz.append("<button id=done>Done</button>");
}

//example code that will check correct/incorrect/unanswered questions
//js fiddle link: https://jsfiddle.net/ppfpqvo3/
//https://forum.jquery.com/topic/answer-validation-and-no-skipping-questions-for-quiz
//     function checkAnswer(answer, qNum, questions) {
//       if (answer == questions[qNum].a) {
//         questions[qNum].correct = 1;
//         score.push(questions[qNum].correct);

//       } else {
//         score.push(questions[qNum].correct);
//       }
//     }


//     renderQuestion(questions);
//     $("#modal").click(function() {
//       $(this).fadeOut("fast")
//     })
//     $(".next").click(function(event) {
//       event.preventDefault();
//       var answer = $(this).closest("form").find(":radio:checked").val(),
//         questionNumber = this.form.id;
//       console.warn(questionNumber, answer)
//       if (!answer) { // User did not answer question.
//         return; // Make user answer again.
//       }
//       if (answer !== questions[questionNumber].a) { // wrong answer!

//         $("#message").text(questions[questionNumber].w)
//         $("#modal").fadeIn("fast")

//       }
//       var qNum = $(this).closest("form").attr("id");

//       var userInput = $('input[name=' + qNum + ']:radio:checked').val();
//       if (counter > 1) {
//         checkAnswer(userInput, qNum, questions);
//         $("#" + qNum).hide();
//         $("#" + qNum).next().show();
//         counter--;
//       } else if (counter == 1) {
//         checkAnswer(userInput, qNum, questions);
//         $("#questions").find("form").remove();
//         $("#questions").append(
//           '<p class="page result"></p>' +
//           '<hr class="row">' +
//           '<div class="nav nextLast">' +
//           '<button type="button" class="reset" value="reset">start over</button>' +
//           '</div>');
//         $(".result").text('You answered ' + sumCorrect(questions) + ' questions correctly out of 3.');
//         for (j = 0; j < score.length; j++) {
//           if (score[j] === 0) {
//             console.log(questions[j].q, questions[j].a);
//             $("#questions").append('<div>' +
//               '<h3 class="question">' + questions[j].q + '</h3>' +
//               '<p>' + questions[j].a + '</p>' +
//               '</div>');
//           }
//           $('.reset').click(startOver);
//         }
//       } else {
//         return false;
//       }
//     });
//   }
// });


//function and/or object for counting correct/incorrect answers
//clicker counting correct/incorrect answers adds up regardless 1/28/18
//var totalScore = 0 ;
var correct = 0;
var incorrect = 0;

function checkedQuestions() {
  // if (totalScore > losses) {
  //   console.log("you lose!");
  //   //alert("incorrect");
  //   losses++;
  //   $("#incorrect").html("Incorrect:" + losses);
  //   console.log(losses);
  // } else if (totalScore === wins ) {
  //   console.log("you win");
  //   //alert("correct");
  //   wins++;
  //   $("#correct").html("Correct:" + wins);
  //   console.log(wins);

  // } 
  $("#correct").html("Correct:" + correct);
  $("#incorrect").html("Incorrect:" + incorrect);


  
}



function done () {

  //function that are checking answers of user input
  //question 0 of trivia
$.each($("input[name='question-0']:checked"), function (){
      if ($(this).val() === gameQuestions[0].answer) {
        correct++;
        console.log("you're right!");
      }
      else {
        incorrect++;
        console.log("wrong!");
      }
    })


//question 1 of trivia
$.each($("input[name='question-1']:checked"), function (){
      if ($(this).val() === gameQuestions[1].answer) {
        correct++;
        console.log("you're right!");
      }
      else {
        incorrect++;
        console.log("wrong!");
      }
    })



//question 2 of trivia
$.each($("input[name='question-2']:checked"), function (){
      if ($(this).val() === gameQuestions[2].answer) {
        correct++;
        console.log("you're right!");
      }
      else {
        incorrect++;
        console.log("wrong!");
      }
    })



//question 3 of trivia
$.each($("input[name='question-3']:checked"), function (){
      if ($(this).val() === gameQuestions[3].answer) {
        correct++;
        console.log("you're right!");
      }
      else {
        incorrect++;
        console.log("wrong!");
      }
    })



//question 4 of trivia
$.each($("input[name='question-4']:checked"), function (){
      if ($(this).val() === gameQuestions[4].answer) {
        correct++;
        console.log("you're right!");
      }
      else {
        incorrect++;
        console.log("wrong!");
      }
    })



//question 5 of trivia
$.each($("input[name='question-5']:checked"), function (){
      if ($(this).val() === gameQuestions[5].answer) {
        correct++;
        console.log("you're right!");
      }
      else {
        incorrect++;
        console.log("wrong!");
      }
    })



//question 6 of trivia
$.each($("input[name='question-6']:checked"), function (){
      if ($(this).val() === gameQuestions[6].answer) {
        correct++;
        console.log("you're right!");
      }
      else {
        incorrect++;
        console.log("wrong!");
      }
    })



//question 7 of trivia
$.each($("input[name='question-7']:checked"), function (){
      if ($(this).val() === gameQuestions[7].answer) {
        correct++;
        console.log("you're right!");
      }
      else {
        incorrect++;
        console.log("wrong!");
      }
    })



//question 8 of trivia
$.each($("input[name='question-8']:checked"), function (){
      if ($(this).val() === gameQuestions[8].answer) {
        correct++;
        console.log("you're right!");
      }
      else {
        incorrect++;
        console.log("wrong!");
      }
    })



//question 9 of trivia
$.each($("input[name='question-9']:checked"), function (){
      if ($(this).val() === gameQuestions[9].answer) {
        correct++;
        console.log("you're right!");
      }
      else {
        incorrect++;
        console.log("wrong!");
      }
    })



//question 10 of trivia
$.each($("input[name='question-10']:checked"), function (){
      if ($(this).val() === gameQuestions[10].answer) {
        correct++;
        console.log("you're right!");
      }
      else {
        incorrect++;
        console.log("wrong!");
      }
    })




//question 11 of trivia
$.each($("input[name='question-11']:checked"), function (){
      if ($(this).val() === gameQuestions[11].answer) {
        correct++;
        console.log("you're right!");
      }
      else {
        incorrect++;
        console.log("wrong!");
      }
    })



//question 12 of trivia
$.each($("input[name='question-12']:checked"), function (){
      if ($(this).val() === gameQuestions[12].answer) {
        correct++;
        console.log("you're right!");
      }
      else {
        incorrect++;
        console.log("wrong!");
      }
    })
  checkedQuestions();
}

// function to set off time count
function start() {
  //console.log(gameQuestions[0].question);
  intervalId = setInterval(count, 45000);
  $("#quiz").empty();
  displayQuestions(0,4);
  // checkedQuestions();
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

//done function for game
$(document).on("click", "#done", function (){
  done();

});

//function to end game 
function gameEnd () {
  console.log("time is up!");
  done();
  //check if user is winning or losing
  //increase or decrease 
  }




//function to display correct/incorrect/unanswered questions





//TO DO NEXT 1/29/18 
// X = completed
//repeating checked answer code X 
//something @ end of done function, BUT still inside done function
//that will display, correct/ incorrect/ unanswered answers
//tie done function, or trigger done function inside gameEnd function X 
//so two ways--1) when timer is up 2) when the user hits done

