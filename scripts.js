document.getElementById('recipeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const recipeData = {
        name: document.getElementById('recipeName').value,
        image: document.getElementById('recipeImage').value,
        ingredients: document.getElementById('ingredients').value,
        instructions: document.getElementById('instructions').value,
    };

    console.log(recipeData); // For now, we're just logging out the data
    // Here you could add an AJAX request to send the data to your server
});

