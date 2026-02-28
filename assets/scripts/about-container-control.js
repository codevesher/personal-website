const toggle = document.getElementById('modeToggle');
const workContent = document.querySelector('.work-content');
const personalContent = document.querySelector('.personal-content');

toggle.addEventListener('change', function() {
    if (this.checked) {
        // Switching to Personal mode (fading out work content first)
        workContent.classList.add('hiding');
        
        // After fade out completes, showing personal content
        setTimeout(() => {
            personalContent.classList.add('active');
        }, 600);
        
    } else {
        // Switching to Work mode (fading out personal content first)
        personalContent.classList.remove('active');
        
        // After fade out completes, show work content
        setTimeout(() => {
            workContent.classList.remove('hiding');
        }, 600);
    }
});


// Transition time is 600ms


