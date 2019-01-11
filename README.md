# Asana WebDev Take-Home Exercise
App made for Asana's web dev take-home exercise.
Simple application that displays an image grid of dogs up for adoption. Each image is clickable and expands into its full-size.

## Prerequisites
  - [Node](https://nodejs.org/en/download/)
  - [Yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable)

## Local setup
  ```
   $ git clone https://github.com/belcortes/asana-takehome.git
   $ yarn install
   $ yarn start
   Go to localhost:3000
  ```

## In production
[https://asana-ic.herokuapp.com/](https://asana-ic.herokuapp.com/)

## Stack
   - [React](https://reactjs.org/)
   - [Material UI](https://material-ui.com/) (for styling)

## Application structure
The bulk of the application is developed in the 'src' folder with the exception of the images.

- public
	- images - where the raw dog images live
- src
	- components
		- Header
		- ImageList - image grid is rendered, also logic for the infinite scrolling and modal open/close
   	   - ImageModal - simple component displaying the selected full-sized image
      - Footer
  - data
  - styles
  - App.js - where all the components are rendered

## Notes
I approached this as an exercise in scalable rapid prototyping. To get something of high quality shipped fast I decided to use React, Material UI, and Heroku. I have also used infinite scrolling for the image grid so the application doesn't load all the images at once - right now I'm re-adding all the dog photos as an example of how to handle more photos in the future.

## Asana Instructions

Let's pretend that Asana is actually a pet adoption agency. (Our SF office is so dog-friendly that it's not too far a stretch!) We need a web page that contains an image gallery of the pets we have available for adoption. We'd like you to build it.

To help you get started, we've included a few pre-built frontend components, a data file that you should use to populate the gallery, notes on intended user interactions, and guidance about how this gallery supports our efforts to get more pets adopted.

**What to submit:** We'd like to see your incremental work along with finished product, so please either ZIP and submit your version-controlled directory, or link us to your hosted repository.

**What technologies to use:** We'd like you to pick technologies that help us get clear signal on your frontend fundamentals. For that reason, we recommend that you stick with vanilla JS, CSS, and HTML -- but if there's a framework, pre- or post-processor, templating language, or build tooling that you think would make for a stronger submission, go for it.

We'll be grading on five areas:

- **Fidelity -** How well does it work? Does it do what the design calls for?
- **Robustness -** Does the page work across modern web browsers on desktop and mobile?
- **Maintainability -** Is the project written cleanly, organized clearly and documented well?
- **Performance -** Is the page built to load fast and rank well in search engines?
- **Your choice!** Let us know which one (just one!) of these criteria we should use to evaluate your submission:
  - **Design Focus:** How slick and polished are the page's UI and UX?
  - **Growth Focus:** How did the questions from the team trying to boost adoption influence your technical choices?
  - **Tooling Focus:** How did your use of build tools help you ship something high-quality faster?

### Guidance from the design team

"These images should be displayed on the page as a set of thumbnails; clicking on a thumbnail should display a full-sized image to the user."

"Full-size photos should be able to be closed, and the user should be returned to the thumbnail gallery."

### Requirements from the adoption team

"Starting next month, we'll be partnering with a shelter that has 2000 pets available for adoption. We need this page to be able to handle that many listings."

"Most people find out about us from internet searches. We need this page to appear towards the top of search results."
