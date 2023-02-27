imageViewer = {
	init: function() {
		for(var i = 0; i< 100; i++) {
			this._changeImage();	
		}
	},
	_changeImage: function() {
		var index = Math.floor(Math.random()*this._images.length);
		console.log(index);
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
	},,{
		name: '펭귄',
		file: 'Penguins.jpg'		
	},{
		name: '툴립',
		file: 'Tulips.jpg'		
	}]
};