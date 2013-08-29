// Google Analytics (START)
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-43592508-1', 'recipes4biz.com');
ga('send', 'pageview');
// Google Analytics (END)

// FIXME: Get rid of this file

// app-ui-recipe.js
$("#recipeModal").on('hidden.bs.modal', function() {
	$.get("/add-to-my-recipe-box", function(data,status){
    	// alert("Data: " + data + "\nStatus: " + status);
  	});   
});
