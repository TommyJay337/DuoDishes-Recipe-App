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

// Get the modal
var modal = document.getElementById("recipeModal");

// Get the button that opens the modal
var btn = document.getElementById("openModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function addIngredient() {
    const container = document.getElementById("ingredientsList");
    const newIngredient = document.createElement("div");
    newIngredient.classList.add("ingredient-entry");
    newIngredient.innerHTML = `
        <input type="text" name="ingredientName[]" placeholder="Ingredient" required>
        <input type="number" name="quantity[]" placeholder="Quantity" min="0" step="any" required>
        <select name="measurement[]">
            <option value="cups">Cups</option>
            <option value="grams">Grams</option>
            <option value="tablespoons">Tablespoons</option>
            <option value="teaspoons">Teaspoons</option>
            <!-- More options can be added here -->
        </select>
        <button type="button" onclick="removeIngredient(this)">-</button>
    `;
    container.appendChild(newIngredient);
}

function removeIngredient(button) {
    button.parentNode.remove();
}


