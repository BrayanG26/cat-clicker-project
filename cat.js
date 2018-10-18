$(document).ready(function ($) {

	function createCatsNodes() {
		var index;
		var numCats = [1, 2, 3, 4, 5];
		var imagesDataSet = [{
				id: 1,
				name: "augustin",
				url: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
				age: "2",
			}, {
				id: 2,
				name: "jacinta",
				url: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350",
				age: "1",
			}, {
				id: 3,
				name: "gustavo",
				url: "https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg",
				age: "2",
			}, {
				id: 4,
				name: "luigi",
				url: "https://images.unsplash.com/photo-1533738699159-d0c68059bb61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0bb9888db1d270eab08c77f41120dfca&w=1000&q=80",
				age: "3",
			}, {
				id: 5,
				name: "viviana",
				url: "http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/6f/23/p06f23lk.jpg",
				age: "1",
			}, {
				id: 6,
				name: "tomas",
				url: "https://www.thesprucepets.com/thmb/7kVrWdBf13osb9nYJ-4D2yPAwfQ=/425x326/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-466792657-59cef0d6c412440010be728c.jpg",
				age: "2",
			}, {
				id: 7,
				name: "genesis",
				url: "https://amp.businessinsider.com/images/5aa10ca0d877e618008b4678-750-562.jpg",
				age: "2",
			}, {
				id: 8,
				name: "anfora",
				url: "https://www.aspca.org/sites/default/files/cat-care_meowing-and-yowling_main-image.jpg",
				age: "1",
			}, {
				id: 9,
				name: "demetrio",
				url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdoH6fd7-mpAM9EcN7wj2dmhgKcUBNrjPdLqruK--36bvJ6qr1xA",
				age: "4",
			}, {
				id: 10,
				name: "cleopas",
				url: "https://www.askideas.com/media/23/Adult-Bombay-Cat-Picture.jpg",
				age: "1",
			}, {
				id: 11,
				name: "zen",
				url: "http://cdn.shopify.com/s/files/1/0997/4496/files/Bombay_Cat_in_Plant_grande.jpg?v=1534272467",
				age: "2",
			}, {
				id: 12,
				name: "carlos",
				url: "https://cdn.pixabay.com/photo/2013/06/08/19/18/cat-123339_960_720.jpg",
				age: "4",
			}, {
				id: 13,
				name: "alirio",
				url: "http://www.redbarninc.com/blog/wp-content/uploads/2015/07/Awkward-Cat-4.jpg",
				age: "3",
			},
			{
				id: 14,
				name: "aristobulo",
				url: "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/100691619-what-is-cat-fostering-632x475.jpg",
				age: "2",
			},
			{
				id: 15,
				name: "temistocles",
				url: "https://peopledotcom.files.wordpress.com/2018/02/two-tone-cat.jpg",
				age: "4",
			}
		];
		var $catContainer = $(".cats-container");
		
		$catContainer.append(template);
		for (var i = 0; i < numCats.length; i++) {
			index = Math.floor(Math.random() * imagesDataSet.length) + (1);
			var cat = imagesDataSet[index];
			var template = ['<div class"cats__element">',
			'<p class="cats__name-element">'+cat.name.toUpperCase()+'</p>',
			'<img class="cats__image-element" src="'+cat.url+'" alt="" id="cat-'+(i+1)+'">',
			'</div>'].join("\n");
			console.info((i+1)+" cat completed");
			$catContainer.append(template);
		}
	}
	createCatsNodes();
});
