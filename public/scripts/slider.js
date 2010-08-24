$(document).ready(function() 
{

	// if we want to make a leading div with the drag indicator, we need
	// to do some fancy jquery to get the sizes right
	// http://www.filamentgroup.com/lab/setting_equal_heights_with_jquery/
		
	$(".controls_container").hover(
		function() 
		{
			$(this).find(".slider").fadeIn(200);
		},
		function()
		{
			$(this).find(".slider").fadeOut(200);
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

		$("#slider_container").sortable({axis: 'y', 
										// containment: 'parent', // isn't allowing us to drop on top location
										opacity: 0.6,
										distance: 30});
		
		
	// handle enter key in edit fields
	$(".input_field").keypress(function(e)
	{
		var k = e.keyCode || e.which;
		if (k == 13) 
		{
			$(this).next().click();
			e.preventDefault();
			return false;
     	}
	});

	$(".edit_button").click(editTitle)
	$(".ok_button").click(okTitle)
	$(".cancel_button").click(cancelTitle)
	$(".remove_button").click(removeSlider)
		
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
	$(this).parent().parent().find('.edit_field').val(title)
	$(this).parent().hide().next().show();
}

function okTitle()
{
	var value = $(this).prev().val()
	$(this).parent().parent().find('.display_field').text(value)
	$(this).parent().hide().prev().show();
}

function cancelTitle()
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

function removeSlider()
{
	$(this).parent().parent().parent().fadeOut(500, function() {$(this).remove()})
}