const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortPrice = document.getElementById("sortPrice");
const productCount = document.getElementById("productCount");

let products = [];

document.addEventListener("DOMContentLoaded", () => {
  fetchProducts();
  fetchCategories();
});

// Fetch products from FakeStoreAPI
async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error("Failed to fetch products.");
    
    products = await response.json();
    displayProducts(products);
  } catch (error) {
    productGrid.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}

// Fetch categories from FakeStoreAPI
async function fetchCategories() {
  try {
    const response = await fetch("https://fakestoreapi.com/products/categories");
    if (!response.ok) throw new Error("Failed to fetch categories.");

    const categories = await response.json();
    categories.forEach(category => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;
      categoryFilter.appendChild(option);
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
}

// Display products in the grid
function displayProducts(filteredProducts) {
  productGrid.innerHTML = "";
  productCount.textContent = `Showing ${filteredProducts.length} products`;

  filteredProducts.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h4>${product.title}</h4>
      <p>Price: $${product.price}</p>
    `;

    productGrid.appendChild(productCard);
  });
}

// Filter & Sort based on user input
function filterAndSortProducts() {
  let filteredProducts = [...products];

  // Search by title
  const searchValue = searchInput.value.toLowerCase();
  filteredProducts = filteredProducts.filter(product => 
    product.title.toLowerCase().includes(searchValue)
  );

  // Filter by category
  const selectedCategory = categoryFilter.value;
  if (selectedCategory) {
    filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
  }

  // Sort by price
  const sortOrder = sortPrice.value;
  if (sortOrder === "asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  displayProducts(filteredProducts);
}

// Event listeners for search, category filter, and sorting
searchInput.addEventListener("input", filterAndSortProducts);
categoryFilter.addEventListener("change", filterAndSortProducts);
sortPrice.addEventListener("change", filterAndSortProducts);
