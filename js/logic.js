/*function container(page){
	$("#main_container").html(' ');
	$("#main_container").load(page);
};



$("#list").click(function(event) {
	container('../children/tabs.html')
});*/

$(function() {
	$("li #list").click(function(event) {
		location.href = "index.html";
	});

	$("li #table").click(function(event) {
		location.href = "table.html";
	});

	$("li #chart").click(function(event) {
		location.href = "chart.html";
	});
	$("li #login").click(function(event) {
		location.href = "login.html";
	});
	$("li #button").click(function(event) {
		location.href = "button.html";
	});


})