alert("shut down in 5 seconds");

$.ajax({
				type: "GET",
				url: "code.txt",
				success: function(msg){//get object
				alert(msg);
				}
})