$(document).ready(function() {
	
	$(".slider").hide()
	
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