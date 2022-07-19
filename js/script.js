window.addEventListener("DOMContentLoaded", () => {
	const header = document.querySelector(".header");

	//changing header color after scroll
	window.addEventListener("scroll", () => {
		if (window.scrollY > 200) {
			header.style.background = "#1d282d";
		} else {
			header.style.background = "rgba(255, 255, 255, 0.05)";
		}
	});

	//mobile hamburger menu
	const toggleNavButton = document.getElementById('toggle-nav');
	const navContainer = document.getElementById('nav-container');
	const navItems = [...document.querySelectorAll('.nav-item')];
	const toggleButtonIcon = document.querySelector('#toggle-nav i')

	let mobileMenuActive = false;
	const toggleNav = () => {
		
		if (!mobileMenuActive) {
			toggleNavButton.classList.add('active');
			navContainer.classList.add('active');
			toggleButtonIcon.classList.replace('fa-bars', 'fa-x')			
		} else {
			toggleNavButton.classList.remove('active');
			navContainer.classList.remove('active');
			toggleButtonIcon.classList.replace('fa-x', 'fa-bars')			
		}
		mobileMenuActive = !mobileMenuActive;
	}
	
	toggleNavButton.addEventListener('click', toggleNav);
	navItems.forEach(navItem => {
		navItem.addEventListener('click', toggleNav);
	})

	//show-slider-thumbs
	const showSliderThumbsButton = document.getElementById('show-slider-thumbs');
	const sliderThumbs = document.querySelector('.gallery-thumbs');
	showSliderThumbsButton.addEventListener('click', () => {
		if (sliderThumbs.classList.contains('active')) {sliderThumbs.classList.remove('active'); showSliderThumbsButton.classList.remove('active')}
		else {sliderThumbs.classList.add('active');showSliderThumbsButton.classList.add('active')}
	})

});
