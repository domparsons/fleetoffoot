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
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 1s ease forwards ${index / 10}s`;
			}
		});
	});
}

navSlide();

(function () {
    var track = document.getElementById('photoCarouselTrack');
    if (!track) return;

    var slides = track.querySelectorAll('.photo-carousel-img');
    var total = slides.length;
    var current = 0;
    var timer;

    function goTo(index) {
        current = (index + total) % total;
        track.style.transform = 'translateX(-' + (current * 100) + '%)';
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function startTimer() {
        timer = setInterval(next, 4000);
    }

    function resetTimer() {
        clearInterval(timer);
        startTimer();
    }

    document.getElementById('photoCarouselPrev').addEventListener('click', function () {
        prev();
        resetTimer();
    });

    document.getElementById('photoCarouselNext').addEventListener('click', function () {
        next();
        resetTimer();
    });

    startTimer();
}());