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
    }
}