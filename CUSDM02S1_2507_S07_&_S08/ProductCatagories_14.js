// You are given an array of strings representing product categories. Your task is to use reduce() to create an object that counts the occurrences of each category in the array.

// Steps:

// Use reduce() to group the categories and count how many times each category appears.
// Return the resulting object.
let productCatagories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]

const countCategories = productCatagories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
}, {});
const sortedCatagories = Object.entries(countCategories).sort((a,b)=>b[1]-a[1]);
console.log(sortedCatagories);