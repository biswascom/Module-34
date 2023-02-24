const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
};

const displayCountries = data => {
    const countriesContainer = document.getElementById('countries-container');
    data.forEach(country => {
        console.log(country.cca2);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <h3>Country: ${country.name.common}</h3>
            <p>Capital: ${country.capital ? country.capital[0] : 'Unknown'}</p>
            <button onclick = "loadDetails('${country.cca2}')">Details</button>
        `;
        countriesContainer.appendChild(div);
    });
};

const loadDetails = countryCode => {
    fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
        .then(res => res.json())
        .then(data => displayDetails(data[0]))
};

const displayDetails = data => {
    const countryDetails = document.getElementById('country-details');
    // const div = document.createElement('div');
    // Jehetu amra akhane loop korbo na tai [ const div = document.createElement('div'); ] evabe set korbo na. evabe set korle loop er moto bar bar random vabe bar bar notun div make hoy. Tai akbar aktai div creat korte hole direct getElement kore tar moddhe innerHTML ba innerText korte hoi.
    countryDetails.innerHTML = `
    <h3>Country: ${data.name.common}</h3>
    <img src="${data.flags.png}"/>
    `;
    countryDetails.appendChild(div);
}

loadCountries();