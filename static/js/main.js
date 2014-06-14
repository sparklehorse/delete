function display(text)
{
//if(count<text.length){
if(text.substring(count,count+1)=="\n")
{
$("#display").append("<br>");
}
else
{
$("#display").append(text.substring(count,count+1));
}
count++;
//}
if(count==text.length)
{
$("#again").fadeIn(1500, function() {
          $("#again").css("visibility", "visible");
        })
clearInterval(intervalId);
}
}
function display2(text)
{

}
function setCookie()
{
//alert("set cookie")
document.cookie="viewed=yes";
//getCookie();
}

function getCookie()
{
var cookie=document.cookie;
if(cookie=="")
{
//alert("no cookie");
return 0;
}
else
{
//alert(cookie);
return 1;
}
}

function deleteCookie()
{
document.cookie="";
}


(function main()
{
count=0;
text="123456789";
intervalId="";
var viewed=getCookie();
if(viewed==0)
{
//setInterval("display(text)",100);

$.ajax({
				type: "GET",
				url: "A deep-sworn vow_utf8.txt",
				contentType: "text/html; charset=utf8",
				success: function(msg){
				text=msg;
				display(text);
				intervalId=setInterval("display(text)",100); 
				}
				
})
}
else if(viewed==1)
{
$.ajax({
				type: "GET",
				url: "A deep-sworn vow_utf8.txt",
				contentType: "text/html; charset=utf8",
				success: function(msg){
				text=msg;
				//$("#display").text(text);
				count=0;
				//alert(text.length);
				for(i=0;i<text.length;i++)// set = to loop one more time to display again button
				{
				display(text);
				}
				//display(text);
				//setInterval("display(text)",100); 
				
				}
				
})
}
setCookie();

 $(document).ready(function(){
  	          $("#again").bind("click",function(){
			$("#again").css("visibility", "hidden");			  
			  count=0;
			  $("#display").text("");
			  display(text);
			  intervalId=setInterval("display(text)",100);
			  })
			  })
			  /*
$(document).ready(function(){
//var msg=$("#dsq-2").contents().find(".post-message p:first").html();
var msg=$("#dsq-2").contents().html();
//var msg=$(".post-message p:first").html
alert(msg);
			  })
			  */

})();