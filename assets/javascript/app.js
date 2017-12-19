//where to begin...
//2 conditionals and/or functions 
//1 conditional for when user enters true or false
//2 conditional for simple user input to all lowercase


//Questions about assignment:
//can set timers for pictures to appear? yes!
//can set seperate timers for pictures? yes!
//HW is a mixture of JS and JQuery? YES!
//will not be doing assignment correctly if only use JS and/or jQuery? Nope!
//in code, which do you add first: JS or jQuery? depends on what you are doing..



//setting timer that repeats
//below function is just an example, not code for HW
// $(gameSectionContent). timer ( {
// 	duration:1m 45s;
// 	callback: function () {
// 		$(gamesection).timer(reset);
// 	}
// 	repeat:true;
// })

//function for timer
function setTimer (duration,display) {
	var timer = duration, seconds;
	setInterval(function () {
	seconds=parseInt(timer % 60, 10);
	seconds=seconds<10 ? "0" + seconds:seconds);

	display.textContent = " " + seconds;
	if (--timer<0) {
		timer=duration;
	}

   }, 1000 );
}

window.onload = function () {
	
}


//game questions to display
var actualQuestions = {
	questionOne = {
		firstround:'Biggie Smalls is from.....',
		secondround:'First African American principal dancer for American Ballet Theatre',
		thirdround: 'Breakdancing is a type of dance that includes.....'
	}, 
	questionTwo = {
		firstround:'This government official went viral for saying the phrase, "reclaiming my time."',
		secondround:'This actor always has a job',
		thirdround:'Which store always has one line open?'
	}, 
	questionThree = {
		firstround:'New Orleans star famous for creating "bounce music"',
		secondround:'Started as a rapper, and now an actor',
		thirdround:'Felicia from Friday wanted to borrow Craigs...'
	}, 
	questionFour  = {
		firstround:'Superhero and socialist organization',
		secondround:'Make-up that is always sold out of darker shades foundation',
		thirdround:'Artist turned chef'
	}
};


//object with question answers. 
var cheatsheet = {
	questionOneAnswer = {
		firstround:'Boston','California','Florida', 'New York',
		secondround:'dorothy dandridge','halle berry', 'misty copeland','debbie allen',
		thirdround: 'pop and locking', 'jerking', 'soul trains', 'power moves'
	}, 
	//correct answers
	//firstround:New York
	//secondround:misty copeland
	//thirdround:power moves

	questionTwoAnswer = {
		firstround:'diana ross','maxine waters', 'omarosa manigault' , 'amanda seales',
		secondround:'luther vandross','samuel l jackson','tevin campbell','charles barkley',
		thirdround: 'Target', 'Dollar Tree', 'Family Dollar','Walmart',
	}, 

	//correct answers
	//firstround:maxine waters
	//secondround:samuel l jackson
	//third round: wal mart

	questionThreeAnswer = {
		firstround:'katey red','big freedia', 'zebra katz', 'todrick hall',
		secondround:'terry crews','ice cube','deon cole','eddie murphy',
		thirdround:'money','keys','gum','car'
	}, 

	//correct answers
	//firstround:big freedia
	//secondround:ice cube
	//thirdround:car 
	questionFourAnswer = {
		firstround:'black panther','wolverine','spiderman','batman',
		secondround:'covergirl','fenty beauty','jackie aina','NYX',
		thirdround:'kelis', 'pattie labelle', 'kelly rowland', 'tracee ellis ross'
	}

//correct answers
//firstround:black panther
//secondround:fenty beauty
//thirdround:kelis
}




//timer to refresh questions for each round
$(gamequestions).timer ( {
	duration:1m 45s;
	callback: function () {
		$(questionOne).timer(reset);
		$(questionTwo).timer(reset);
		$(questionThree).timer(reset);
		$(questionFour).timer(reset);

	}
	repeat:true;
})

//timer to refresh answers for each round
$(gamequestions).timer ( {
	duration:1m 45s;
	callback: function () {
		$(cheatsheet.questionOneAnswer.firstround).timer(reset);
		$(cheatsheet.questionTwoAnswer.secondround).timer(reset);
		$(cheatsheet.questionThreeAnswer.thirdround).timer(reset);
		$(cheatsheet.questionFour).timer(reset);

	}
	repeat:true;
})

console.log(gamequestions.firstround);

//create an array of images so images can loop through 
//depending upon what question the user is on?

//test code to see if images show on html page 
var images = ['felicia.jpg','fist.jpg', 'rihannas.jpg'],
    index = 0, // starting index
    maxImages = images.length - 1;
var timer = setInterval(function() {
    var currentImage = images[index];
    index = (index == maxImages) ? 0 : ++index;
    $('.nile-slider img').fadeOut(200, function() {
        $('.nile-slider img').attr("src", 'assets/Startseite/Slider/'+currentImage);
        $('.nile-slider img').fadeIn(200);
    });
 }, 2000);



//CODE NOT USING:
//which function on lines 33-51 is the  best way to have the information
//displayed correctly on webpage? 

//since doing multiple choice option, no longer need this code yet
//function for true/false questions
// function truefalseQuestions () {
// 	if (userInput===true) {
// 		alert("correct!");
// 		$(id).innerHTML("correct answer is:" + "" + )
// 		//insert image to html page here

// 	} else {
// 		alert("wrong");
// 		$(id).innerHTML("the correct answer was" + "" + )
// 		//insert image to hmtml page here
// 	}
// }

//this code is only for exact user input; code no longer applies
//function for simple user input 
// var userAnswer = "";
// function simpleUserInput () {
// 	if(userInput===userAnswer){
// 		alert("correct");
// 		$(id).innerHTML("the correct answer was" + "" +);
// 		$(id).innerHTML(//image of correct answer);
// 	} else {
// 		alert("wrong");
// 		$(id).innerHTML("the correct answer was" + "" +);
// 		$(id).innerHTML(//image of correct answer);
// 	}
// }

