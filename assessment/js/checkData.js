function checkData() {
	var inputItems = document.getElementsByTagName("input");
    var itemAllOK = 1;
	var txt = "";
	
	var inputEmailAddress = document.getElementsByName("Email")[0].value;
	var emailPatt = /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+$/gi;  //^(\w+\.)*\w+@(\w+\.)+\w+$/; 
	var emailFound = emailPatt.test(inputEmailAddress);
	
	var postCode4Num = /\d{4}/gi;
	var postCodeOK = postCode4Num.test(document.getElementsByName("postcode")[0].value);
	
	var creditCard16Num = /\d{16}/gi;
	var creditCardOK = creditCard16Num.test(document.getElementsByName("cardnumber")[0].value);
	
	var CCV3Num = /\d{3}/gi;
	var CCVOK = CCV3Num.test(document.getElementsByName("CCV")[0].value);	
	
	var currentDate = new Date();
	
	for(var i = 0; i < inputItems.length; i ++) {
        if(!inputItems[i].value) {
	       
	       
		   //inputItems[i].value = "#FF0000";
           itemAllOK = 0;
		   alert(inputItems[i].name + " can't be empty, please input! ");
		   inputItems[i].focus();
		   //for(var x in inputItems[i]) txt += inputItems[i][x] + "";
		   return false;
		   
		   //break;
		   //var empty = i;
		}
		
	}
	
	//check email address have at least 8 characters and contains an "@" and "."
	
	if(inputEmailAddress.length < 8) {
		alert("email address length must be more than 8, please re-input");
		return false;
	}
	
	else if(!emailFound) {
		alert("invalid Email address, it must follow the pattern:someone@domain.xxx");
		return false;
	}
		
	//Check the postcode contains 4 numbers (not characters)
	
	else if(!postCodeOK) {
		alert("post code must be 4 digits");
		return false;
	}
	
	
	else if(!creditCardOK) {
		alert("credit card number must be 16 digits");
		return false;
	}
	
	
	else if(!CCVOK) {
		alert("CCV must be 3 digits");
		return false;
	}
	
	
	else if(document.getElementsByName("expiryYear")[0].value < currentDate.getFullYear()) {
		alert("Your credit card has expired!");
		return false;
	}
	
	else if(document.getElementsByName("expiryYear")[0].value == currentDate.getFullYear()) {
	    if(document.getElementsByName("expiryMonth")[0].value < (currentDate.getMonth()+1)) {
		alert("Your credit card has expired!");
		return false;
	    }
	}
	
	else if(itemAllOK) {
	alert("Information submitted!");
	return true;
	}
    //console.log(txt);
    //else {
	//inputItems[empty].focus();
    //inputItems[empty].value = "#FF0000";
	//}
}