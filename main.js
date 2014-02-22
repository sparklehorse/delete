//alert("shut down in 5 seconds");



(function main()
{
var text;
$.ajax({
				type: "GET",
				url: "code.txt",
				success: function(msg){
				text=msg;
				alert(text);
				
				}
})

/*
while(1)
{
alert("~~~~"+text);
}
*/

})();