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
function setCookie()
{
alert("set cookie")
document.cookie="viewed=yes";
//getCookie();
}
function getCookie()
{
var cookie=document.cookie;
if(cookie=="")
{
alert("no cookie");
}
else
{
alert(cookie);
}
}
(function main()
{
count=0;
text="123456789";

getCookie();
//setInterval("display(text)",100);

$.ajax({
				type: "GET",
				url: "A deep-sworn vow_utf8.txt",
				contentType: "text/html; charset=utf8",
				success: function(msg){
				text=msg;
				display(text);
				setInterval("display(text)",100); 
				
				}
				
})

setCookie();

})();