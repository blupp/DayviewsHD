
var albumsTableView = Ti.UI.createTableView({
				backgroundColor: "#fff",
				layout: "horizontal",
				selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
});

var row = Titanium.UI.createTableViewRow({
	height: 150,
	separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
	title: "Albums"
});

albumsTableView.appendRow(row);