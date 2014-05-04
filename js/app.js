$(document).ready(function() {

	// place cursor in input area
	$('#entry').focus();

	//enter item name in input area
	function addItem() {
		var item = $('#entry').val();
		if(!$.trim($('#entry').val())) {
            alert('You forgot to enter your item');
        } else {
			$("<li class='unchecked'></li>").appendTo('#list').html(item+"<div class='remove'></div>");
        }
        $('#entry').val(''); // clear input area
	}
	// add new item to bottom of list
	$('.add').click(addItem);

	// make enter submit button
	$('#entry').keyup(function(event) {
		if(event.keyCode == 13){
			$('.add').click();
		}
	});

	// delete item when x is clicked
	$('#list').on('click','.remove', function() {
		$(this).closest('li').remove();
	});

	//cross off items
	$('#list').on('click','li', function() {
		$(this).toggleClass('.checked');
	});

});

