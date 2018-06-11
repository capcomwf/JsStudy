function initialise () {
	var beauty = document.getElementById("beauty");
    beauty.style.left = "232px";
    //beauty.style.top = Math.random(document.getElementById("playzone").style.height);
	beauty.style.top = "100px";
    var c = document.getElementById("playzone");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#00FF00";
    ctx.fillRect(0, 0, 100, 100);
}







