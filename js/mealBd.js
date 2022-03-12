// use keyboard enter for search :
const searchField = document.getElementById('button-search');
const searchInput = document.getElementById('search-input');
searchInput.addEventListener("keypress", function(event) {
    console.log('keypress trigerred', event.key)
    if (event.key == 'Enter')
        searchField.click();
});

const searchFood = () => {
    const searchInput = document.getElementById('search-input');
    const searchInputValue = searchInput.value;
    searchInput.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.meals));
}