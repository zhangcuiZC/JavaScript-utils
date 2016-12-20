function createCORSRequest(method,url){
	var xhr=new XMLHttpRequest();
	if ("withCredentials" in xhr) {
		xhr.open(method,url,true);
	}else if (typeof XDomainRequest!="undefined") {
		xhr=new XDomainRequest();
		xhr.open(method,url);
	}
}
/*example

var request=createCORSRequest("get","http://...");
if (request) {
	request.onload=function(){
		//对request.responseText进行处理
	};
	request.send();
}

*/