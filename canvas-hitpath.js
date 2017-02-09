// 如果鼠标事件发生在指定的CanvasRenderingContext2D对象的当前路径上则返回true
function hitpath(context,event){
	// 从<canvas>对象中获取<canvas>元素
	var canvas=context.canvas;

	// 获取画布尺寸和位置
	var bb=canvas.getBoundingClientRect();

	// 将鼠标事件坐标通过转换和缩放变换成画布坐标
	var x=(event.clientX-bb.left)*(canvas.width/bb.width);
	var y=(event.clientY-bb.top)*(canvas.height/bb.height);

	// 用这些变换后的坐标来调用isPointInPath()方法
	return context.isPointInPath(x,y);
}

// 使用方法：
// canvas.onclick=function(event){
// 	if(hitpath(this.getContext("2d"),event)){
// 		// 单击发生在当前路径上
// 	}
// }