imageViewer = {
	init: function() {
		var _this = this;
		$(function() {
			$("#imgs").attr("src","images/"+_this._images[0].file);	
		})

		for(var i = 0; i< 10; i++) {
			this._changeImage();
		}
	},
	_changeImage: function() {
		var _this = this;
		var index;
		while(1) {
			index = Math.floor(Math.random()*this._images.length);		
			if($("#imgs").attr("src")!=="images/"+_this._images[index].file) {
				break;
			}
		}
		//		console.log(index);
		$(function() {
			$("#imgs").attr("src","images/"+_this._images[index].file);	
		})
	},
	_images: [{
		name: '극화',
		file: 'Chrysanthemum.jpg'
	},{
		name: '사막',
		file: 'Desert.jpg'		
	},{
		name: '수국',
		file: 'Hydrangeas.jpg'		
	},{
		name: '젤리피시',
		file: 'Jellyfish.jpg'
	},{
		name: '코알라',
		file: 'Koala.jpg'		
	},{
		name: '등대',
		file: 'Lighthouse.jpg'		
	},{
		name: '펭귄',
		file: 'Penguins.jpg'		
	},{
		name: '툴립',
		file: 'Tulips.jpg'		
	}]
};

imageViewer.init();

var isStop = true;
$(function() {
	$("#btn-change").click(function() {
		imageViewer._changeImage();
	});

	$("#btn-slideshow").click(function() {
		startStop();
		var _this = this;
		var autoSlide = setInterval(function() {
			if(isStop) {
				console.log("isstop: "+isStop);
				console.log("this : "+ _this);
				$(_this).html("슬라이드쇼 시작");
				clearInterval(autoSlide);
			} else {
				console.log("isstop: "+isStop);
				console.log("this : "+ _this);
				$(_this).html("슬라이드쇼 멈춤");
				imageViewer._changeImage();		
			}
		},500);
	});
	
	$("#tets").click(function() {
		console.log("gdg");
	});
});

function startStop(){
	isStop = isStop?false:true;
}