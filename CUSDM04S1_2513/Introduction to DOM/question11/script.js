// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // 1. Select h1 by id and change its text
    const heading = document.getElementById('main-heading');
    heading.textContent = "Welcome to the DOM World!";
    
    // 2. Select all p elements and add blue text class
    const paragraphs = document.getElementsByTagName('p');
    for (let p of paragraphs) {
        p.classList.add('js-blue-text');
    }
    
    // 3. Select first div with class container and add yellow background
    const firstContainer = document.querySelector('.container');
    firstContainer.classList.add('js-yellow-bg');
});