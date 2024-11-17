import recipes from "./recipes.mjs";

function renderSearchForm() {
    const recipesContainer = document.getElementById('recipes-container');

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
            <div class="recipe-content">
                <h2>${recipe.name}</h2>
                <div class="recipe-rating">
                    ${'★'.repeat(recipe.rating)}${'☆'.repeat(5 - recipe.rating)} <!-- Display stars -->
                </div>
                <p>${recipe.description}</p>
            </div>
        `;   

        recipesContainer.appendChild(recipeCard);

        });
}

document.addEventListener('DOMContentLoaded', () => {
    renderSearchForm();
});