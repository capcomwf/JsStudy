var els = document.getElementsByTagName("input");

for (var i=0; i < els.length; i++) {
    els[i].setAttribute("onfocus","changeBgd(this)");
	els[i].setAttribute("onblur","resetBgd(this)");
}
/*
els.forEach(function(x) {x.setAttribute("onfocus","changeBgd(this)");
	x.setAttribute("onblur","resetBgd(this)");});*/