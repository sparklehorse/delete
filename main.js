function display(text)
{
if(count<text.length)
{
count++;
$("#display").text(text.substring(0,count));
}
}

(function main()
{
count=0;
text="123456789";

$.ajax({
				type: "GET",
				url: "code.txt",
				success: function(msg){
				text=msg;
				display(text);
				setInterval("display(text)",400); 
				
				}
})


})();