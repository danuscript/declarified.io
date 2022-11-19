// menus

const moreOptionsButton = document.querySelector('#more-options-button');
const optionsMenu = document.querySelector('#options-menu');
const closeOptionsButton = document.querySelector('#close-options-button');
const hamburgerMenuButton = document.querySelector('#hamburger-menu-button');
const hamburgerMenu = document.querySelector('#hamburger-menu');
const closeHamburgerMenuButton = document.querySelector('#close-hamburger-menu-button');

let hamburgerMenuOpen = false;

const closeMoreOptionsMenu = () => {
  moreOptionsButton.style.display = 'block';
  closeOptionsButton.style.display = 'none';
  optionsMenu.style.paddingTop = '0px';
  optionsMenu.style.paddingBottom = '0px';
  optionsMenu.style.height = '0px';
};

const openHamburgerMenu = () => {
  closeMoreOptionsMenu();
  hamburgerMenu.style.width = '100%';
  hamburgerMenu.style.textIndent = '0px';
  document.body.style.overflow = 'hidden';
  hamburgerMenuButton.style.display = 'none';
  closeHamburgerMenuButton.style.display = 'block';
  hamburgerMenuOpen = true;
};

const closeHamburgerMenu = () => {
  hamburgerMenu.style.width = '0%';
  hamburgerMenu.style.textIndent = '-330px';
  document.body.style.overflow = 'visible';
  hamburgerMenuButton.style.display = 'block';
  closeHamburgerMenuButton.style.display = 'none';
  hamburgerMenuOpen = false;
};
const openMoreOptionsMenu = () => {
  if (hamburgerMenuOpen) {
    closeHamburgerMenu();
  }
  moreOptionsButton.style.display = 'none';
  closeOptionsButton.style.display = 'block';
  optionsMenu.style.paddingTop = '25px';
  optionsMenu.style.paddingBottom = '25px';
  optionsMenu.style.height = '160px';
};

moreOptionsButton.addEventListener('click', openMoreOptionsMenu);
closeOptionsButton.addEventListener('click', closeMoreOptionsMenu);
hamburgerMenuButton.addEventListener('click', openHamburgerMenu);
closeHamburgerMenuButton.addEventListener('click', closeHamburgerMenu);

const hamburgerMenuLinks = document.querySelectorAll('.hamburger-menu-link');
hamburgerMenuLinks.forEach((link) => { link.addEventListener('click', closeHamburgerMenu); });

// searchbox submit

const searchBox = document.querySelector('.search-bar');
const menuSearchBox = document.querySelector('.menu-search-bar');

searchBox.onsubmit = (event) => {
  event.preventDefault();
  const searchTerm = document.querySelector('.search-term').value.replaceAll('?', '');
  window.open(`../search.html?q=${encodeURI(searchTerm)}`, '_top');
};

menuSearchBox.onsubmit = (event) => {
  event.preventDefault();
  const searchTerm = document.querySelector('.menu-search-term').value.replaceAll('?', '');
  window.open(`../search.html?q=${encodeURI(searchTerm)}`, '_top');
};
