$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.js-tab-trigger').on('click', function () {
		var tabName = $(this).data('tab'),
			tab = $('.js-tab-content[data-tab="' + tabName + '"]');

		$('.js-tab-trigger.active').removeClass('active');
		$(this).addClass('active');
		$('.review__slider,.review__slider2,.review__slider3,.review__slider4,.review__slider5,.review__slider6').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 975,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 670,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});
		$('.js-tab-content.active').removeClass('active');
		tab.addClass('active');
	});
	$('.review__slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 975,
				settings: {
					slidesToShow: 2,
					arrows: true,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 670,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
	$('.partners__slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 975,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 670,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	new WOW().init();
	$('.js-tab-trigger-2').on('click', function() {
		var tabName = $(this).data('tab'),
		   tab = $('.js-tab-content-2[data-tab="'+tabName+'"]');
		
		$('.js-tab-trigger-2.active').removeClass('active');
		$(this).addClass('active');
		
		
		$('.js-tab-content-2.active').removeClass('active');
		tab.addClass('active');
	 });
});