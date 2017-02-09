// 如果指定的鼠标事件点下的像素不是透明的则返回true
function hitpaint(context,event){
	// 通过转换和缩放将鼠标事件坐标转换成画布坐标
	var canvas=context.canvas;
	var bb=canvas.getBoundingClientRect();
	var x=(event.clientX-bb.left)*(canvas.width/bb.width);
	var y=(event.clientY-bb.top)*(canvas.height/bb.height);

	// 获取像素
	var pixels=c.getImageData(x,y,1,1);

	// 如果任何像素的alpha值非0，则返回true（命中）
	for(var i=3;i<pixels.data.length;i+=4){
		if(pixels.data[i]!==0){
			return true;
		}
	}

	return false;
}