function container(page){
	$("#main_container").html(' ');
	$("#main_container").load(page);
};



$("#list").click(function(event) {
	container('../children/tabs.html')
});