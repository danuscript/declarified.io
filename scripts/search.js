// eslint-disable-next-line import/extensions
import Index from './src/index.js';

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

const options = {
  charset: 'latin:extra',
  preset: 'match',
  tokenize: 'strict',
  cache: false,
};

const index = new Index(options);

const pages = {
  0: {
    id: 0,
    title: 'Introduction',
    link: 'chapters/Introduction.html',
    type: 'Sections',
    content: `Introduction

    What is this guide about? 
    
    A callback is a function that gets passed into another function as an argument, and then invoked inside that outer function’s body. A higher-order function either returns a function, or accepts a callback function as an argument. These two concepts seem relatively simple on the surface, but they can be the source of a lot of confusion for those who are new to programming. This guide is designed to cut through that confusion, by providing clear explanations and easy-to-follow JavaScript code walkthroughs for each problem in CSX’s Callbacks & Higher Order Functions module. 
    
    Who is this guide for? 
    
    CSX is an online platform and community where people learn the basics of JavaScript, usually to prepare for entrance into the Codesmith coding bootcamp. Many people in this community have shared that while they’ve understood the first few sections of CSX material, the transition into the Callbacks and Higher Order Functions module has left them feeling “discouraged”, “struggling”, “confused”, or “frustrated”. The difficulty spike is very real, but these concepts can be broken down into just a few simple patterns. This guide is not affiliated with Codesmith or CSX; it’s just here to show you that you can get through these challenges with full understanding!`,
  },
  1: {
    id: 3,
    title: 'pluralize',
    link: 'chapters/pluralize.html',
    type: 'Sections',
    content: `pluralize
  
    Challenge Overview 
    
    The first challenge in the Callbacks and Higher Order functions module is called pluralize, and the prompt is as follows: 
    Create a function pluralize that takes an array of strings as input and returns a new array with an "s" added to the end of each string in the input array. For example, if the string "carrot" is in the input array, it should become the string "carrots" in the output array. 
    
    The body of the pluralize function should employ a single for loop that pluralizes each string in the input array. 
     
    Example: 
    Input 
    array = ["dog", "cat", "tree frog"] 
    Output 
    map(array) = ["dogs", "cats", "tree frogs"] 
    This challenge’s prompt is very straightforward and we won’t be using any higher order functions to solve it. While it may seem basic, it’s still an important starting point because we’ll be applying the process of deriving a solution to all of the remaining challenges as well. Let’s start by breaking down some of the language used in this prompt so we can see what clues it gives us in terms of how to write a function that solves it. 
    
    Solution Walkthrough 
    
    First, we’ll define our input and output. It’s clear that the input is an array. The important part here is that our function “returns a new array”; we’re returning something that did not previously exist, so we’ll have to initialize it. 
    
    The next key phrase is that this function is making a change to “each” string in the input array. Anytime we’re doing something to some or all of the elements in a collection, we’ll generally need some form of iteration to accomplish this. 
    
    Lastly, we see that before we can push each element of the input into our output array, we’ll need to add another string to it: 's'. This will involve string concatenation. We'll then add each concatenated string to our output array, and return it after we're done. 
    
    Putting this all together, here's the pseudocode for our function: 
    
    pluralize(inputArr): 
    initialize empty array outputArr 
    for each string of inputArr 
        concatenate string with 's' 
        push concatenated string into outputArr 
    return outputArr 
    
    Let's go through this pseudocode step by step, using the example array from CSX as our input. 
    
    Coding Demonstration 
    
    const pluralize = (inputArr) => { 
      const outputArr = []; 
      
      for (let i = 0; i < inputArr.length; i += 1) { 
          outputArr.push( inputArr ); 
      } 
      
      return outputArr; 
    }; 
    
    const animals = ['dog', 'cat', 'tree frog']; 
    console.log(pluralize(animals)); // -> ['dogs', 'cats', 'tree frogs']`,
  },
};

Object.entries(pages).forEach(([id, object]) => index.add(id, object.content));

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

const searchTerm = params.q;
const searchTitle = document.querySelector('.search-title');
const searchResults = document.querySelector('#search-results');
searchTitle.innerHTML = `Search results for: ${searchTerm}`;

const pageMatchesSeparated = (content, inputTerm) => {
  const lowerCaseContent = content.toLowerCase();
  const terms = inputTerm.split(' ').map((word) => word.toLowerCase()).filter((word) => word !== '');
  const matches = [];
  let idx = 0;
  for (let i = 0; i < 3; i += 1) {
    if (i >= terms.length) break;
    idx = lowerCaseContent.indexOf(terms[i], idx);
    if (idx === -1) return matches;
    matches.push(`...${content.slice(Math.max(0, idx - 40), idx + 40 + terms[i].length)}...`);
  }
  return matches;
};

const pageMatches = (content, inputTerm) => {
  const lowerCaseContent = content.toLowerCase();
  const term = inputTerm.toLowerCase();
  const matches = [];
  if (lowerCaseContent.indexOf(term) === -1) return pageMatchesSeparated(content, inputTerm);
  let idx = 0;
  for (let i = 0; i < 3; i += 1) {
    idx = lowerCaseContent.indexOf(term, idx + term.length);
    if (idx === -1) break;
    matches.push(`...${content.slice(Math.max(0, idx - 40), idx + 40 + term.length)}...`);
  }
  return matches;
};

const populateSearch = (query) => {
  const ids = index.search(query);
  if (ids.length === 0) {
    searchResults.innerHTML = `Sorry, no search results were found for "${query}".<br>\n<br>\n
Try again with different spelling, or a different search term!`;
  } else {
    ids.reverse().forEach((id) => {
      const searchResult = document.createElement('h2');
      const searchLink = document.createElement('a');
      const resultTitle = document.createTextNode(`• ${pages[id].title}`);
      searchLink.appendChild(resultTitle);
      searchLink.href = pages[id].link;
      searchLink.title = `${pages[id].section}/${pages[id].title}`;
      searchResult.appendChild(searchLink);
      searchResults.parentNode.insertBefore(searchResult, searchResults.nextSibling);

      const matches = pageMatches(pages[id].content, query);
      matches.reverse().forEach((match) => {
        const matchTextEl = document.createElement('p');
        const matchText = document.createTextNode(match);
        matchTextEl.appendChild(matchText);
        console.log(searchResult.parentNode);
        searchResult.parentNode.insertBefore(matchTextEl, searchResult.nextSibling);
      });
    });
  }
};

populateSearch(searchTerm);
