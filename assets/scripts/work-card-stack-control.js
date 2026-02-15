// Get all cards and buttons
const cards = document.querySelectorAll('.card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalCards = cards.length;

function updateCardPositions() {
    cards.forEach((card, index) => {
        // Calculating position relative to currentIndex
        let position = (index - currentIndex + totalCards) % totalCards; // Fixed wrap-around logic
        
        // Remove all position classes
        card.classList.remove('position-0', 'position-1', 'position-2', 'position-3', 'position-4', 'position-5');
        
        // Add the required position class
        if (position <= 5) {
            card.classList.add(`position-${position}`);
        } else {
            card.classList.add('position-5'); // Hiding cards beyond pos. 4
        }
    });
}

// Next button - move to next card
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalCards;
    updateCardPositions();
});

// Previous button - move to previous card
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    updateCardPositions();
});

// Keyboard navigation (should be fixed)
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'd') {  // Use || instead of comma
        nextBtn.click();
    } else if (e.key === 'ArrowLeft' || e.key === 'a') {  // Use || instead of comma
        prevBtn.click();
    }
});

updateCardPositions();