// menus

const moreOptionsButton = document.querySelector('#more-options-button');
const optionsMenu = document.querySelector('#options-menu');
const closeOptionsButton = document.querySelector('#close-options-button');

const closeMoreOptionsMenu = () => {
  moreOptionsButton.style.display = 'block';
  closeOptionsButton.style.display = 'none';
  optionsMenu.style.paddingTop = '0px';
  optionsMenu.style.paddingBottom = '0px';
  optionsMenu.style.height = '0px';
};

const openMoreOptionsMenu = () => {
  moreOptionsButton.style.display = 'none';
  closeOptionsButton.style.display = 'block';
  optionsMenu.style.paddingTop = '25px';
  optionsMenu.style.paddingBottom = '25px';
  optionsMenu.style.height = '160px';
};

moreOptionsButton.addEventListener('click', openMoreOptionsMenu);
closeOptionsButton.addEventListener('click', closeMoreOptionsMenu);

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
