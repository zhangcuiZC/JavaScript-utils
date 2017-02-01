// 发起HTTP GET响应以获取指定URL的内容
// 当响应到达时，把它以解析后的XML Document对象、解析后的JSON对象
// 或字符串形式传递给回调函数
function get(url,callback){
	var request=new XMLHttpRequest();
	request.open("GET",url);
	request.onreadystatechange=function(){
		if(request.readyState===4&&request.status===200){
			var type=request.getResponseHeader("Content-Type");
			if(type.indexOf("xml")!==-1&&request.responseXML){
				callback(request.responseXML);
			}else if(type==="application/json"){
				callback(JSON.parse(request.reponseText));
			}else{
				callback(request.reponseText);
			}
		}
	};
	request.send(null);
}