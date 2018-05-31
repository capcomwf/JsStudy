var beauty = document.getElementById("beauty");
beauty.style.left = 0;
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

function location (x,y) {
	this.x = x;
	this.y = y;
}

var destination = new location(200,300);

/*
function retangle (location) {
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
	if( (this.x!= destination.x) && (this.y! = destination.y)) {
	   	direction = (Math.random(1) < 0.5);
		if (!direction) {
			this.x += isPositive(destination.x - this.x) * BEAUTYSPEED;
		}
		else
			this.y += isPositive(destination.y - this.y) * BEAUTYSPEED;
	}
	else if(this.x!= destination.x) {
		this.x += isPositive(destination.x - this.x) * BEAUTYSPEED;
	}
	else if(this.y!= destination.y) {
		this.y += isPositive(destination.y - this.y) * BEAUTYSPEED;
	}
	else
		window.alert("Beauty has escaped to");
	
	this.style.left = this.x;
	this.style.top = this.y;
} 


//var beast() = new retangle ();




