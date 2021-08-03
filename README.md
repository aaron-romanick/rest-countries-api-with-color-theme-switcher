# Frontend Mentor - REST Countries API with Color Theme Switcher Solution (Using Vue 3)

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).

## Table of contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)

## <a name="overview"></a>Overview

### <a name="the-challenge"></a>The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### <a name="screenshot"></a>Screenshot

![](./screenshot.jpg)

### <a name="links"></a>Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://nisenihonjin.github.io/rest-countries-api-with-color-theme-switcher/](https://nisenihonjin.github.io/rest-countries-api-with-color-theme-switcher/)

## <a name="my-process"></a>My Process

### <a name="built-with"></a>Built With

- Semantic HTML5 markup
- CSS Custom Properties
- CSS Flexbox & Grid
- CSS Block Element Modifier (BEM) Naming Conventions
- Mobile-first Workflow
- [Vue 3](https://v3.vuejs.org/) - A progressive framework for building user interfaces in JavaScript
- [VueUse](https://vueuse.org/) - A collection of essential Vue Composition utilities 
- [REST Countries](https://restcountries.eu/) - A RESTful API to get information about countries
- [Heroicons](https://heroicons.dev/) / [Ionicons](https://ionic.io/ionicons) - Free SVG icons.

### <a name="what-i-learned"></a>What I Learned

This was my first project with Vue 3 and its Composition API. I had come from a background using Vue 2, so this was a fairly different experience from using the old Options API that I was used to. Getting my head around the new concepts of reactivity was challenging, and I still haven't fully comprehended it. One part in particular that I'm still not satisfied with is my handling of reactivity between switching countries. I settled on reloading the country details component as a workaround, but I would like to be able to figure out how to just dynamically switch the country's data without reloading the component itself. One thing I'm proud of figuring out is the ability to use Vue 3's new way of reusing and sharing code to natively create a store for data and functionality (much like Vue 2's Vuex).

I continued working on my understanding of CSS Custom Components, particularily in making the dark mode styles. Instead of changing individual selector styles in multiple places within the stylesheets, I went with simply altering the values of their respective variables in one spot to increase code maintainability.

While it's a small part of the app, I also implemented JavaScripts `IntersectionObserver` API. On the main page, loading 200+ countries all at once tended to lag out the browser, so to take off some of that load, I only display a few countries at first and dynamically load more as the user scrolls down the page.

### <a name="continued-development"></a>Continued Development

I want to get a further understanding of the workings of reactivity in Vue 3 using the Composition API. While I didn't use it in this project, I want to start using render functions utilizing the Vue 3 framework as well.

### <a name="useful-resources"></a>Useful Resources

- [Vue 3 Guide](https://v3.vuejs.org/guide/introduction.html) - This was great for understanding the inner workings of Vue, the Composition API, reactivity, etc. I couldn't have done this project without it.
- [Heroicons](https://heroicons.dev/) - A great repository for SVG icons.
- [Ionicons](https://ionic.io/ionicons) - Another great repository for SVG icons.

## <a name="author"></a>Author

- Website - [Aaron Romanick](https://www.aaronromanick.com)
- Frontend Mentor - [@nisenihonjin](https://www.frontendmentor.io/profile/nisenihonjin)