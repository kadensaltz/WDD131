import recipes from "./recipes.mjs";

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomRecipe() {
    const randomIndex = random(recipes.length);
    return recipes[randomIndex];
}

function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        html += i <= rating 
            ? `<span aria-hidden="true" class="icon-star">⭐</span>` 
            : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
    html += `</span>`;
    return html;
}

function recipeTemplate(recipe) {
    return `
    <div class="recipe-card">
        <img src="${recipe.image}" alt="image of ${recipe.name}" class="recipe-image" />
        <div class="recipe-content">
            <h2>${recipe.name}</h2>
            <div class="recipe-rating">
                ${ratingTemplate(recipe.rating)}
            </div>
            <p>${recipe.description}</p>
        </div>
    </div>`;
}

function renderRecipes(recipeList) {
    const recipesContainer = document.getElementById('recipes-container');
    recipesContainer.innerHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
}

function init() {
    const randomRecipe = getRandomRecipe();
    renderRecipes([randomRecipe]);
}

document.addEventListener('DOMContentLoaded', () => {
    init();
});

function filterRecipes(query) {
    return recipes
        .filter(recipe => {
            const queryLower = query.toLowerCase();
            return (
                recipe.name.toLowerCase().includes(queryLower) ||
                recipe.description.toLowerCase().includes(queryLower) ||
                recipe.tags.some(tag => tag.toLowerCase().includes(queryLower)) ||
                recipe.ingredients.some(ingredient =>
                    ingredient.toLowerCase().includes(queryLower)
                )
            );
        })
        .sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(event) {
    event.preventDefault();
    const searchInput = document.querySelector('.search-bar input');
    const query = searchInput.value.trim();

    if (query) {
        const filteredRecipes = filterRecipes(query);
        renderRecipes(filteredRecipes);
    } else {
        renderRecipes([]);
    }
}

document.querySelector('.search-bar button').addEventListener('click', searchHandler);