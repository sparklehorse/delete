function display(text)
{
if(text.substring(count,count+1)=="\n")
{
$("#display").append("<br>");
}
else
{
$("#display").append(text.substring(count,count+1));
}
count++;
}
(function main()
{
count=0;
text="123456789";
//setInterval("display(text)",100);

$.ajax({
				type: "GET",
				url: "A deep-sworn vow.txt",
				contentType: "text/html; charset=ansi",
				success: function(msg){
				text=msg;
				display(text);
				setInterval("display(text)",100); 
				
				}
				
})

})();