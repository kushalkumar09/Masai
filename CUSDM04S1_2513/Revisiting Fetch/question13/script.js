const productContainer = document.getElementById("product-container");
const errorMessage = document.getElementById("error-message");

async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const products = await response.json();
    displayProducts(products);

  } catch (error) {
    errorMessage.textContent = "Failed to fetch products. Please try again later.";
    console.error(error);
  }
}

function displayProducts(products) {
  productContainer.innerHTML = "";

  products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>Price: $${product.price}</p>
      <button onclick="viewDetails('${product.title}', '${product.price}')">View Details</button>
    `;

    productContainer.appendChild(productCard);
  });
}

function viewDetails(title, price) {
  alert(`Product: ${title}\nPrice: $${price}`);
}

fetchProducts();
