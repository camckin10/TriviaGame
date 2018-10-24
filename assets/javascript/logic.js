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


// //begin 2nd round--trying new code

// //function to generate the quiz.
// //function will need questions,place to put quiz, results, submit button

// function createQuiz(questions, quizContainer, resultsContainer, submitButton){
//     function showQuestions(questions, quizContainer) {
//         //code will go here later
//     }

//     function showResults(questions, quizContainer,resultsContainer){
//         //code here later
//     }

//     //show the Questions
//     showQuestions(questions,quizContainer);

//     //user clicks submit, show results
//     submitButton.onclick = function() {
//         showResults(questions,quizContainer, resultsContainer);
//     }

// }

// var gameQuestions = [
//     {
//     question: "Which store always has one line open?",
//     answers: {
//         a: "Dollar Tree",
//         b: "Family Dollar",
//         c: "Walmart",
//         d: "Target"
//     }, 
//     correctAnswer: 'c' //walmart
// }, 
// {
//     question: "New Orleans start famous for founding 'bounce music'",
//     answers: {
//         a : "Zebra Katz",
//         b: "Katey Red",
//         c: "SZA",
//         d: "Big Freedia"
//     },
//     correctAnswer: 'd' //big freedia
// },
// {
//     question: "Felicia wanted to borrow Craig's..... ",
//     answer: {
//         a: "car",
//         b: "jacket",
//         c: "pen",
//         d: "money"
//     },
//     correctAnswer: 'a'  //car
// }, 
// {
//     question: "Superhero & Socialist Organization",
//     answer: {
//         a: "spiderman",
//         b: "black panther",
//         c: "wolverine",
//         d: "daredevil"
//     },
//     correctAnswer: 'b' //black panther
// },
// {
//     question: "2017 make-up line that is always sold out of darker foundation",
//     answer: {
//         a: "NYX",
//         b: "Fenty Beauty",
//         c: "Jackie Aina",
//         d: "M.A.C."
//     },
//     correctAnswer: 'b'  //fenty beauty
// },
// {
//     question: "Started as a rapper, and now an actor",
//     answer: {
//         a: "common",
//         b: "terry crews",
//         c: "ice cube",
//         d: "tupac"
//     },
//     correctAnswer: 'c' //ice cube
// },
// {
//     question: "Artist turned chef",
//     answer: {
//         a: "Ella Mai",
//         b: "Jazmine Sullivan",
//         c: "Kerry Washington",
//         d: "Kelis"
//     },
//     correctAnswer: 'd' //kelis
//  }
// ]
// function showQuestions(questions,quizContainer){
//     //place to store output and answers
//     var output = [];
//     var answers;

//     //loop through each question
//     for (var i = 0; i <questions.length; i++){
//         //reset list of answers
//         answers = [];

//         //for each available answer to this question...
//         for(letter in questions[i].answers){
//             //creating a radio button for answers
//             answers.push(
//                 '<label>'
// 					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
// 					+ letter + ': '
// 					+ questions[i].answers[letter]
// 				+ '</label>'
//             );
//         }
//         //add this question and its answers to the output
//         output.push(
//             '<div class="question">' + questions[i].question + '</div>'
// 			+ '<div class="answers">' + answers.join('') + '</div>'
//         );
//     }

//     //combine our output list into one string of html + put it on the page
//     quizContainer.innerHTML= output.join('');
// }

// showQuestions(questions, quizContainer);

// function showResults(questions,quizContainer,resultsContainer){
//     //gather all answers in container from our quiz
//     var answerContainers = quizContainer.querySelectorAll('answer');

//     //track user's answers
//     var userAnswer = '';
//     var numCorrect = 0; 

//     //for each question
//     for(var i = 0; i<questions.length; i ++) {

//         // find selected answer
// 		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
// 		// if answer is correct
// 		if(userAnswer===questions[i].correctAnswer){
// 			// add to the number of correct answers
// 			numCorrect++;
			
// 			// color the answers green
// 			answerContainers[i].style.color = 'lightgreen';
// 		}
// 		// if answer is wrong or blank
// 		else{
// 			// color the answers red
// 			answerContainers[i].style.color = 'red';
//     }
// }
//     //show number of correct answers out of total
//     resultsContainer.innerHTML = numCorrect + 'out of' + questions.length;
// }

// //once answers submitted, show results
// submitButton.onclick = function(){
//     showResults(questions, quizContainer, resultsContainer)
// }

// var quizContainer = document.getElementById('quiz');
// var resultsContainer = document.getElementById('results');
// var submitButton = document.getElementById('submit');

// generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);


//////////////////////////////////////////////////////////////////////
//original game code 
// start game function
$("#start").on("click", function() {
    setTimeout(gameEnd, 45000);
    start(); 
});

// //function to start game over
function startOver() {
    location.reload(true);
}


// Start timer
//  variable to hold interval
var intervalId;
var counter = 45;
console.log(counter);

