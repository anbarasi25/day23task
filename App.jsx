// Store products
const products = [
  {
    name: 'Product 1',
    price: 100,
  },
  {
    name: 'Product 2',
    price: 150,
  },
  {
    name: 'Product 3',
    price: 200,
  },
];

// Initialize cart items and total
let cartItems = [];
let cartTotal = 0;

// Get elements
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const addToCartButtons = document.getElementsByClassName('add-to-cart-btn');
const checkoutButton = document.getElementById('checkout-btn');

// Add event listeners to add to cart buttons
for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener('click', () => {
    const product = products[i];
    // Add product to cart
    cartItems.push(product);
    // Increment total
    cartTotal += product.price;
    // Update cart display
    updateCart();
  });
}

// Add event listener to checkout button
checkoutButton.addEventListener('click', () => {
  alert(`Checkout successful! Total amount: $${cartTotal}`);
  // Reset cart
  cartItems = [];
  cartTotal = 0;
  updateCart();
});

// Update cart display
function updateCart() {
  cartItemsContainer.innerHTML = '';
  cartItems.forEach((item) => {
    const itemElement = document.createElement('div');
    itemElement.innerText = item.name + ' - $' + item.price;
    cartItemsContainer.appendChild(itemElement);
  });
  cartTotalElement.innerText = '$' + cartTotal;
}