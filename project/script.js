// Select elements
const bucketInput = document.getElementById('bucket-item');
const addButton = document.getElementById('add-button');
const bucketList = document.getElementById('bucket-list');

// Function to add an item
function addItem() {
    const itemText = bucketInput.value.trim();

    if (itemText === '') {
        alert('Please enter a wish!');
        return;
    }

    // Create list item
    const listItem = document.createElement('li');

    // Create text node
    const textNode = document.createTextNode(itemText);

    // Create remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-button');
    removeButton.onclick = function () {
        listItem.remove();
    };

    // Append text and button to list item
    listItem.appendChild(textNode);
    listItem.appendChild(removeButton);

    // Add list item to bucket list
    bucketList.appendChild(listItem);

    // Clear input field
    bucketInput.value = '';
}

// Add event listener for the "Add" button
addButton.addEventListener('click', addItem);

// Allow adding items with "Enter" key
bucketInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addItem();
    }
});