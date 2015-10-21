$(document).ready(function () {
		$("#throw").click(function(){
	var userChoice = document.getElementsByName("firstname")[0].value;
//404?
		var computerChoice = Math.random();
		if (computerChoice < 0.34) {
			computerChoice = "rock";
		} else if(computerChoice <= 0.67) {
			computerChoice = "paper";
		} else {
			computerChoice = "scissors";
		} console.log("Computer: " + computerChoice);

	var compare = function(choice1, choice2){
		if(choice1 === choice2){
			return "it's a tie"   
		} 
		
		else if(choice1 === "rock"){
			
			if(choice2 === "scissors"){
				return "You win!"
			} else {
				return "You lose."
			}
		}    
		else if(choice1 === "paper"){
			
			if(choice2 === "rock"){
				return "You win!"
			} else {
				return "You lose."
			}        
		}
		
		else if(choice1 === "scissors"){
			
			if(choice2 === "paper"){
				return "You win!"
			} else {
				return "You lose."
			}     
		}
	}
	$('#check').text("Your opponent chose " + computerChoice + ".");
	$('#nom').text(compare(userChoice, computerChoice));
	})
});
