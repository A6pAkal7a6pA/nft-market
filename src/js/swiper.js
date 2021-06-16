import Swiper from "swiper/bundle";

new Swiper(".main-slider", {
	loop: false,
	speed: 1000,
	effect: 'coverflow',
	slidesPerView: "auto",
	initialSlide: 0,
	centeredSlides: false,
	slideToClickedSlide: true,
	coverflowEffect: {
		rotate: 0,
		stretch: 200,
		depth: 100,
		modifier: 2,
		slideShadows: false,
	},	
	pagination: {
		el: '.main-slider__dots',
		clickable: true,
	},
	breakpoints: {
		320: {
			effect: "slide",
			slidesPerView: 1.5,
			spaceBetween: 10,
		},
		500: {
			loop: false,
			speed: 1000,
			effect: 'coverflow',
			slidesPerView: "auto",
			initialSlide: 0,
			centeredSlides: false,
			coverflowEffect: {
				rotate: 0,
				stretch: 200,
				depth: 100,
				modifier: 2,
				slideShadows: false,
			},	
			pagination: {
				el: '.main-slider__dots',
				clickable: true,
			},
		},
	}

})
