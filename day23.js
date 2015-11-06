var bingo = function(){
	var getCart = parseInt(document.getElementById("count").innerHTML, 10);
	var inCart = getCart + 1;
		
	$('.button').text('Add Another to Cart');	
	$('#count').text(inCart + " in Cart");	
}
