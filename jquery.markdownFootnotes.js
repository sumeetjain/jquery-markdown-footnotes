$(function() {
	// To edit the display of the footnote
	var footnoteContentCSS = {
		'background': '#000',
		'opacity': '.9',
		'color': '#fff',
		'-webkit-box-shadow': '0px 0px 5px #000',
		'-moz-box-shadow': '0px 0px 5px #000'
	}
	
	// To edit the display of the link that closes the footnote
	var closeFootnoteCSS = {
		'text-transform': 'uppercase',
		'text-decoration': 'none',
		'font-size': '9px',
		'float': 'right',
		'color': '#666',
		'font-family': 'Helvetica, sans-serif'
	}
	
	$("a[rel=footnote]").each(function(){
		var link = $(this);
		var token = link.attr('href').substr(1);
		var footnoteContent = $(document.getElementById(token)).html();
		
		$('body').append('<div id="overlay-' + token + '" class="footnoteContent" style="display: none; position: fixed; bottom: 0; left: 50%; padding: 2%; width: 80%; margin-left: -42%;">' + footnoteContent + '</div>');
		
		link.click(function(){
			var $currentFootnote = $(document.getElementById('overlay-' + token));
			
			// If the footnote is already displayed, hide it instead
			if ($currentFootnote.is(':visible')) {
				$currentFootnote.slideUp('fast');

			} else {
				$('.footnoteContent').hide();
				$currentFootnote.slideDown('fast');
			}
			
			return false;
		});
	});
	
	$('.footnoteContent a[rev=footnote]').remove();
	$('.footnoteContent').prepend('<a href="#" class="closeFootnote">Close</a>').css(footnoteContentCSS);
	$('.closeFootnote').click(function(){
		$(this).closest('.footnoteContent').slideUp('fast');
		return false;
	}).css(closeFootnoteCSS);
});
