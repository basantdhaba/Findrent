// Add click functionality to "Interested" buttons
document.querySelectorAll('.interested-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        // Get the property name from the clicked card
        const propertyName = e.target.closest('.property').querySelector('h3').textContent;

        // Show an alert
        alert(`You marked "${propertyName}" as Interested!`);
    });
});

// Add functionality to the search button
document.getElementById('search-button').addEventListener('click', () => {
    const searchValue = document.getElementById('search-input').value.trim();

    if (searchValue) {
        alert(`Searching for properties in "${searchValue}"...`);
    } else {
        alert('Please enter a location to search.');
    }
});
