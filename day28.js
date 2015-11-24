var eye=["1.png","2.gif","3.png","4.png","5.png"];
var nose=["1.png","2.png","3.png","4.png","5.png"];
var mouth=["1.png","2.png","3.png","4.png"];

var thEye=0;
var thNose=0;
var thMouth=0;


function nextEye() {
    if (thEye < eye.length) {
        document.getElementById("eyeSlot").src= "img/eye/" + eye[thEye];
        thEye = thEye + 1;
    } else if (thEye == eye.length){
		thEye = 0;
	}
}

function nextNose() {
    if (thNose < nose.length) {
        document.getElementById("noseSlot").src= "img/nose/" + nose[thNose];
        thNose = thNose + 1;
    } else if (thNose == nose.length){
		thNose = 0;
	}
}

function nextMouth() {
    if (thMouth < mouth.length) {
        document.getElementById("mouthSlot").src= "img/mouth/" + mouth[thMouth];
        thMouth = thMouth + 1;
    } else if (thMouth == mouth.length){
		thMouth = 0;
	}
}
