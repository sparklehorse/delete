function get_array()
{
	var arr = new Array()
	for(var i=0;i<text.length;i++)
		{
			if(text.substring(i, i+1)=="\n")
			{
				arr.push(i - 1);
				text = text.slice(0, i).concat(text.slice(i + 1))
			}
		}
	arr.push(text.length - 1);//最后一个没有\n
	return arr;
}


function disp(arr)
{
	var start = 0;
	var span_text_arr = new Array()
	for(var i=0;i<arr.length;i++)
	{
		span_text_arr[i] = text.slice(start, arr[i] + 1);
		start = arr[i] + 1;
	}

	span_text = span_text_arr[index];
	temp_text = $("#" + index).text();
	temp_text += span_text.substring(count, count + 1);
	$("#" + index).text(temp_text);
	count++;
	
	if(count==span_text_arr[index].length)
	{
		index++;
		count = 0;
	}
	
	if(index==arr.length)
	{
		$("#again").fadeIn(1500, function() {
			$("#again").css("visibility", "visible");
		})
		text = bak_text;
		clearInterval(intervalId);
	}
}


function display(viewed)
{
	var arr = get_array();
	for(var i=0;i<arr.length;i++)
	{
		$("#display").append('<span id="' + i + '"></span>');
		$("#display").append("<br>");
	}
	
	if(viewed==0)
	{
		(function(arr){
			intervalId = setInterval(function()
			{
				disp(arr)
			}, 100)
		})(arr);
	}
	else if(viewed==1)
	{
		for(var i=0;i<arr[arr.length-1]+1;i++)
		{
			disp(arr);
		}
	}
}


function setCookie()
{
	document.cookie = "viewed=yes";
}


function getCookie()
{
	var cookie = document.cookie;
	if(cookie=="")
	{
		return 0;
	}
	else
	{
		return 1;
	}
}


function deleteCookie()
{
	document.cookie = "";
}


(function main()
{
	count = 0;
	index = 0;
	intervalId = "";
	text = "kkkkkkkkkk\nadasdasd\nzxcvb\nzxc";  //length 包含\n
	bak_text = text;
	var viewed = getCookie();
	
	$.ajax({
		type: "GET",
		url: "A deep-sworn vow_utf8.txt",
		contentType: "text/html; charset=utf8",
		success: function(msg){
			text = msg;
			bak_text = text;
			$(document).ready(function(){
				display(viewed);
			})
		}			
	})
	
	setCookie();

	$(document).ready(function(){
		$("#again").bind("click",function(){
			$("#again").css("visibility", "hidden");			  
			count = 0;
			index = 0;
			intervalId = "";
			$("#display").text("");
			display(0);
		})
	})
})();