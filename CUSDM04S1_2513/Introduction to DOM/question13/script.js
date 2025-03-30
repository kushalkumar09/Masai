document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const colorInput = document.getElementById('colorInput');
    const textInput = document.getElementById('textInput');
    const changeBgBtn = document.getElementById('changeBgBtn');
    const updateTextBtn = document.getElementById('updateTextBtn');
    const targetDiv = document.getElementById('targetDiv');

    // Change background color function
    changeBgBtn.addEventListener('click', function() {
        const colorValue = colorInput.value.trim();
        
        if (!colorValue) {
            alert('Please enter a color name!');
            return;
        }
        
        // Create a temporary element to test the color
        const tempDiv = document.createElement('div');
        tempDiv.style.color = colorValue;
        const colorIsValid = tempDiv.style.color !== '';
        
        if (colorIsValid) {
            targetDiv.style.backgroundColor = colorValue;
        } else {
            alert('Invalid color name! Please enter a valid color (e.g., "red", "#FF5733", "rgb(255,0,0)")');
        }
    });

    // Update text content function
    updateTextBtn.addEventListener('click', function() {
        const newText = textInput.value.trim();
        
        if (!newText) {
            alert('Please enter some text!');
            return;
        }
        
        targetDiv.textContent = newText;
    });
});