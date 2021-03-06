// initialise AOS animation features
AOS.init({
    duration: 3000
});

let fired = false;
let element = document.querySelector('#projects-heading');

window.addEventListener('scroll', function () {
    if (isVisible(element) && fired === false && window.innerWidth > 700) {
        element.innerHTML="";
        typeWord();
        fired = true;
    }
}, false);

// Check if element is visible
function isVisible(element) {
    // Get the size of the element and position in the viewport
    const size = element.getBoundingClientRect();

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

const projectsButton = document.getElementById('projects-button')
const skillsButton = document.getElementById('skills-button')

projectsButton.addEventListener('click', scroll);
skillsButton.addEventListener('click', scroll);

function scroll(event){

    if(event.target.id === 'skills-button'){
        document.getElementById('skills-heading').scrollIntoView({behavior: 'smooth', block:'start'});
    }
    else{
        document.getElementById('projects-alert').scrollIntoView({behavior: 'smooth', block:'start'});
    }

}
