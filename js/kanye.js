const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuotes(data));
}
const displayQuotes = quote => {
    // console.log(quote.quote)
    const getQuote = document.getElementById('quote');
    getQuote.innerText = quote.quote

}