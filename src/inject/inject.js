chrome.extension.sendMessage({}, function(response) {
		if (window.jQuery) {
			var time = 0;
			var readyStateLogoVisibleInterval = setInterval(function() {
				if (jQuery('#musixmatch-logo').length){
					jQuery('#musixmatch-logo').remove();
				}
		 	}, 1);
		}
});