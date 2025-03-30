let currentUser = null;

// Login function
function login() {
    const username = document.getElementById("username").value.trim();
    if (!username) {
        alert("Please enter a valid username.");
        return;
    }

    currentUser = username;
    document.getElementById("user-display").innerText = username;
    document.getElementById("login-section").style.display = "none";
    document.getElementById("cart-section").style.display = "block";

    loadCart();
}

// Logout function
function logout() {
    currentUser = null;
    document.getElementById("login-section").style.display = "block";
    document.getElementById("cart-section").style.display = "none";
}

// Load user's cart from localStorage
function loadCart() {
    const cartData = JSON.parse(localStorage.getItem("cart")) || {};
    const userCart = cartData[currentUser] || [];

    renderCart(userCart);
}

// Render cart items dynamically
function renderCart(cart) {
    const cartBody = document.getElementById("cart-body");
    cartBody.innerHTML = "";

    let totalCost = 0;

    cart.forEach((item, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.itemName}</td>
            <td>$${item.price}</td>
            <td>
                <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
            </td>
            <td>$${item.price * item.quantity}</td>
            <td>
                <button onclick="removeItem(${index})">Remove</button>
            </td>
        `;

        cartBody.appendChild(row);
        totalCost += item.price * item.quantity;
    });

    document.getElementById("total-cost").innerText = totalCost;
}

// Add item to the cart
function addItem() {
    if (!currentUser) return;

    const itemName = document.getElementById("item-name").value.trim();
    const itemPrice = parseFloat(document.getElementById("item-price").value);
    const itemQuantity = parseInt(document.getElementById("item-quantity").value);

    if (!itemName || isNaN(itemPrice) || isNaN(itemQuantity) || itemQuantity <= 0) {
        alert("Please enter valid item details.");
        return;
    }

    const cartData = JSON.parse(localStorage.getItem("cart")) || {};
    cartData[currentUser] = cartData[currentUser] || [];

    cartData[currentUser].push({
        itemName,
        price: itemPrice,
        quantity: itemQuantity
    });

    localStorage.setItem("cart", JSON.stringify(cartData));
    loadCart();

    document.getElementById("item-name").value = "";
    document.getElementById("item-price").value = "";
    document.getElementById("item-quantity").value = "";
}

// Update item quantity
function updateQuantity(index, newQuantity) {
    if (!currentUser) return;

    newQuantity = parseInt(newQuantity);
    if (newQuantity <= 0) return;

    const cartData = JSON.parse(localStorage.getItem("cart"));
    cartData[currentUser][index].quantity = newQuantity;

    localStorage.setItem("cart", JSON.stringify(cartData));
    loadCart();
}

// Remove item from cart
function removeItem(index) {
    if (!currentUser) return;

    const cartData = JSON.parse(localStorage.getItem("cart"));
    cartData[currentUser].splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cartData));
    loadCart();
}
