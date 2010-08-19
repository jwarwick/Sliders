$(document).ready(function() {
	
	var contentWidth = $(".slider").prev().width()
	var sliderWidth = $(".slider").width()
	$(".slider").css('left', contentWidth-sliderWidth)
	
	$(".slider").hide()
	
	$(".slider")
		.draggable({
			containment: 'parent',
			drag: function(){updateContent($(this).prev(), $(this), false)},
			stop: function(){updateContent($(this).prev(), $(this), true)},
	})
	
	$(".container").hover(
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