/*===========================================
  					PSEUDOCODE

We are creating a game that randomly generates numbers.
First we need a random number generated for the computer
	-Will need to store this number and display this number on the screen

Will need four crystals and they will also have random generated numbers.
	-Will need to store each value and when we click a crystal it will display the total
Need to have the total score compare to the computer's guess and evaluate when the game is won or lost.
After each win/loss need a counter
=============================================*/
//Declared variables for storing the wins, losses
var wins = 0; 
var losses = 0;
//the total score of the clicked crystals
var score = 0;

//Stores the computer number in compStore
var compStore = Math.floor(Math.random() * 102) + 19; //
//Displays the random number




var ruby = Math.floor(Math.random() * 5) + 3;
var diamond = Math.floor(Math.random() * 4) + 3;
var sapphire = Math.floor(Math.random() * 6) + 3;
var emerald = Math.floor(Math.random() * 7) + 3;

var gameSetUP = function(){
	$(".win").empty();
	$(".win").append(wins);
	$(".loss").empty();
	$(".loss").append(losses);
	$("#value").empty();
	$("#value").append(score);
	
}

var reset = function(){
	score = 0;
    compStore = Math.floor((Math.random()* 100) + 19);

	$("#com-number").empty();
	$("#com-number").append(compStore);

	ruby = Math.floor(Math.random() * 5) + 3;
	diamond = Math.floor(Math.random() * 4) + 3;
	sapphire = Math.floor(Math.random() * 6) + 3;
	emerald = Math.floor(Math.random() * 7) + 3;
    gameSetUP();
}


console.log(diamond, ruby, emerald, sapphire);//testing purposes
var game = function (){
	//evualting if the score is equal to the displayed number
	if (score === compStore) {
		wins = wins + 1;
		reset();
	}
	else if(score > compStore){
		losses = losses + 1;
		reset();
	}
	else{
		gameSetUP();
	}
}
$(document).ready(function(){

	$("#com-number").append(compStore);


	$(".diamond").click(function(){
		score = score + diamond;
		game();
	});
	$(".ruby").click(function(){
		score  = score + ruby;
		game();
	});
	$(".sapphire").click(function(){
		score  = score + sapphire;
		game();
	});
	$(".emerald").click(function(){
		score  = score + emerald;
		game();
	});

});