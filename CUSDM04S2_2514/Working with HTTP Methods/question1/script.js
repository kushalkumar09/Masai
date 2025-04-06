const searchBtn = document.getElementById("searchBtn");
const category = document.getElementById("category");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const productList = document.getElementById("productList");
const status = document.getElementById("status");

searchBtn.addEventListener("click", async () => {
  const cat = category.value;
  const min = minPrice.value;
  const max = maxPrice.value;

  let url = `https://67f2a36bec56ec1a36d3bb51.mockapi.io/Products?`;

  const params = [];
  if (cat) params.push(`category=${cat}`);
  if (min) params.push(`min_price=${min}`);
  if (max) params.push(`max_price=${max}`);
  // params.push("sort=asc");

  url += params.join("&");

  productList.innerHTML = "";
  status.textContent = "Loading...";

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch products.");

    const data = await res.json();

    if (data.length === 0) {
      status.textContent = "No products found.";
      return;
    }

    status.textContent = "";
    data.forEach(product => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
      `;
      productList.appendChild(card);
    });
  } catch (error) {
    status.textContent = "Error loading products.";
    console.error(error);
  }
});
