// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
        {
            place: "Rexburg, ID",
            length: "5 years",
        },
        {
            place: "Ammon, ID",
            length: "3 years",
        },
        {
            place: "Sandy, UT",
            length: "1 year",
        },
    ],
};

// Using the forEach
const foodsElement = document.querySelector("#favorite-foods"); // Select the <ul> where the list items will be added
function createAppendFoodItem(food) {
    let favoriteFood = document.createElement("li"); // Create an <li>
    favoriteFood.textContent = food; // Add the food's name
    foodsElement.appendChild(favoriteFood); // Add the <li> to the <ul>
}

myInfo.favoriteFoods.forEach(createAndAppendFoodItem);

// using the .map
const foodListItems = myInfo.favoriteFoods.map((food) => `<li>${food}</li>`);
foodsElement.innerHTML = foodListElements.join("");

// Activity 2: Simplify with Arrow Functions
document.querySelector("#favorite-foods").innerHTML = myInfo.favoriteFoods
    .map((food) => `<li>${food}</li>`)
    .join("");

// Activity 3: Make the Code Reusable
// Step 1: Write a Template Function

function foodsTemplate(food) {
    return `<li>${food}</li>`;
}

function placesTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

// Step 2: Write a Reusable Function
function generateListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback); // Create HTML for each item
    return htmlList.join("");                    // Combine all items into one string
}

// Step 3: Use the Function
foodsElement.innerHTML = generateListMarkup(
    myInfo.favoriteFoods,
    foodsTemplate
);

placesElement.innerHTML = generateListMarkup(
    myInfo.placesLived,
    placesTemplate
);


// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.querySelector("#favorite-foods").appendChild(favoriteFood1);
document.querySelector("#favorite-foods").appendChild(favoriteFood2);
document.querySelector("#favorite-foods").appendChild(favoriteFood3);
document.querySelector("#favorite-foods").appendChild(favoriteFood4);