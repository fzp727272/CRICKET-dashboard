

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






//close

// based on Todd Motto functions
// http://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

$("#toggle").click(function() {
 toggleClass(this, 'on');
   return false;
});
$("#toggle").blur(function() {

	if ($("#toggle").hasClass('on')) { $("#toggle").removeClass('on');
   return false;};

});



//tab jquery

function resetTabs(obj) {
	$(obj).parent().parent().next("div").find(".tab-list").hide();
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



			window.onload = function () {
			loadTab();
			}



var search = document.getElementById('search');
var button = document.getElementById('button');
var input = document.getElementById('input');

function loading() {
	search.classList.add('loading');
	
	setTimeout(function() {
		search.classList.remove('loading');
	}, 1500);
};

$("#button").on('click', loading);

$("#input").on('keydown', function() {
	if(event.keyCode == 13) loading();
});

(function() {
  $(function() {
    return $('[data-toggle]').on('click', function() {
      var toggle;
      toggle = $(this).addClass('active').attr('data-toggle');
      $(this).siblings('[data-toggle]').removeClass('active');
      return $('.surveys').removeClass('grid list').addClass(toggle);
    });
  });

}).call(this);






	$("button#alert ").click(function(){
		swal("This is a dialog!");
	});
	$("button#alert_sucess ").click(function(){
		swal("Good!", "Popup a dialog", "success");
	});
	$("button#alert_error ").click(function(){
		swal("OMG!", "Popup an error dialog", "error");
	});
	$("button#alert_delete ").click(function(){
		 swal({
			title: "Are you sure to delete?", 
			text: "Are you sure to delete?", 
			type: "warning",
			showCancelButton: true,
			closeOnConfirm: false,
			confirmButtonText: "Yes,delete",
			confirmButtonColor: "#ec6c62"
			}, function() {
				$.ajax({
					url: "do.php",
					type: "DELETE"
				}).done(function(data) {
					swal("SUCESS!", "The data has been deleted!", "success");
				}).error(function(data) {
					swal("OMG", " failed", "error");
				});
			});
	});
	
/*	$("#alert_good button").click(function(){
		swal({   
			title: "Good!",   
			text: '自定义<span style="color:red">图片</span>、<a href="#">HTML内容</a>。<br/>5秒后自动关闭。',   
			imageUrl: "images/thumbs-up.jpg",
			html: true,
			timer: 5000,   
			showConfirmButton: false
		});
	});
	*/
	$("button#alert_input ").click(function(){
		swal({   
			title: "input",   
			text: "input here and confirm:",   
			type: "input",   
			showCancelButton: true,   
			closeOnConfirm: false,   
			animation: "slide-from-top",   
			inputPlaceholder: "Write something" 
		}, function(inputValue){   
			if (inputValue === false) return false;      
			if (inputValue === "") {     
				swal.showInputError("Please input somethng!");     
				return false   
			}      
			swal("Awesome", "Your word: " + inputValue, "success"); 
		});
	});

//cricket svg animation

$(window).mousemove(function(event) {
	var winwidth = $(window).width();
	var winheight = $(window).height();
var cxx1 = 50+event.clientX / winwidth*36;
var cxx2 = 120+event.clientX / winwidth*36;
var cyy = 96+event.clientY / winwidth*40;
$(".cricket_eye").children("circle").eq(0).attr({
	'cx': cxx1,
	'cy':cyy

});
$(".cricket_eye").children("circle").eq(1).attr({
	'cx': cxx2,
'cy':cyy
});

});


$(window).mousedown(function(event) {
	/* Act on the event */
	$(".cricket_mouse_left").css({

		'transform':'rotate(20deg)'});
	$(".cricket_mouse_right").css({

		'transform':'rotate(-20deg)'});

	$(this).mouseup(function(event) {
		$(".cricket_mouse_left").css({

		'transform':'rotate(0deg)'});
	$(".cricket_mouse_right").css({

		'transform':'rotate(0deg)'});
	});
});


/*
function makeheight(){
	var aheigth = $(".side_contain").innerHeight;
	console.log(aheight);
	$(".drag_control").height =aheigth ;
};
setTimeout(makeheight,1000)*/
//$('.side_bar').perfectScrollbar();


