var bingo = function(){
	var jelly = document.getElementById("Card"); //or use jQuery's $("#photo")
	jelly.style.backgroundColor = '#FF6F00';
	
	TweenLite.from(jelly, 4.5, { ease: Back.easeOut.config(1.7), backgroundColor: '#FFD54F'});
}
