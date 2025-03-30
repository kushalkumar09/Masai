document.addEventListener('DOMContentLoaded', function() {
    const itemList = document.querySelector('#itemList');
    const addButton = document.getElementById('addButton');
    let itemCount = 3; // Starting count (we have 3 initial items)

    addButton.addEventListener('click', function() {
        itemCount++;
        const newItem = document.createElement('li');
        newItem.textContent = `New Item ${itemCount - 3}`;
        
        // Apply styles based on item count
        if (itemCount % 2 === 1) {
            newItem.classList.add('odd-item');
        } else {
            newItem.classList.add('even-item');
        }
        
        itemList.appendChild(newItem);
    });

    // Style initial items
    const initialItems = document.querySelectorAll('#itemList li');
    initialItems.forEach((item, index) => {
        if ((index + 1) % 2 === 1) {
            item.classList.add('odd-item');
        } else {
            item.classList.add('even-item');
        }
    });
});