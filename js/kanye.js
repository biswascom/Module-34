const kanyeQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => quoteContainer(data))
};

const quoteContainer = data => {
    const quote = document.getElementById('quote-container');

    quote.innerText = data.quote;
}

kanyeQuote();