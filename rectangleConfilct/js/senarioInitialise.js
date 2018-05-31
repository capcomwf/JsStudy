
var c = document.getElementById("playzone");
var ctx = c.getContext("2d");
ctx.fillStyle = "#00FF00";
ctx.fillRect(0, 0, 100, 100);

var beauty = document.getElementById("beauty");

beauty.style.left = 0;
beauty.style.top = Math.random(document.getElementById("playzone").style.height);
var BEAUTYSPEED = 10;