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
$(document).ready(function(){
var wins = 0;
var losses = 0;
var diamond = 0;
var ruby = 0;
var sapphire = 0;
var emerald = 0;
var compStore = 0;

function intialize(comp){
	comp = Math.floor(Math.random() * 102) + 19;
	console.log(comp);
}

intialize(compStore);

function crystal(user){
	user = Math.floor(Math.random() * 6) + 3;
	console.log(user);
}

crystal(ruby);



});
