
var logo = Ti.UI.createImageView({
	image: "dayviewslogo.png",
	width: 400,
	height: "auto",
	top: 150
});

var usernameInput = Ti.UI.createTextField({
	hintText: "Username ...",
	width: 400,
	height: 60,
	backgroundColor: "#FFF",
	font: { fontSize: 24 },
	paddingLeft: 10,
	borderRadius: 5,
	top: 30
});

var loginButton = Ti.UI.createButton({
	title: "View photos",
	width: 400,
	height: 60,
	top: 30,
	font: {fontSize: 24},
	backgroundColor: "#397dc3",
	backgroundImage: 'none',
	borderRadius: 5
});

loginButton.addEventListener("click", function(){
	tabGroup.hide();
	galleryScreen.open();
	Ti.include("galleryScreen.js");
});

loginScreen.add(logo);
loginScreen.add(usernameInput);
loginScreen.add(loginButton);
