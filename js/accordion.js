// Get all accordion items and buttons
const accordionItems = document.querySelectorAll('.accordion-item');
const accordionButtons = document.querySelectorAll('.accordion-button');

// Function to toggle the accordion items
function toggleAccordion(index) {
    accordionItems.forEach((item, i) => {
        if (i === index) {
            item.classList.toggle('open');
            const arrowIcon = item.querySelector('.arrow-icon');
            if (arrowIcon) {
                arrowIcon.classList.toggle('rotate');
            }
        } else {
            item.classList.remove('open');
            const arrowIcon = item.querySelector('.arrow-icon');
            if (arrowIcon) {
                arrowIcon.classList.remove('rotate');
            }
        }
    });
}

// Initially, open the first accordion item
accordionItems[0].classList.add('open');

// Add click event listeners to the buttons
accordionButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        toggleAccordion(index);
    });
});
