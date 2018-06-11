function Gamestart() {

var DIGITPatt = /^\d+/i;

var beauty = document.getElementById("beauty");
var BEAUTYSPEED = 10;
var beautyMove = setInterval(moveBeauty,1000)

var beast = document.getElementById("beast");


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

function isDestinationArrived() {
	if((Math.abs(destination.x - beauty.x) < beauty.style.width) && (Math.abs(destination.y - beauty.y) < beauty.style.height))
		return true;
	else
		return false;
}

/*
function retangle (location) {
	left = location.x - Math.ceil(this.style.width / 2);
	right = location.x + Math.ceil(this.style.width / 2);
	ceiling = location.y + Math.ceil(this.style.height /2);
	floor = location.y - Math.ceil(this.style.height /2);
}

function getLocationHorizontal(var operateObject) {
	return parseInt(DIGITPatt.exec(operateObject.style.left));
}

function getLocationVetical(var operateObject) {
	return parseInt(DIGITPatt.exec(operateObject.style.top));
}


getHorizontal = function() {
	return parseInt(DIGITPatt.exec(this.style.left));
	};
	
beauty.getVetical = function() {
	return parseInt(DIGITPatt.exec(this.style.top));
	};
*/
	
	
function moveBeauty() {
	var direction;    //set the direction of the movement, 0 for x, 1 for y

    var beautyx = parseInt(DIGITPatt.exec(beauty.style.left)[0]);
    var beautyy = parseInt(DIGITPatt.exec(beauty.style.top)[0]);

	
	if( (Math.abs(destination.x - beautyx) > BEAUTYSPEED ) && (Math.abs(destination.y - beautyy) > BEAUTYSPEED)) {
	   	direction = (Math.random(1) < 0.5);
		if (!direction) {
			beautyx += isPositive(destination.x - beautyx) * BEAUTYSPEED;
		}
		else
			beautyy += isPositive(destination.y - beautyy) * BEAUTYSPEED;
	}
	
	else if(Math.abs(destination.x - beautyx) > BEAUTYSPEED) {
		beautyx += isPositive(destination.x - beautyx) * BEAUTYSPEED;
	}
	
	else if(Math.abs(destination.y - beautyy) > BEAUTYSPEED) {
		beautyy += isPositive(destination.y - beautyy) * BEAUTYSPEED;
	}
	
	else {
		window.alert("Beauty has escaped to");
		clearInterval(beautyMove);
	}
	
	beauty.style.left = beauty.style.left.replace(DIGITPatt,beautyx);
	beauty.style.top = beauty.style.top.replace(DIGITPatt,beautyy);;
}; 




//var beast() = new retangle ();


}

