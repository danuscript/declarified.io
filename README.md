# declarified.io
This repo holds the source code and assets used to build https://declarified.io, a guide to functional programming in JavaScript.

## Libraries and Tools
declarified.io uses [highlight.js](https://github.com/highlightjs/highlight.js) for syntax highlighting in the example code snippets.

Client-side full text search was implemented using [flexsearch](https://github.com/nextapps-de/flexsearch), a JavaScript library.

A simple table of contents with active highlighting was built using JS's built-in [Intersection Observer API](https://github.com/highlightjs/highlight.js). The process is detailed [here](https://www.bram.us/2020/01/10/smooth-scrolling-sticky-scrollspy-navigation/), courtesy of Bramus Van Damme.

## Publishing and deployment
The website is generated and deployed directly from the files in this repository, using [GitHub Pages](https://pages.github.com).
