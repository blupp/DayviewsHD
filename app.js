// Dayviews HD

Titanium.UI.orientation = Titanium.UI.LANDSCAPE_LEFT;

// Includes
Ti.include("api.js");

// Set background
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


// Create, init and show loginScreen
var loginScreen = Ti.UI.createWindow({
		title: "Dayviews HD",
		backgroundColor: "#000",
		layout: "vertical"
});

Ti.include("loginScreen.js");

var loginTab = Ti.UI.createTab({
		title: "Login",
		icon: "KS_nav_views.png",
		window: loginScreen
});

var imagesToday = Ti.UI.createWindow({
		title: "Photos from today",
		backgroundColor: "#000",
		active: false
});

var imageTab = Ti.UI.createTab({
		title: "Photos from today",
		icon: "KS_nav_views.png",
		window: imagesToday
});

imagesToday.addEventListener("open",function(e){
		Ti.API.info("images today window open");
		
		imagesToday.active = true;
		
		Ti.include("imageScreen.js");
});

var galleryScreen = Ti.UI.createWindow({
		title: "Gallery HD",
		backgroundColor: "#000"
});

//galleryScreen.open();
//Ti.include("galleryScreen.js");

// *******

tabGroup.addTab(loginTab);
tabGroup.addTab(imageTab);

tabGroup.open();


// *******

var imageScreen = Ti.UI.createWindow({
		title: "Dayviews HD",
		backgroundColor: "#000",
		currentIndex: 0
});
