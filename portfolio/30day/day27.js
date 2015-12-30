function makeThing(){
	var back = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
	var hex = back[Math.floor(Math.random() * back.length)];
	var hex1 = back[Math.floor(Math.random() * back.length)];
	var hex2 = back[Math.floor(Math.random() * back.length)];
	var hex3 = back[Math.floor(Math.random() * back.length)];
	var hex4 = back[Math.floor(Math.random() * back.length)];
	var hex5 = back[Math.floor(Math.random() * back.length)];
		
	var rand = "#" + hex + hex1 + hex2 + hex3 + hex4 + hex5;	
	
	$('body')
	.append("<div class='thing'></div>");
	
	$('.thing').last().css('background',rand);
}


setInterval(makeThing,.0001);
