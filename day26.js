function secondHand() {
			console.log('event fired');
			var rotate = [];
			var second = new Date().getSeconds();
			
			for (var i = 0; i <= 360; i++) {
				rotate.push(i);
			}

			//Will get an valid rgb color
			var rotate = parseInt(360/60*second);
			console.log(rotate);
			
			for(var i = 0; i < rotate.length; i++) {
			   rotate[i]
			}
			
			document.getElementById("secondhand").style.transform = "rotate("+rotate+"deg)";
			console.log(rotate);
		    }

function minuteHand() {
			console.log('event fired');
			var rotate = [];
			var second = new Date().getMinutes();
			
			for (var i = 0; i <= 360; i++) {
				rotate.push(i);
			}

			//Will get an valid rgb color
			var rotate = parseInt(360/60*second);
			console.log(rotate);
			
			for(var i = 0; i < rotate.length; i++) {
			   rotate[i]
			}
			
			document.getElementById("minutehand").style.transform = "rotate("+rotate+"deg)";
			console.log(rotate);
		    }

function hourHand() {
			console.log('event fired');
			var rotate = [];
			var second = new Date().getHours();
			
			for (var i = 0; i <= 360; i++) {
				rotate.push(i);
			}

			//Will get an valid rgb color
			var rotate = parseInt(360/12*second);
			console.log(rotate);
			
			for(var i = 0; i < rotate.length; i++) {
			   rotate[i]
			}
			
			document.getElementById("hourhand").style.transform = 	"rotate("+rotate+"deg)";
			console.log(rotate);
		    }
		  
setInterval(secondHand,1);
setInterval(minuteHand,1);
setInterval(hourHand,1);
		  
