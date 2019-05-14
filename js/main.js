const mediaQuery = window.matchMedia('(max-width: 800px)');

const mouseEnterArea = document.querySelector('.mouse-enter');
const hamburger = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.nav-wrapper');
const container = document.querySelector('.container');
const contentSection = document.querySelector('.content');

if (mediaQuery.matches) {
  hamburger.addEventListener('click', toggleHamburger);

  function toggleHamburger(e) {
    hamburger.classList.toggle('toggle');
    nav.classList.toggle('show');
    contentSection.classList.toggle('push');
  }

} else {
  mouseEnterArea.addEventListener('mouseenter', showNav);
  
  function showNav(e) {
    nav.classList.toggle('show');
  }

  mouseEnterArea.addEventListener('mouseleave', hideNav);

  function hideNav(e) {
    if(nav.className.includes('show')) {
      nav.classList.remove('show');
    }
  }
}
