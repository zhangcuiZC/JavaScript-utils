// cookieStorage.js
// 实现像localStorage和sessionStorage一样的存储API

function cookieStorage(maxage,path){// 两个参数分别代表存储有效期和作用域

	// 获取一个存储全部cookie信息的对象
	var cookie=(function(){
		var cookie={};
  		var all=document.cookie;
  		if(all===""){
    		return cookie;
  		}
  		var list=all.split("; ");
  		for(var i=0;i<list.length;i++){
    		var c=list[i];
    		var p=c.indexOf("=");
    		var name=c.substring(0,p);
    		var value=c.substring(p+1);
    		value=encodeURIComponent(value);
    		cookie[name]=value;
  		}
  		return cookie;
	}());

	// 将所有cookie名字存储到一个数组中
	var keys=[];
	for(var key in cookie){
		keys.push(key);
	}

	// 现在定义存储API公共的属性和方法
	// 存储的cookie个数
	this.length=keys.length;

	// 返回第n个cookie的名字，如果n越界则返回null
	this.key=function(n){
		if(n<0||n>=keys.length){
			return null;
		}
		return keys[n];
	};

	// 返回指定名字的cookie值，如果不存在则返回null
	this.getItem=function(name){
		return cookie[name]||null;
	};

	// 存储cookie值
	this.setItem=function(key,value){
		if(!(key in cookie)){
			keys.push(key);
			this.length++;
		}

		cookie[key]=value;

		var c=key+"="+encodeURIComponent(value);

		if(maxage){
			c+="; max-age="+maxage;
		}
		if(path){
			c+="; path="+path;
		}
		document.cookie=c;
	};

	// 删除指定的cookie
	this.removeItem=function(key){
		if(!(key in cookie)){
			return;
		}

		delete cookie[key];

		for(var i=0;i<keys.length;i++){
			if(keys[i]===key){
				keys.splice(i,1);
				break;
			}
		}
		this.length--;

		document.cookie=key+"=; max-age=0";
	};

	// 清除所有cookie
	this.clear=function(){
		for(var i=0;i<keys.length;i++){
			document.cookie=keys[i]+"; max-age=0";
		}

		cookie={};
		keys=[];
		this.length=0;
	};
}
