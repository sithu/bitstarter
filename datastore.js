var fs  = require("fs");

var filename = './db.json';

// load data once during init time
var content = fs.readFileSync(filename, 'utf8');
content = JSON.parse(content); 	
console.log(content);


function incrementLiked(id) {
	var index = id - 1;
	var liked = content.recipes[index].liked;
	content.recipes[id-1].liked = liked + 1;
}

function incrementViews(id) {
	var views = content.recipes[id-1].views;
	content.recipes[id-1].views = views + 1;
}

function save() {
	fs.writeFile(filename, JSON.stringify(content, null, 4), function(err) {
	    if(err) {
	      console.log(err);
	    } else {
	      console.log("JSON saved to ");
	    }
	});
}


var Datastore = (function() {
	var Datastore = function() {
	};
	
	Datastore.prototype.content = content;
	
	Datastore.prototype.liked = function liked(id) {
		incrementLiked(id);
		save();
	};

	Datastore.prototype.viewed = function viewed(id) {
		incrementViews(id);
		save();
	};

	return Datastore;

})();

module.exports = Datastore;
