//get URL Variable
var getURLVariable = function (keyword){
	var path = decodeURI(window.location.toString());
	if(path.match(keyword)){
		var variable = path.split(keyword+"=")[1];
		if(variable.match("&"))	variable = variable.split("&")[0];
		return variable;
	}
	else{
		return null;
	}
}

$(function(){
	//get page name
	var page = getURLVariable("page");
	
	//load nav and add active class
	$("#nav").load("page/nav.html",function(){
		$(".nav-list").load("page/nav-list.html",function(){
			$(".nav-list a[pageName*="+page+"]").parent("li").addClass("active");
			$("#page").html("<h1>"+page+"</h1>");
		});
	});

	//click nav toggle button
	$("body").on("click",".nav-button-box",function(){
		$(this).toggleClass("open");

		if($(this).hasClass("open")){
			$(this).children("i").removeClass("fa-bars").addClass("fa-chevron-up");
			$(".nav-list").show();
		}
		else{
			$(this).children("i").removeClass("fa-chevron-up").addClass("fa-bars");
			$(".nav-list").hide();
		}
	});
});