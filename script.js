// This file contains the main JavaScript functionality for the website, including handling navigation, page transitions, and any interactive elements.

document.addEventListener("DOMContentLoaded", function () {
  // Navigation functionality
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetPage = this.getAttribute("href");
      showPage(targetPage);
    });
  });

  // Function to show the selected page
  function showPage(page) {
    const pages = document.querySelectorAll(".page");
    pages.forEach((p) => {
      p.classList.add("hidden");
    });
    document.querySelector(page).classList.remove("hidden");
  }

  // Initial page load
  showPage("#home-page");
});

// This file manages the shopping cart functionality, including adding items to the cart, updating quantities, and calculating totals.

let cart = [];

// Function to add an item to the cart
function addToCart(product, price, image) {
  const item = {
    product,
    price,
    image,
    quantity: 1,
  };

  // Check if the item is already in the cart
  const existingItemIndex = cart.findIndex(
    (cartItem) => cartItem.product === product
  );
  if (existingItemIndex > -1) {
    // If it exists, increase the quantity
    cart[existingItemIndex].quantity += 1;
  } else {
    // If it doesn't exist, add it to the cart
    cart.push(item);
  }

  updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.product}">
            <div class="cart-item-info">
                <h4>${item.product}</h4>
                <p>Price: $${item.price.toFixed(2)} x ${item.quantity}</p>
                <p>Total: $${itemTotal.toFixed(2)}</p>
            </div>
        `;
    cartItemsContainer.appendChild(cartItem);
  });

  cartTotal.innerText = `$${total.toFixed(2)}`;
}

// Function to remove an item from the cart
function removeFromCart(product) {
  cart = cart.filter((item) => item.product !== product);
  updateCartDisplay();
}

// Function to clear the cart
function clearCart() {
  cart = [];
  updateCartDisplay();
}
