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
var text_value = "";
// function intialize(comp){
// 	comp = Math.floor(Math.random() * 102) + 19;
// 	console.log(comp);
// }

// intialize(compStore);

// function crystal(){
// 	diamond = Math.floor(Math.random() * 6) + 3;
// 	console.log(diamond);
// }

//Stores the computer number in compStore
var compStore = Math.floor(Math.random() * 102) + 19;
//Displays the random number

$("#com-number").html(compStore);


var ruby = Math.floor(Math.random() * 5) + 3;
var diamond = Math.floor(Math.random() * 4) + 3;
var sapphire = Math.floor(Math.random() * 6) + 3;
var emerald = Math.floor(Math.random() * 7) + 3;

console.log(diamond, ruby, emerald, sapphire);//testing purposes


$(".diamond").on("click", function(crystal){
	$(".your-total").html(diamond);
	var text_value = $("#value").text();
	console.log(this.text_value);
});

$(".ruby").on("click", function(){
	$(".your-total").html(ruby);

});

$(".emerald").on("click", function(){
	$(".your-total").html(emerald);

});

$(".sapphire").on("click", function(){
	$(".your-total").html(sapphire);

});



});