//array that has questions, choices, and answers
var gameQuestions = [{
        question: "Biggie Smalls is from..",
        choices: ["New York", "Philadelphia", "Florida", "Boston"],
        answer: "New York"
    },
    {
        question: "First African American principal dancer for American Ballet Theatre",
        choices: ["debbie allen", "phyllica rashad", "misty copeland", "halle berry"],
        answer: "misty copeland",
    },
    {
        question: "Breakdancing is a type of dance that includes...",
        choices: ["soul trains", "salsa", "jerking", "power moves"],
        answer: "power moves",
    },
    {
        question: "This government official became viral for saying the phrase,'reclaiming my time'.",
        choices: ["maxine waters", "gabrielle union", "omarosa manigault", "michelle obama"],
        answer: "maxine waters",
    },
    {
        question: "This actor always has a job",
        choices: ["james earl jones", "samuel l jackson", "terrence howard", "luther vandross"],
        answer: "samuel l jackson",
    },
    {
        question: "Which store always has one line open?",
        choices: ["Dollar Tree", "Family Dollar", "Walmart", "Target"],
        answer: "Walmart",
    },
    {
        question: "New Orleans star famous for founding 'bounce music'",
        choices: ["zebra katz", "katey red", "big freedia", "SZA"],
        answer: "big freedia",
    },
    {
        question: "Felicia  wanted to borrow Craig's.....",
        choices: ["money", "jacket", "pen", "car"],
        answer: "car",
    },
    {
        question: "Superhero and socialist organization",
        choices: ["black panther", "spiderman", "wolverine", "daredevil"],
        answer: "black panther",
    },
    {
        question: "2017 Make-up line that is always sold out of darker foundation shades ",
        choices: ["NYX", "fenty beauty", "jackie aina", "M.A.C."],
        answer: "fenty beauty",
    },
    {
        question: "Started as a rapper, and now an actor",
        choices: ["common", "terry crews", "ice cube", "tupac"],
        answer: "ice cube",
    },
    {
        question: "Artist turned chef",
        choices: ["patti labelle", "kelis", "jazmine sullivan", "kerry washington"],
        answer: "kelis"
    }
]

// function for displaying questions
function displayQuestions(startNum, endNum) {
    var quiz = $("#quiz");
    for (var i = 0; i < gameQuestions.length; i++) {
        if (i <= endNum && i > startNum) {
            for (var i = 0; i < gameQuestions.length; i++) {
                quiz.append("<h2>" + gameQuestions[i].question + "</h2>");
                for (var j = 0; j < gameQuestions[i].choices.length; j++) {
                    quiz.append("<input type='radio' name='question-" + i +
                        "' value='" + gameQuestions[i].choices[j] + "''>" + gameQuestions[i].choices[j]);
                }
            }
        }
    }
}


//function and/or object for counting correct/incorrect answers
var totalScore = 0 ;
var correct = 0;
var incorrect = 0;

function checkedQuestions() {

    $("#correct").html("Correct:" + correct);
    $("#incorrect").html("Incorrect:" + incorrect);



}



function done() {

    //function that are checking answers of user input
    //question 0 of trivia
    $.each($("input[name='question-0']:checked"), function() {
        if ($(this).val() === gameQuestions[0].answer) {
            correct++;
            console.log("you're right!");
        } else {
            incorrect++;
            console.log("wrong!");
        }
    })


    //question 1 of trivia
    $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() === gameQuestions[1].answer) {
            correct++;
            console.log("you're right!");
        } else {
            incorrect++;
            console.log("wrong!");
        }
    })



    //question 2 of trivia
    $.each($("input[name='question-2']:checked"), function() {
        if ($(this).val() === gameQuestions[2].answer) {
            correct++;
            console.log("you're right!");
        } else {
            incorrect++;
            console.log("wrong!");
        }
    })



    //question 3 of trivia
    $.each($("input[name='question-3']:checked"), function() {
        if ($(this).val() === gameQuestions[3].answer) {
            correct++;
            console.log("you're right!");
        } else {
            incorrect++;
            console.log("wrong!");
        }
    })



    //question 4 of trivia
    $.each($("input[name='question-4']:checked"), function() {
        if ($(this).val() === gameQuestions[4].answer) {
            correct++;
            console.log("you're right!");
        } else {
            incorrect++;
            console.log("wrong!");
        }
    })



    //question 5 of trivia
    $.each($("input[name='question-5']:checked"), function() {
        if ($(this).val() === gameQuestions[5].answer) {
            correct++;
            console.log("you're right!");
        } else {
            incorrect++;
            console.log("wrong!");
        }
    })



    //question 6 of trivia
    $.each($("input[name='question-6']:checked"), function() {
        if ($(this).val() === gameQuestions[6].answer) {
            correct++;
            console.log("you're right!");
        } else {
            incorrect++;
            console.log("wrong!");
        }
    })



    //question 7 of trivia
    $.each($("input[name='question-7']:checked"), function() {
        if ($(this).val() === gameQuestions[7].answer) {
            correct++;
            console.log("you're right!");
        } else {
            incorrect++;
            console.log("wrong!");
        }
    })



    //question 8 of trivia
    $.each($("input[name='question-8']:checked"), function() {
        if ($(this).val() === gameQuestions[8].answer) {
            correct++;
            console.log("you're right!");
        } else {
            incorrect++;
            console.log("wrong!");
        }
    })



    //question 9 of trivia
    $.each($("input[name='question-9']:checked"), function() {
        if ($(this).val() === gameQuestions[9].answer) {
            correct++;
            console.log("you're right!");
        } else {
            incorrect++;
            console.log("wrong!");
        }
    })



    //question 10 of trivia
    $.each($("input[name='question-10']:checked"), function() {
        if ($(this).val() === gameQuestions[10].answer) {
            correct++;
            console.log("you're right!");
        } else {
            incorrect++;
            console.log("wrong!");
        }
    })




    //question 11 of trivia
    $.each($("input[name='question-11']:checked"), function() {
        if ($(this).val() === gameQuestions[11].answer) {
            correct++;
            console.log("you're right!");
        } else {
            incorrect++;
            console.log("wrong!");
        }
    })



    //question 12 of trivia
    $.each($("input[name='question-12']:checked"), function() {
        if ($(this).val() === gameQuestions[12].answer) {
            correct++;
            console.log("you're right!");
        } else {
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
    displayQuestions(0, 4);
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
$(document).on("click", "#done", function() {
    done();

});

//function to end game 
function gameEnd() {
    console.log("time is up!");
    done();
    //check if user is winning or losing
    //increase or decrease 
}