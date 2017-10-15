//lets display the current time

function displayTime() {
	var time = new Date(); //new data object
	var h = time.getHours();
	var m = time.getMinutes();
	var s = time.getSeconds();
	
	//add zero to the left of the numbers if they are single digits
	if(h < 10) h = '0'+h;
	if(m < 10) m = '0'+m;
	if(s < 10) s = '0'+s;
	
	var color = "#"+h+m+s;
	

	//set background color
	document.body.style.background = color;

	//set time
	var hours
	if (h>12) {
			hours = h-12;
		}else{
			hours = h;
		}
	document.getElementById("hex").innerHTML = `${hours}:${m}:${s}`;
	

	//re-trigger the function every second
	setTimeout(displayTime, 1000);
}

//call the function
displayTime();	