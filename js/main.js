const mouseEnterArea = document.querySelector('.mouse-enter');

mouseEnterArea.addEventListener('mouseenter', showNav);

function showNav(e) {
  const nav = document.querySelector('.nav-wrapper');
  nav.classList.toggle('show');
}