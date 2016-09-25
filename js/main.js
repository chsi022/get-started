var main = {
	
	init: function()
	{
		main.initMobileNav();
		main.initSearch();
		main.initInputValueDetection();
		main.initCarousels();
	},

	/**
	 * Initialise Generic Carousels
	 */
	initCarousels: function()
	{
		main.initCarouselOnImageLoad($('.hero-carousel__list'), main.initHomeHeroCarousel);
	},

	/**
	 * Function to init carousel after the first image in it has loaded.
	 * This function will help to reduce the incomplete carousel load issue.
	 */
	initCarouselOnImageLoad: function(carousel, callback)
	{
		if (!(carousel instanceof jQuery)){
			carousel = jQuery(carousel);
		}
		if (!carousel.length || !callback){ return false; }

		var carousel_img = carousel.find('img').first();
		if (!carousel_img.length){ return false; }

		if (carousel_img.prop('complete')){
			callback();
		}
		else {
			carousel_img.load(callback);
		}
	},


	/**
	 * Init the Home hero carousel
	 */
	initHomeHeroCarousel: function()
	{
		if (!$('.hero-carousel__list').length){ return false; }

		$('.hero-carousel__list').carouFredSel({
			auto: 5000,
			responsive: true,
			items: {
				visible: 1,
				height: 'variable'
			},
			swipe: {
					onTouch     : true,
					onMouse     : false
			},
			align: 'center',
			circular: true,
			pagination: '.hero-carousel__pager'
		});
	},


	/**
	 * Init the Mobile menu, with its search function and mobile menu button
	 */
	initMobileNav: function()
	{
		if (!$('#menu').length){ return false; }

		// Initialize MMenu Plugin
		var menu = $('#menu').mmenu(null, {
				clone: true
	        });

		// Open MMenu when mobile menu icon is clicked
		$('.navigation__trigger-mobile-nav').first().on('click touchstart', function(event){
			event.preventDefault();
			$('#mm-menu').mmenu({
				position: 'right',
				searchfield: {
					add: true,
	            	search: false
	            }
        	}).trigger('open.mm');
		});

		// Override the mmenu search function
		$("#mm-menu .mm-search input")
			.bind("change", function() {				
				if ($(this).val()){
					// do the search
				    $('.search__container form .search__input').val($(this).val());
				   	$('.search__container form').submit();
				    
				    // close the menu?
				    menu.mmenu().trigger( "close" );
				}			    
			}
		);
	},

	/**
	 * Adds a has-input class to the input / textarea when the element
	 * contains user input, this will help with styling material design 
	 * label
	 */
	initInputValueDetection: function()
	{
		if (!$('input, textarea').length){ return false; }

		$('input, textarea').each(function(){
			$(this).change(function(){
				if ($(this).val() !== ''){
					$(this).addClass('has-input');
				} else {
					$(this).removeClass('has-input');
				}
			});
			$(this).trigger('change');
		});
	},

	/**
	 * Init the search box, to make it show / hide based on if the
	 * search input is focused upon or not.
	 */
	initSearch: function()
	{
		if (!$('.search__input').length){ return false; }

		// Show search when input is focused
		$('.search__input').focus(function(){
			$('.search').addClass('active');
		});

		// Hide search when input loses focus - delay it by half a second
		// to allow the search submit to be pressed
		$('.search__input').blur(function(){
			setTimeout(function(){
				$('.search').removeClass('active');
			}, 300);
		});

		// Focus the search input when the search trigger is clicked upon
		$('.search__trigger').click(function(){
			$('.search__input').focus();
		});

		// Check empty submit to close the search
		$('.search__submit').click(function(e){
			if ($('.search').hasClass('active')){
				if (!$('.search__input').val()) {
					e.preventDefault();
					$('.search').removeClass('active');
				}
			} else {
				e.preventDefault();
				$('.search__input').focus();
			}
		});
	}
};

// Run the main js
$(function(){
	main.init();
});