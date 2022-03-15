// use keyboard enter for search :
const searchField = document.getElementById('button-search');
const searchInput = document.getElementById('search-input');
searchInput.addEventListener("keypress", function (event) {
    console.log('keypress trigerred', event.key)
    if (event.key === 'Enter'){
        searchField.click();
    }      
});

// error message section 
document.getElementById('error-message').style.display = 'none';

const searchFood = async () => {
    const searchInput = document.getElementById('search-input');
    const mealDetails = document.getElementById('meal-details')
    const searchInputValue = searchInput.value;
    searchInput.value = '';
    mealDetails.innerHTML=''
    if(searchInputValue == ''){
        // make an error message
        console.log('hi');
        const mealDetails = document.getElementById('meal-details')
        const p = document.createElement('p');
        p.innerHTML =`
        <p>please enter word or letter<p/>`;
        mealDetails.appendChild(p); 
    }
    else{
        // load data 
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputValue}`;
        try{
            const res = await fetch(url);
            const data = await res.json()
            displaySearchResult(data.meals);
        }
        catch(error){
            displayError(error)
        }
    }
}
const displayError = error => {
    // error message section 
    document.getElementById('error-message').style.display = 'block';
}


const displaySearchResult = meals => {
    document.getElementById('error-message').style.display = 'none';
    const searchResult = document.getElementById('search-result');
    // searchResult.innerHTML = '';
    searchResult.textContent = '';
    if(meals.length ==0){
        // write an error message to ui 
    }
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
const loadMealDetails = async mealId => {
    
    const url = `
    https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetails(data.meals[0]);
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displayMealDetails(data.meals[0]));
}
// display meal details 
const displayMealDetails = meal => {
    
    window.scroll(0, 0);
    console.log(meal);
    const mealDetails = document.getElementById('meal-details');
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
    
    // clearing error text in ui:::
    const errorField = document.getElementById('error-message');   
    errorField.textContent = '';
}