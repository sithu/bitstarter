$("#myModal").on('hidden.bs.modal', function() {
	$.get("/new-recipe", function(data,status){
    	// alert("Data: " + data + "\nStatus: " + status);
  	});   
});

