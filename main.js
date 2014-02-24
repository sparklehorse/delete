function display(text)
{
if(text.substring(count,count+1)=="\n")
{
alert("n");
}
$("#display").append(text.substring(count,count+1));
count++;
}
(function main()
{
count=0;
text="123456789";
//setInterval("display(text)",100);

$.ajax({
				type: "GET",
				url: "poem.txt",
				success: function(msg){
				text=msg;
				display(text);
				setInterval("display(text)",100); 
				
				}
				
})

})();