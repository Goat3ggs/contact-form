# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./design/desktop-preview.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- [Live Site URL: ](https://goat3ggs.github.io/contact-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

When creating the form we should keep in mind that every item added should have its own div for better manipulation and styling.
```html
<form>
  <div class="form-item">
    <div class="item1">...</div> 
    <div class="item2">...</div> 
  </div>
</form>
```
If we want to display a message directly on the page after an action is made we have to keep it outside every parent element:
```html
<form>
  <div>...</div>
</form>
<div class="success-message">...</div>
```
Use a font that is downloaded using:
```css
@font-face {
  font-family: "name";
  src: url(/path);
}
```
Keep in mind that a component is usually centered on the page with:
```css
body {
  min-height: 100vh;
  display: grid;
  place-content: center;
}
```
Check an input fiel for special characters function:
  - use "let" instead of "const" to be able to change the content later.
  - in the FirstName/ LastName validation section implement the function we created
```js
let firstName = ...;
let lastName = ...;

if(firstName === "") {
  .
  .
} else if (containsSpecialCharacters(firstName)) {
  /* and here we will select with the document querySelector both the id of the first name element and the form-alert, and instead of the default text we will change it with another*/
}

function containsSpecialCharacters(str) {
    const specialCharRegex = /[^\w\s]/gi;
    return specialCharRegex.test(str);
}
```

### Useful resources

- [Youtube](https://youtu.be/B8OOjAcOVFg?si=BYWZ-BR8lxiHnIKP) - This helped me to complete the challenge
- [Reload the page after submitting](https://www.freecodecamp.org/news/javascript-refresh-page-how-to-reload-a-page-in-js/#:~:text=Another%20way%20to%20refresh%20a,page%20with%20the%20new%20content.)

## Author

- Frontend Mentor - [@Goat3ggs](https://www.frontendmentor.io/profile/Goat3ggs)
- LinkedIn - [Grigore Stefania](https://www.linkedin.com/in/grigore-stefania-029b4a261/)