imageViewer = {
	init: function() {
		$(function() {
			$("#btn-change").click(this._changeImage.bind(this));
			$("#btn-slideshow").click(this._slideShow.bind(this));
			$(".image-viewer #imgs").dblclick(this._consoleLog.bind(this));
			this._changeImage.bind(this);
		}.bind(this));
	},
	_changeImage: function() {
		var index;
		while(1) {
			index = Math.floor(Math.random()*this._images.length);		
			if($("#imgs").attr("src")!=="images/"+this._images[index].file) {
				break;
			}
		}
		$("#imgs").attr("src","images/"+this._images[index].file);
		$("#imgs").attr("title",this._images[index].name);	

	},
	_slideShow: function() {
		if(this._interval) {
			clearInterval(this._interval);
			this._interval = null;
			$("#btn-slideshow").text("슬라이드쇼 시작");			
		} else {
			this._interval = setInterval(function() {
				this._changeImage();
			}.bind(this),500); 
			$("#btn-slideshow").text("슬라이드쇼 멈춤");

		}
	},
	_interval: null,
	_consoleLog: function() {
		var title = $("#imgs").attr("title");
		console.log("title : "+ title);
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