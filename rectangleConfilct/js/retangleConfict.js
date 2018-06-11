var beauty = document.getElementById("beauty");
beauty.style.left = 0;
document.getElementById("demo").innerHTML = document.getElementById("playzone").style.left;
beauty.style.top = Math.random(document.getElementById("playzone").style.height);
var BEAUTYSPEED = 10;

function isPositive(x) {
	if(x>0)
		return 1;
	else if(x===0)
	    return 0;
	else 
		return -1;
}

function Location (x,y) {
	this.x = x;
	this.y = y;
}

var destination = new Location(200,300);

/*
function retangle (Location) {
	left = location.x - Math.ceil(this.style.width / 2);
	right = location.x + Math.ceil(this.style.width / 2);
	ceiling = location.y + Math.ceil(this.style.height /2);
	floor = location.y - Math.ceil(this.style.height /2);
}*/

function isDestinationArrived() {
	if((Math.abs(destination.x - beauty.x) < beauty.style.width)&& (Math.abs(destination.y - beauty.y) < beauty.style.height))
		return true;
	else
		return false;
}


beauty.move = function() {
	var direction;    //set the direction of the movement, 0 for x, 1 for y
	
	if( (this.style.left != destination.x) && (this.style.top != destination.y)) {
	   	direction = (Math.random(1) < 0.5);
		if (!direction) {
			this.style.left += isPositive(destination.x - this.style.left) * BEAUTYSPEED;
		}
		else
			this.style.top += isPositive(destination.y - this.style.top) * BEAUTYSPEED;
	}
	else if(this.x!= destination.x) {
		this.style.left += isPositive(destination.x - this.style.left) * BEAUTYSPEED;
	}
	else if(this.y!= destination.y) {
		this.style.top += isPositive(destination.y - this.style.top) * BEAUTYSPEED;
	}
	else
		window.alert("Beauty has escaped to" + destination.name);
	
	//this.style.left = "100px";
	//this.style.top = "1000px";
} 


//var beast() = new retangle ();




