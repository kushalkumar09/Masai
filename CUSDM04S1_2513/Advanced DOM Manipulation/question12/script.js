document.addEventListener('DOMContentLoaded', function() {
    // Get the second list item
    const item2 = document.getElementById('item2');
    
    // Add click event listener
    item2.addEventListener('click', function() {
        // 1. Display parent node's text content in alert
        const parentText = this.parentNode.textContent.trim();
        alert(`Parent node content:\n${parentText}`);
        
        // 2. Log siblings to console
        const previousSibling = this.previousElementSibling;
        const nextSibling = this.nextElementSibling;
        
        console.log('Previous sibling text:', previousSibling ? previousSibling.textContent : 'None');
        console.log('Next sibling text:', nextSibling ? nextSibling.textContent : 'None');
    });
});