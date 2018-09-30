onload = function(){
	drowSampleGraph();
	ddd();
};
function drowSampleGraph() {
	var canvas1 = document.getElementById('canvas1');
	var datas = [120, 160, 130, 150, 100, 150, 200];
	var stroke_opts = {
		color: 'balck',
		width: 2
	};
	var fill_opts = {
		color: 'red'
	}
	barGraph(canvas1, datas, stroke_opts, fill_opts);
	function barGraph(canvas_obj, datas, stroke_opts, fill_opts){
		var c = canvas_obj.getContext('2d');
		// bar
		var pos = 0;
		var bar_width = canvas_obj.width / datas.length;
		for (var i = 0; i < datas.length; i++){
			var barPos = {
				x: pos,
				y: canvas_obj.height - datas[i],
				w: bar_width
			};
			bar(c, datas[i], barPos, stroke_opts, fill_opts);
			pos += bar_width;
		}
		function bar(context, data, barPos, stroke_opts, fill_opts) {
			context.strokeStyle = stroke_opts.color;
			context.lineWidth = stroke_opts.width;
			context.strokeRect(barPos.x, barPos.y, barPos.w, data);
			context.fillStyle = fill_opts.color;
			context.fillRect(barPos.x, barPos.y, barPos.w, data);
		}
	}
}
function ddd() {
	//alert("hoge");
	var parentCanvasWidth = 1440;
	var parentCanvasHight = 900;
	var outsideMergin = 20;
	var lineHeight = 20;
	var columnWidth = 20;
	var offset_x = 0.5;
	var offset_y = 0.5;
	var headerHight = 60;
	var itemNameColumnWidth = 200;
	var canvas = document.getElementById('bar');	
	var canvasContext = canvas.getContext('2d');

	var baseFontColor = 'rgb(00, 00, 00)';
	var evenRowBackgroudColor = '#f3f3f3';
	var lineColor = '#cccccc';

	canvasContext.textBaseline = "top";

	canvasContext.lineWidth = 1;
	//canvasContext.beginPath();

	canvasContext.strokeStyle = lineColor;

	//canvasContext.strokeRect(outsideMergin+offset_x, outsideMergin+offset_y, parentCanvasWidth-outsideMergin*2, parentCanvasHight-outsideMergin*2); // 一番大きい四角
	//canvasContext.strokeRect(20.5, 40.5, 920, 440);
	//canvasContext.strokeRect(20.5, 60.5, 920, 440);
	//canvasContext.strokeRect(outsideMergin+offset_x, outsideMergin+offset_y, itemNameColumnWidth, parentCanvasHight-outsideMergin*2); // 左
	//canvasContext.strokeRect(220.5, 20.5, 720, 440); // 右

	canvasContext.strokeRect(outsideMergin+itemNameColumnWidth+offset_x, outsideMergin+offset_y, parentCanvasWidth-outsideMergin*2-itemNameColumnWidth, headerHight); // 上
	canvasContext.strokeRect(outsideMergin+itemNameColumnWidth+offset_x, outsideMergin+lineHeight+offset_y, parentCanvasWidth-itemNameColumnWidth-outsideMergin*2, lineHeight); // 上右

	canvasContext.fillStyle = evenRowBackgroudColor;
	for(var i=80.5; i < parentCanvasHight-outsideMergin; i+=40) {
		canvasContext.fillRect(20.5, i, parentCanvasWidth-outsideMergin*2, lineHeight); // 行
	}

	for(var i=outsideMergin+itemNameColumnWidth+offset_x; i<parentCanvasWidth; i+=columnWidth) {
		canvasContext.strokeRect(i, outsideMergin+lineHeight+offset_y, parentCanvasWidth-outsideMergin*2, lineHeight); // 行
	}
/*	
	canvasContext.strokeRect(20.5, 120.5, 920, 20); // 行
	canvasContext.strokeRect(20.5, 160.5, 920, 20); // 行
	canvasContext.strokeRect(20.5, 200.5, 920, 20); // 行
	canvasContext.strokeRect(20.5, 240.5, 920, 20); // 行
	canvasContext.strokeRect(20.5, 280.5, 920, 20); // 行
	canvasContext.strokeRect(20.5, 320.5, 920, 20); // 行
	canvasContext.strokeRect(20.5, 360.5, 920, 20); // 行
	canvasContext.strokeRect(20.5, 400.5, 920, 20); // 行
	canvasContext.strokeRect(20.5, 440.5, 920, 20); // 行
*/
	canvasContext.fillStyle = baseFontColor; // 赤
	canvasContext.font = "12px 'M PLUS 1p', 'sans-serif'";
	canvasContext.fillText("摩訶般若波羅蜜多心経観自在菩薩行深般若波羅蜜多時照見五蘊皆空度一切苦厄", 20.5, 20.5 );
	canvasContext.fillText("舎利子色不異空空不異色色即是空空即是色受想行識亦復如是", 20.5, 40.5 , 500);
	canvasContext.fillText("舎利子是諸法空相不生不滅不垢不浄不増不減是故空中無色無受想行識無眼耳鼻舌身意無色声香味触法", 20.5, 60.5 , 800);

}