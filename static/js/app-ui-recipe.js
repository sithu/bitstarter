// app-ui-recipe.js
$("#recipeModal").on('hidden.bs.modal', function() {
	$.get("/add-to-my-recipe-box", function(data,status){
    	// alert("Data: " + data + "\nStatus: " + status);
  	});   
});
