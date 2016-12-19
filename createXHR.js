function createXHR(){
	if (window.XMLHttpRequest)
  	{// code for IE7+, Firefox, Chrome, Opera, Safari
  		return new XMLHttpRequest();
 	}
	else
  	{// code for IE6, IE5
  		return new ActiveXObject("Microsoft.XMLHTTP");
  	}
  	else
  	{
  		throw new Error("No XHR object available.");
  	}
}