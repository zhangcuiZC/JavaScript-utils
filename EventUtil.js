//跨浏览器的事件对象的信息和方法——EventUtil对象。
var EventUtil={
    //添加事件处理程序
    addHandler:function(element,type,handler){
        if(element.addEventListener){
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent){
            element.attachEvent("on"+type,handler);
        }else{
            element["on"+type]=handler;
        }
    },
    //删除事件处理程序
    removeHandler:function(element,type,handler){
        if(element.removeEventListener){
            element.removeEventListener(type,handler,false);
        }else if(element.detachEvent){
            element.detachEvent("on"+type,handler);
        }else{
            element["on"+type]=null;
        }
    },
    //获取event对象
    getEvent:function(event){
        return event?event:window.event;
    },
    //返回事件的目标
    getTarget:function(event){
        return event.target||event.srcElement;
    },
    //取消事件的默认行为
    preventDefault:function(event){
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue=false;
        }
    },
    //阻止事件流
    stopPropagation:function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble=true;
        }
    },
    //获得mouseover和mouseout的相关元素
    getRelatedTarget:function(event){
    	if(event.relatedTarget){
    		return event.relatedTarget;
    	}else if(event.toElement){
    		return event.toElement;
    	}else if(event.fromElement){
    		return event.fromElement;
    	}else{
    		return null;
    	}
    },
    //获得鼠标按钮信息，0表示主鼠标按钮，1表示滚轮按钮，2表示次鼠标按钮
    getButton:function(event){
    	if(document.implementation.hasFeature("MouseEvents","2.0")){
    		return event.button;
    	}else{
    		switch(event.button){
    			case 0:
    			case 1:
    			case 3:
    			case 5:
    			case 7:
    				return 0;
    			case 2:
    			case 6:
    				return 2;
    			case 4:
    				return 1;
    		}
    	}
    },
    //在鼠标滚动时显示detail属性的值,向后滚是-120的倍数，向前是120的倍数(该方法需要使用浏览器检测)
    getWheelDelta:function(event){
    	if(event.wheelDelta){
    		return (client.engine.opera&&client.engine.opera<9.5?-event.wheelDelta:event.wheelDelta);
    	}else{
    		return -event.detail*40;
    	}
    },
    //keypress事件时的charCode值，表示按下的那个键所代表字符的ASCII编码
    getCharCode:function(event){
    	if(typeof event.charCode=="number"){
    		return event.charCode;
    	}else{
    		return event.keyCode;
    	}
    }
}