const topNav = document.querySelector('.top-bar-menu');
const sideNav = document.querySelector('.side-bar-menu');
const homeSection = document.querySelector('#home');

function handleScroll() {
	const scrollPosition = window.scrollY;
	const threshold = 100;
	
	if (scrollPosition > threshold) {
		topNav.classList.add('hidden');
		sideNav.classList.add('visible');
	} else {    
		topNav.classList.remove('hidden');
		sideNav.classList.remove('visible');
	}
}

window.addEventListener('scroll', handleScroll);

handleScroll();
