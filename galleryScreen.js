
Ti.include("galleryPhotos.js");
Ti.include("galleryAlbums.js");

function clickEventOnImage(data) {
				var index = data.source.index;
				
				// load imageScreen with start at index
				data.source.opacity = 0.5;
				imageScreen.currentIndex = index;
				
				showImageAtIndex(index);
				
				l("click on" + index);
}

function showImageAtIndex(index) {
				imageScreen.currentIndex = index;
				
				imageScreen.show();
				Ti.include("imageScreen.js");
}



//getImagesForUser("blupp",displayGalleryImages);	

galleryScreen.add(albumsTableView);
galleryScreen.add(photosTableView);

galleryScreen.currentView = photosTableView;

var toolbar = Ti.UI.createToolbar({
	top:0,
	borderTop:false,
	borderBottom:true,
	translucent:true,
	barColor:'#000'
});

var tabbedBar = Titanium.UI.createTabbedBar({
	labels:['Photos', 'Albums', 'Friends'],
	backgroundColor:'#000',
	style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
	height:25,
	width:400,
	index:0
});

var backButton = Ti.UI.createButton({
	title: "Back",
	backgroundColor: "#000",
	color: "#FFF",
	width: 80,
	height: 25,
	left: 10,
});

backButton.addEventListener("click",function(){
	tabGroup.show();
	loginScreen.open();
	galleryScreen.hide();
});

tabbedBar.addEventListener("click",function(e){
	
	galleryScreen.currentView.hide();
	
	switch (e.index) {
		case 0:
				// Photos
				photosTableView.show();
				galleryScreen.currentView = photosTableView;
				break;
		case 1:
				// Albums
				albumsTableView.show();
				galleryScreen.currentView = albumsTableView;
				break;
		case 2:
				// Friends
				break;
	}
	
});

toolbar.add(backButton);
toolbar.add(tabbedBar);


galleryScreen.add(toolbar);
galleryScreen.show();


