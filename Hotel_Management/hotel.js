// Cart functionality
const cartItemsElement = document.getElementById("cart-items");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});

function addToCart(event) {
  const menuItem = event.target.parentElement;
  const itemTitle = menuItem.querySelector("h3").innerText;
  const itemPrice = menuItem.querySelector("p:last-child").innerText;

  const cartItem = document.createElement("li");
  cartItem.innerText = `${itemTitle} - ${itemPrice}`;
  cartItemsElement.appendChild(cartItem);
}

// Checkout functionality
const checkoutButton = document.getElementById("checkout-btn");
checkoutButton.addEventListener("click", checkout);

function checkout() {
  const cartItems = cartItemsElement.querySelectorAll("li");

  if (cartItems.length > 0) {
    alert("Thank you for your order!");
    cartItems.forEach((item) => {
      item.remove();
    });
  } else {
    alert("Your cart is empty. Please add items before checking out.");
  }
}
