(function ($, window, document, undefined) {

  'use strict';

	$(function () {

		$('.filter').click(function() {
			var filter = $(this).attr('id');
			console.log(filter);
			if(filter === 'all') {
				$('.project-card').fadeIn('fast');
			} else {
				$('.project-card').each(function (){
					if(!$(this).hasClass('.' + filter)) {
						$(this).fadeOut('fast');
					}
				});
				$('.'+ filter).fadeIn();
			}
			$('.filters-list li').removeClass('active');
			$(this).addClass('active');
			return false;
		});

  });

})(jQuery, window, document);
