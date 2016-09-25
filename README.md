#=================================
# READ ME
#=================================

This is the Get Started's Front End Developer Technical Test done by Allen Chen. 
The repo can be found on https://github.com/chsi022/get-started.git


#=================================
# Progress report
#=================================

The following elements are finished with responsive support
- Header / navigation
- Search
- Hero carousel
- Intro text area
- Services listing

The following elements still need to be done
- Blog carousel
- Footer

The following areas should be refined 
- Add in task running (grunt) to combine and minify JS / CSS files
- Proper cross browser testing still needs to be carried out
- Strip out un-needed bootstrap scripts / favion / fonts that came with the HTML5 Initialzr boilerplate
- The cutup is not done pixel perfect, need to check and refine implementation


#=================================
# Tools / Plugins used
#=================================

1. 
SASS is used for CSS precompilation. SASS must be installed if changes to the styles are to be carried out. Please find the installation guide here http://sass-lang.com/install

2.
The JS plugin MMenu (http://mmenu.frebsite.nl/) is used for mobile navigation. This is one of the mobile menu plugin that I am familiar with and it offers a wide range of options for customisation.

3. 
The JS plugin carouFredSel (https://github.com/gilbitron/carouFredSel) is used for the hero carousel, and is fully capable to be used to implement the blog carousel. Again, this is the carousel plugin that I am most familiar with, hance it was pick for this project.

4.
This project was created with a HTML5 boilerplate from Initializr (https://html5boilerplate.com/). It was picked to quickly get the project up and running. It was customised with Modernizr, jquery and Twitter bootstrap for responsive support.

5.
The SASS mixin library bourbon (http://bourbon.io/) and css-reset-and-normalize-sass (https://www.npmjs.com/package/css-reset-and-normalize-sass) was added to the project to kick off the styling work. There is no special reasoning to why these 2 were picked over the others - I simply needed some basic mixins and style resets and these came up first in my goole search.
