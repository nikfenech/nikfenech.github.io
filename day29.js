			
		   "use strict";
			function changeColor() {
			//rgb
			console.log('event fired');
			var colors = [0, 0, 0];
			var hour = new Date().getSeconds();
			console.log(hour);

			//Will get an valid rgb color
			var color = parseInt(510/60*hour);
			console.log(color);
			
			for(var i = 0; i < colors.length; i++) {
				colors[i] = color;
			}
			
			//add the color to the element you want:
			document.body.style.backgroundColor = "rgb(" + colors[0] + "," + colors[1] + "," + colors[2] + ")";
			console.log("event fired. color get:" + colors[0] + colors[1] + colors[2]);
		  }

		  
		  setInterval(changeColor,1);
		  setInterval(sunmoon,1);
		  
		  
