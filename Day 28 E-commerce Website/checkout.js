document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const payment = document.getElementById('payment').value;

    document.getElementById('confirmation-message').innerText = `Thank you, ${name}! Your order has been placed.`;
    
    // Clear the cart after checkout
    localStorage.removeItem('cart');
});
