var marquee = document.querySelector('.marq marquee');
var images = marquee.querySelectorAll('img');
var currentImage = 0;
var animationInterval;

function animateMarquee() {
  marquee.style.marginLeft = -currentImage * 1100 + 'px';
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
}

function startAnimation() {
  animationInterval = setInterval(animateMarquee, 3000);
}

function stopAnimation() {
  clearInterval(animationInterval);
}

marquee.addEventListener('mouseover', stopAnimation);
marquee.addEventListener('mouseout', startAnimation);

startAnimation();
document.addEventListener("DOMContentLoaded", function() {
    const blastElement = document.querySelector(".blast");
    blastElement.classList.add("animate");
  });
// Get the hamburger menu and navigation links
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

// Add an event listener to the hamburger menu
hamburgerMenu.addEventListener('click', () => {
  // Toggle the show class on the navigation links
  navLinks.classList.toggle('show');
});