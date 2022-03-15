// use keyboard enter for search :
const searchField = document.getElementById('button-search');
const searchInput = document.getElementById('search-input');
searchInput.addEventListener("keypress", function (event) {
    console.log('keypress trigerred', event.key)
    if (event.key === 'Enter'){
        searchField.click();
    }      
});

const searchFood = () => {
    const searchInput = document.getElementById('search-input');
    const searchInputValue = searchInput.value;
    searchInput.value = '';
    if(searchInputValue == ''){
        // make an error message
    }
    else{
        // load data 
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals));
    }
}
const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if(meals.length ==0){
        // write an error message to ui 
    }
    // searchResult.innerHTML = '';
    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick= "loadMealDetails(${meal.idMeal})" class="col">
            <div class="card">
                <img src="${meal.strMealThumb}"class="card-img-top" alt="..">
                <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 300)}</p>
                </div>
            </div>
        </div>`;
        searchResult.appendChild(div);
    });
}
const loadMealDetails = mealId => {
    const url = `
    https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]));
}
// display meal details 
const displayMealDetails = meal => {
    console.log(meal);
    const mealDetails = document.getElementById('meal-details')
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">go to youtube link</a>
    </div>`;
    mealDetails.appendChild(div);
}