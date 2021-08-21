// initialise AOS animation features
AOS.init({
    duration: 3000
});

let element = document.querySelector('#projects-heading');

function isVisible(element) {
    // Get the size of the element and position in the viewport:
    const size = element.getBoundingClientRect();

    // Check if element is visible
    return size.top >= 0 && size.left >= 0 &&
        size.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        size.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

let i = 0;
const text = 'Projects';

function typeWord() {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWord, 400);
    }
}

let fired = false;

window.addEventListener('scroll', function () {
    if (isVisible(element) && fired === false) {
        typeWord();
        fired = true;
    }
}, false);