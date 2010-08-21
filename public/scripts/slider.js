$(document).ready(function() {
	
	/*
	var contentWidth = $(".slider").prev().width()
	var sliderWidth = $(".slider").width()
	$(".slider").css('left', contentWidth-sliderWidth)
	*/
	
	$(".slider").hide()
	
	/*
	$(".slider")
		.draggable({
			containment: 'parent',
			drag: function(){updateContent($(this).prev(), $(this), false)},
			stop: function(){updateContent($(this).prev(), $(this), true)},
	})
	*/
	
	$(".controls_container").hover(
		function() 
		{
			$(this).find(".slider").fadeIn(200);
			//$(this).css('background-color', 'black')
		},
		function()
		{
			$(this).find(".slider").fadeOut(200);
			//$(this).css('background-color', 'red')
		})
	
	$(".container").hover(
		function() 
		{
			$(this).find(".show_on_hover").fadeIn(200);
		},
		function()
		{
			$(this).find(".show_on_hover").fadeOut(200);
		})

	$(".title_edit_button").click(editTitle)
	$(".title_ok_button").click(updateTitle)
	$(".title_cancel_button").click(displayTitle)
		
		
	$("#add_button").click(addNewSlider)
})

function updateContent(contentSel, sliderSel, final)
{
	var left = sliderSel.position().left
	var sliderWidth = sliderSel.width()
	if (!final)
	{
		sliderWidth = sliderWidth/2;
	}
	contentSel.width(left+sliderWidth)
}

function editTitle()
{
	var title = $(this).prev().text()
	$(this).parent().hide().next().show();
}

function updateTitle()
{
	// XXX - apparently $(this) gets screwed up (set to DomWindow)
	// when we call displayTitle here...
	displayTitle()
}

function displayTitle()
{
	$(this).parent().hide().prev().show();
}

function addNewSlider()
{
	$(".clone_object")
		.clone(true)
		.removeClass("clone_object")
		.hide()
		.appendTo("#slider_container")
		.fadeIn(500)
		.find(".slider")
			.draggable({
				containment: 'parent',
				drag: function(){updateContent($(this).prev(), $(this), false)},
				stop: function(){updateContent($(this).prev(), $(this), true)},
			})
}
