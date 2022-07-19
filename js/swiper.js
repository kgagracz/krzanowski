const swiper = new Swiper(".swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: true,

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	slidesPerView: 1,
	breakpoints: {
		320: {
			slidesPerView: 2
		}
	}
});

const calendarSwiper = new Swiper(".calendar-swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: true,
	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
	},
	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	controller: true,
	slidesPerView: 2,
	breakpoints: {
		320: {
			slidesPerView: 2
		}
	}
});

const galleryTop = new Swiper('.gallery-top', {
	spaceBetween: 10,
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	loop: true,
	loopedSlides: 4,
	slidesPerView: 1
});

const galleryThumbs = new Swiper('.gallery-thumbs', {
	spaceBetween: 10,
	centeredSlides: true,
	slidesPerView: 'auto',
	touchRatio: 0.2,
	slideToClickedSlide: true,
	loop: true,
	loopedSlides: 4
});

galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;