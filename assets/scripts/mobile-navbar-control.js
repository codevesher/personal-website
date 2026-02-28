function initMobileMenu() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const sidebar = document.querySelector('.side-bar-menu');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');
    const sidebarClose = document.querySelector('.sidebar-close');
    const sidebarLinks = document.querySelectorAll('.side-bar-media');
    const homeSection = document.querySelector('#home');

    if (!hamburgerBtn) return;

    function checkHomeSection() {
        if (window.scrollY < homeSection.offsetHeight - 100) {
            document.body.classList.add('at-top');
        } else {
            document.body.classList.remove('at-top');
        }
    }

    window.addEventListener('scroll', checkHomeSection);
    checkHomeSection();


    hamburgerBtn.addEventListener('click', () => {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
        hamburgerBtn.classList.add('active');
        document.body.style.overflow = 'hidden';
    });


    function closeSidebar() {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        hamburgerBtn.classList.remove('active');
        document.body.style.overflow = '';
    }


    if (sidebarClose) {
        sidebarClose.addEventListener('click', closeSidebar);
    }


    sidebarOverlay.addEventListener('click', closeSidebar);

    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('active')) {
            closeSidebar();
        }
    });
}

document.addEventListener('DOMContentLoaded', initMobileMenu);