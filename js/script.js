const url = "https://rainydays.mjohank.no/wp-json/wc/store/products";
const productContainer = document.querySelector(".products");
const apiKey = "Ck_3ae2b35d310f3e36bcff1caba68be1d07ef8e01c";

async function getProducts() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();
    createHTML(getResults);
  } catch (error) {
    console.log(error);
  }
}
getProducts();

function createHTML(products) {
  products.forEach(function (product) {
    console.log(product);
    productContainer.innerHTML += `<div class="product">
      <h2>${product.name}</h2>
      <img src="${product.images[0].src}" alt="${product.name}">
      <h3>Price: ${product.prices.price}</h3>
      <p>${product.description}</p>
    </div>`;
  });
}
