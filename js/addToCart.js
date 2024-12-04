let cart = [];
let totalPrice = 0;

// add item function
function addToCart(productName, price) {
    cart.push({ name: productName, price });
    totalPrice += price;
    toggleCart(true);
    updateCart();
}

// remove item function
function removeItem(index) {
    totalPrice -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

// update cart
function updateCart() {
const cartItemsDiv = document.getElementById('cart-items');
	cartItemsDiv.innerHTML = ''; 

// Add each item in the cart to the cart box
cart.forEach((item, index) => {
const div = document.createElement('div');
div.className = 'cart-item';
div.innerHTML = `
    <span>${item.name}</span>
    <span>€${item.price.toFixed(2)}</span>
    <span class="remove-icon" onclick="removeItem(${index})">&times;</span>`;

cartItemsDiv.appendChild(div);
   });

// Count total price
document.getElementById('total-price').innerText = totalPrice.toFixed	(2);
}

// Control the visibility of the cart box
function toggleCart(show) {
	const cartBox = document.getElementById('cart-box');
	if (show) {
		cartBox.classList.add('active'); 
	} else {
		cartBox.classList.remove('active'); 
	}
}
