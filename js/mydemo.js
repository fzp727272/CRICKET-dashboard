

$(document).mousemove(function(e) {
	if (!!this.move) {
		var posix = !document.move_target ? {'x': 0, 'y': 0} : document.move_target.posix,
			callback = document.call_down || function() {
				$(this.move_target).css({
				
		
				});
			};

		callback.call(this, e, posix);
	}
}).mouseup(function(e) {
	if (!!this.move) {
		var callback = document.call_up || function(){};
		callback.call(this, e);
		$.extend(this, {
			'move': false,
			'move_target': null,
			'call_down': false,
			'call_up': false
		});
	}
});

var $box = $('.side_bar').mousedown(function(e) {
    var offset = $(this).offset();
    
    this.posix = {'x': e.pageX - offset.left, 'y': e.pageY - offset.top};
    $.extend(document, {'move': true, 'move_target': this});
}).on('mousedown', '.drag_control', function(e) {
    var posix = {
            'w': $box.width(), 
            'h': $box.height(), 
            'x': e.pageX, 
      
        };
    
    $.extend(document, {'move': true, 'call_down': function(e) {

if (e.pageX - posix.x + posix.w <500) {   $box.css({
            'width': Math.max(180, e.pageX - posix.x + posix.w),
      
        });
       $("body").css({
        'padding-left':Math.max (180,e.pageX - posix.x + posix.w)//80是最小宽度
       });
         $(".drag_control").css({
        'left':Math.max (180-5,e.pageX - posix.x + posix.w-5)//80是最小宽度
       });};

     
 
    }});
    return false;
});




//tab jquery

function resetTabs(obj) {
	$(obj).parent().parent().next("div").find("div").hide();
	$(obj).parent().parent().find("a").removeClass("current");
}
function loadTab() {
	$(".content > div").hide();
	$(".tabs").each(function () {
		$(this).find("li:first a").addClass("current");
	});
	$(".content").each(function () {
		$(this).find("div:first").fadeIn();
	});
	$(".tabs a").on("click", function (e) {
		e.preventDefault();
		if ($(this).attr("class") == "current") {
			return;
		} else {
			resetTabs(this);
			$(this).addClass("current");
			$($(this).attr("name")).fadeIn();
		}
	});
}


	$(function(){
				loadTab();
			});


var search = document.getElementById('search');
var button = document.getElementById('button');
var input = document.getElementById('input');

function loading() {
	search.classList.add('loading');
	
	setTimeout(function() {
		search.classList.remove('loading');
	}, 1500);
}

button.addEventListener('click', loading);

input.addEventListener('keydown', function() {
	if(event.keyCode == 13) loading();
});
/*
function makeheight(){
	var aheigth = $(".side_contain").innerHeight;
	console.log(aheight);
	$(".drag_control").height =aheigth ;
};
setTimeout(makeheight,1000)*/
//$('.side_bar').perfectScrollbar();
