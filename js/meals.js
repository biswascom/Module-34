const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
};

const displayMeals = meals => {
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';

    meals.forEach(meal => {
        // console.log(meal.idMeal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="col">
            <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button onclick="loadMealModal(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealModal">
                    Details
                </button>
                </div>
            </div>
        </div>
        `;
        mealsContainer.appendChild(div);
    });
};

const searchButton = search => {
    const inputField = document.getElementById('search-field').value;
    loadMeals(inputField);
};

const loadMealModal = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealModal(data.meals[0]))
};

const displayMealModal = meal => {
    console.log(meal.strArea);
    const mealTitle = document.getElementById('mealTitle');
    mealTitle.innerText = meal.strMeal;

    const mealBody = document.getElementById('mealBody');
    mealBody.innerHTML = `
        <p>Food Origin: <span class="fs-3">${meal.strArea}</span></p>
        <img class="img-fluid" src="${meal.strMealThumb}">
        <p>${meal.strInstructions}</p>
    `;

    // ***(Div make kore append child kora hoi shudhu loop er moddhe. Tahole protibar loop ghure akta akta alada div container e append child hoi. Ta bade matro akta div make hoi ebong ta container div e add hoi. Ete kore make kora div e matro akta value e save hoye thake ebong ta container e giye add hoi. Jehetu loop er moddhe div creat kora na tai eta dynamic vabe bar bar make na hoye aktai make hoi.)***

    // const div = document.createElement('div');
    // div.innerHTML = `
    // <img class="img-fluid" src="${meal.strMealThumb}">
    // `;
    // mealBody.appendChild(div);
};

loadMeals('chicken');