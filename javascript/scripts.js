// Retrieving cart items and storing 
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// saving the cart items to local storage
function saveCartToLocalStorage() {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Handle hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Signing in message when click on 
function showSignInAlert() {
  alert("You have Signed In!");
}

// Register message when clicked on
function showRegisterAlert() {
  alert("Thank you for Subscribing!");
}

// Add items to the cart 
function addToCart(item) {
  
  cartItems.push(item);
  //Saving to local storage 
  saveCartToLocalStorage();
  //Updating card display
  alert('Item Added to the cart');
}

// Function to view cart when we open our modal by clicking view cart
function viewCart() {
  
  const cartModal = document.getElementById('cartModal');
  cartModal.classList.add('show');

  // Getting cart cotainer element
  const cartItemsContainer = document.getElementById('cartItems');
  
  cartItemsContainer.innerHTML = '';

  // If items in cart display create a new div for each item and add it to the cart
  if (cartItems.length > 0) {
    cartItems.forEach(item => {
      
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('cart-item');
      itemDiv.textContent = item;
      cartItemsContainer.appendChild(itemDiv);
    });
  } else {
    // If cart is empty, will display message 
    cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
  }
}

// closing the cart modal when clicking close
function closeCart() {
  document.getElementById('cartModal').classList.remove('show');
}

// clear cart function
function clearCart() {
  
  cartItems = [];

  // saving empty cart to local storage
  saveCartToLocalStorage();

  // clear cart display in modal
  const cartItemsContainer = document.getElementById('cartItems');
  cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
}

// process order function
function processOrder() {
  if (cartItems.length === 0) {
    alert("Your cart is empty. Please add items to the cart.");
    return;
  }

  // alert to show we processed order 
  alert("Order has been processed!");

  // clearing cart after processing
  cartItems = [];
  saveCartToLocalStorage();

  document.getElementById('cartItems').innerHTML = '<p>Your cart is empty.</p>';
}

// contact form submission
function submit() {
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // preventing default

    // thanking client for contacting us when clicking submit
    alert('Thank you for contacting us!');
  });
}

submit();
