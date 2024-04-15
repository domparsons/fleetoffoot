const navSlide = ()=> {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	const body = document.querySelector('body');

	
	burger.addEventListener('click',()=> {
		//toggle nav
		nav.classList.toggle('nav-active');
		//no vertical scroll
		body.classList.toggle('vertical-scroll');
		//burger animation
		burger.classList.toggle('toggle');

		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = ' ';
			} else {
				link.style.animation = `navLinkFade 1s ease forwards ${index / 10}s`;
			}
		});
	});
}

navSlide();