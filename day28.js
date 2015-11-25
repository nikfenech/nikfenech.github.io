var eye=["http://imgur.com/lT0YmUf","http://imgur.com/kRguMFQ","http://imgur.com/tLhPnvd","http://imgur.com/XAakAYy","http://imgur.com/Sjr9pCD"];
var nose=["http://i.imgur.com/pMiFXmT.png","http://i.imgur.com/DDXRQhR.png","http://i.imgur.com/5qw7JJH.png","http://i.imgur.com/PUvV9EB.png","http://i.imgur.com/SKX8DiK.png"];
var mouth=["http://i.imgur.com/iO6sc30.png","http://i.imgur.com/9Qwo6fA.png","http://i.imgur.com/Oq5fJDJ.png","http://i.imgur.com/7L1x2it.png"];

var thEye=0;
var thNose=0;
var thMouth=0;


function nextEye() {
    if (thEye < eye.length) {
        document.getElementById("eyeSlot").src= eye[thEye];
        thEye = thEye + 1;
    } else if (thEye == eye.length){
		thEye = 0;
	}
}

function nextNose() {
    if (thNose < nose.length) {
        document.getElementById("noseSlot").src= nose[thNose];
        thNose = thNose + 1;
    } else if (thNose == nose.length){
		thNose = 0;
	}
}

function nextMouth() {
    if (thMouth < mouth.length) {
        document.getElementById("mouthSlot").src= mouth[thMouth];
        thMouth = thMouth + 1;
    } else if (thMouth == mouth.length){
		thMouth = 0;
	}
}
