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

// table-of-contents functionality

const tocLinks = document.querySelectorAll('.toc-link');

tocLinks.forEach((link) => {
  const id = link.getAttribute('id');
  link.addEventListener('click', () => { window.location.href = `#${id.slice(0, -7)}`; });
});

const options = {
  rootMargin: '-175px 0px -175px 0px',
  threshold: 0,
};

window.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0) {
        document.querySelector(`#${id}-link-left`).parentElement.classList.add('active');
        document.querySelector(`#${id}-link-right`).parentElement.classList.add('active');
      } else {
        document.querySelector(`#${id}-link-left`).parentElement.classList.remove('active');
        document.querySelector(`#${id}-link-right`).parentElement.classList.remove('active');
      }
    });
  }, options);

  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
  });
});

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

// slideshow script

let slideIndex = 1;
const nextButton = document.querySelector('.next-slide');
const prevButton = document.querySelector('.prev-slide');

const showSlides = (n) => {
  let i;
  const slides = document.getElementsByClassName('slides');
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
};

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

nextButton.addEventListener('click', () => { plusSlides(1); });
prevButton.addEventListener('click', () => { plusSlides(-1); });
