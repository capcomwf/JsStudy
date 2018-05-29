function redir() {
var choice = parseInt(prompt("please choose the website you want to go: \n 1.google \n 2.tafesa \n 3.learn","1" ));
while((choice < 1)||(choice > 3)) {
	choice = parseInt(prompt("invalid input, please re-enter the website you want to go: \n 1.google \n 2.tafesa \n 3.learn","1" ));
}

switch(choice) {
	case 1: 
	window.open( "http://www.google.com/", "Google", "status = 1, height = 800, width = 800, resizable = 0" );
    break;
	case 2: 
	window.open( "http://www.tafesa.edu.au", "TAFESA", "status = 1, height = 800, width = 800, resizable = 0" );
	break;
	case 3: 
	window.open( "http://learn.tafesa.edu.au", "LEARN", "status = 1, height = 800, width = 800, resizable = 0" );
	break;
	default:
	break;
	
}
}