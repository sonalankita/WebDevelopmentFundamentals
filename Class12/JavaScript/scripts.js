// alert('this is a test for linking my js file');
$(function(){
	// this is where i will write my jQuery 
	// $('.box').on('click', function(){
	// 	// the code i want to run when the box is clicked
	// 	alert('the box is clicked')

	// });
	// $('.box').on('click', function(){

	// 	// $(this).css('background', 'cyan');
	// 	$(this).addClass('active')
	// });
	$('.box').on('click', function(){

		// $(this).css('background', 'cyan');
		$(this) .toggleClass('active')
	}); 

});


// function(){
// here you can write the function
// }