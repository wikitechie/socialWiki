$(window).ready(function() {
	$("a[href='#toggleDiff']").click(function() {
		var container = $(this).parent().parent().parent().find("div.attachments");
		$nextname = $(this).html(); 
		$(this).html($(this).attr('data-nextname'));
		$(this).attr('data-nextname',$nextname);
		container.slideToggle('slow');
		
	});
});