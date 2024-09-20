// Function to show the correct section based on the sidebar button click
function showSection(section) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.style.display = 'none'); // Hide all sections
    document.getElementById(section + '-section').style.display = 'block'; // Show the selected section
}

// Simulate inventory with an array of objects
let inventory = [];

// Function to add an item to the inventory
function addItem() {
    const itemName = document.getElementById('item-name').value;
    const itemQuantity = document.getElementById('item-quantity').value;
    const itemPrice = document.getElementById('item-price').value;
    const dateAdded = document.getElementById('date-added').value;

    if (itemName && itemQuantity && itemPrice && dateAdded) {
        inventory.push({
            name: itemName,
            quantity: parseInt(itemQuantity),
            price: parseFloat(itemPrice),
            date: dateAdded
        });
        alert('Item added to inventory.');
        updateItemDropdown(); // Update dropdown list in sales section
    } else {
        alert('Please fill all fields.');
    }
}

// Function to update the dropdown in the Record Sales section with inventory items
function updateItemDropdown() {
    const saleItemDropdown = document.getElementById('sale-item');
    saleItemDropdown.innerHTML = ''; // Clear previous items

    inventory.forEach(item => {
        const option = document.createElement('option');
        option.value = item.name;
        option.text = `${item.name} - ${item.quantity} available`;
        saleItemDropdown.appendChild(option);
    });
}

// Function to update an item in the inventory (you can expand this function based on your needs)
function updateItem() {
    alert('This function will handle item updates.');
}

// Function to remove an item from the inventory (you can expand this function based on your needs)
function removeItem() {
    alert('This function will handle item removal.');
}

// Function to view the inventory (you can expand this to show the inventory in the UI)
function viewInventory() {
    console.log('Current Inventory:', inventory);
    alert('Check the console for inventory details.');
}

// Function to handle adding an item to the sales list
function addItemToSale() {
    const date = document.getElementById('sale-date').value;
    const customerName = document.getElementById('customer-name').value;
    const item = document.getElementById('sale-item').value;
    const quantity = document.getElementById('sale-quantity').value;

    if (date && customerName && item && quantity) {
        alert(`Added ${quantity} of ${item} to sale for ${customerName} on ${date}.`);
    } else {
        alert('Please fill all fields.');
    }
}

// Function to complete the sale
function completeSale() {
    const date = document.getElementById('sale-date').value;
    const customerName = document.getElementById('customer-name').value;
    const item = document.getElementById('sale-item').value;
    const quantity = document.getElementById('sale-quantity').value;

    if (date && customerName && item && quantity) {
        alert(`Sale completed for ${customerName} on ${date}. Items sold: ${quantity} of ${item}.`);
        // Here you could reduce the inventory or save the sale information
    } else {
        alert('Please fill all fields before completing the sale.');
    }
}
