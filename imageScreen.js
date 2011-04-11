// Set up functions


// Handle the view

imageScreen.open();

if(imagesToday.active == true) {
	var location = getCurrentLocation();
	getImagesCloseToLocation(location.latitude,location.longitude,displayImages);
	//getImagesToday(displayImages);
} else {
	var username = usernameInput.value || "blupp";
	getImagesForUser(username,displayImages);	
}

var scrollableView = Ti.UI.createScrollableView({
	showPagingControl:false
});

var imageText = Ti.UI.createLabel({
	backgrounColor: "#000",
	color: "#FFF",
	width: "100%",
	font: { fontSize: 24 },
	textAlign: "center"
});

var messageWin = Titanium.UI.createWindow({
	height:100,
	width:"100%",
	bottom: "0%",
	backgroundColor: "#000",
	touchEnabled:false,
	opacity: 0.8

});
	
	

								 
function displayImages(data) {

	if(!data.images) {
		data.images = data;
	}
	
	var index = imageScreen.currentIndex;
	
	// create 3 views
	
	if(index == 0) {
		index = 1;
		scrollableView.currentPage = 0;
	} else if(index == (data.images.length-1)) {
		index = data.images.length-2;
		scrollableView.currentPage = 2;
	} else {
		scrollableView.currentPage = 1;
	}
	
	var v1 = Ti.UI.createImageView({
		image: data.images[index-1].image,
		index: index-1
	});
	
	var v2 = Ti.UI.createImageView({
		image: data.images[index].image,
		index: index
	});
	
	var v3 = Ti.UI.createImageView({
		image: data.images[index+1].image,
		index: index+1
	});
	
	// add views to scrollview
	scrollableView.views = [v1,v2,v3];
	//scrollableView.currentPage = 1;
	
	l("preCurrentIndex: " + imageScreen.currentIndex);
	
	imageText.text = data.images[index].text.replace(/<.*?>/g, '');
	
	var lastIndex = index;
	
	// set scroll handler
	scrollableView.addEventListener("scroll",function(e){
		
		index = e.view.index;
		
		l("last" + lastIndex);
		l("index" + index);
		
		// find out witch direction where are scrolling
		var direction = 0;
		if(lastIndex < index) {
			direction = "right";
		} else if(lastIndex > index) {
			direction = "left";
		}
		
		if(direction == "right" && v3.index != (data.images.length-1)) {
			
			// Update first view
			v1.image = v2.image;
			v1.index = v2.index;
			
			// Update current
			v2.image = v3.image;
			v2.index = v3.index;
			scrollableView.currentPage = 1;
			
			// Update last
			v3.image = data.images[v3.index+1].image;
			v3.index = v3.index+1;
			
			lastIndex = index;
		}
		
		if(direction == "left" && v1.index != 0) {
			
			// Update last view
			v3.image = v2.image;
			v3.index = v2.index;
			
			// Update current
			v2.image = v1.image;
			v2.index = v1.index;
			scrollableView.currentPage = 1;
			
			// Update last
			v1.image = data.images[v1.index-1].image;
			v1.index = v1.index-1;
			
			lastIndex = index;
		}
		
		imageText.text = data.images[index].text.replace(/<.*?>/g, '');
		
	});
	
	
	imageScreen.add(scrollableView);	
	messageWin.add(imageText);
	messageWin.open();

}
