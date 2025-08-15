// script.js
let order = [];
let totalPrice = 0;

// Function to update the order summary
function updateOrderSummary() {
    const orderList = document.getElementById('order-list');
    const totalPriceElement = document.getElementById('total-price');
    
    // Clear the order list
    orderList.innerHTML = '';

    // Add each item in the order to the list
    order.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)} (x${item.quantity})`;
        orderList.appendChild(li);
    });

    // Update the total price
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Handle order button clicks
document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', () => {
        const itemName = button.getAttribute('data-item');
        const itemPrice = parseFloat(button.getAttribute('data-price'));

        // Check if the item is already in the order
        const existingItem = order.find(item => item.name === itemName);
        
        if (existingItem) {
            // Update the quantity if the item is already in the order
            existingItem.quantity++;
        } else {
            // Add new item to the order
            order.push({ name: itemName, price: itemPrice, quantity: 1 });
        }

        // Update the total price
        totalPrice += itemPrice;

        // Update the order summary on the page
        updateOrderSummary();
    });
});

// Handle the "Place Order" button click
document.getElementById('place-order').addEventListener('click', () => {
    if (order.length === 0) {
        alert('Your order is empty!');
    } else {
        alert('Order placed successfully!');
        // Clear the order after placing
        order = [];
        totalPrice = 0;
        updateOrderSummary();
    }
});
