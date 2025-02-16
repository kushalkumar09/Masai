let products = [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }]

const processProducts = products.map((product)=>product);
processProducts.forEach((product)=>{
    return (product.price>50)?console.log(`${product.name}  is above $50`):console.log(`${product.name} is below $50`);
})
