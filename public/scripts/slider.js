$(document).ready(function() {
	
	$(".slider").hide()
	
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
	$(".title_ok_button").click(okTitle)
	$(".title_cancel_button").click(cancelTitle)
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
	$(this).parent().parent().find('.title_edit_input').val(title)
	$(this).parent().hide().next().show();
}

function okTitle()
{
	var value = $(this).prev().val()
	$(this).parent().parent().find('.title_label').text(value)
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