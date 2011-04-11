
var photosTableView = Ti.UI.createTableView({
				backgroundColor: "#fff",
				layout: "horizontal",
				selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
});


function displayGalleryImages(data) {
	
	if(!data.images) {
				alert("Error getting images data");
				return;
	}
	
	//Ti.API.info(data.images);
	
	for(var i=0;i<data.images.length;i=i+7) {
				
				var row = Titanium.UI.createTableViewRow({
					height: 150,
					separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.NONE
				});
				
				for(var j=0;j<7;j++) {
								
								if(typeof data.images[i+j] == "undefined") {
												Ti.API.info("End of data");
												break;
								}
								
								var imageView = Ti.UI.createImageView({
									image: data.images[i+j].thumbnail,
									index: i+j,
									width: 138,
									height: 138,
									left: j*147
								});
								
								row.add(imageView);
								
								imageView.addEventListener("click", clickEventOnImage);
				}
				
				photosTableView.appendRow(row);
	}

} 