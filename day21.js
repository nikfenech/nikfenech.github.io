var upvote = function(){
	var upAnim =  document.getElementById("upv");
	var reset =  document.getElementById("dwnv");
	var results = parseInt(document.getElementById("voteNo").innerHTML, 10);
	TweenLite.to(upAnim, 1, {ease: Elastic.easeOut, y: -10, color:"#64DD17"});
	TweenLite.to(reset, 1, {ease: Elastic.easeOut, y: 0, color:"#FFFFFF"});
	var voted = results + 1;
	$('#voteNo').text(voted);
}

var downvote = function(){
	var anim =  document.getElementById("dwnv");
	var reset =  document.getElementById("upv");	
	TweenLite.to(anim, 1, {ease: Bounce.easeOut, y: 10, color:"#FF6D00"});
	TweenLite.to(reset, 1, {ease: Elastic.easeOut, y: 0, color:"#FFFFFF"});
	var results = parseInt(document.getElementById("voteNo").innerHTML, 10);	
	var voted = results - 1;
	$('#voteNo').text(voted);
}
