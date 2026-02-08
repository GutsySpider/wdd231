import { interests } from '../data/discover.mjs';

const showHere = document.querySelector("#discover");


function displayItems(location) {
    location.forEach(place => {

        const card = document.createElement("div");

        const figure = document.createElement("figure")
        const img = document.createElement("img");
        img.src = place.img;
        img.alt = place.name;
        img.loading = "lazy"
        figure.appendChild(img);

        const title = document.createElement("h2");
        title.textContent = place.name;

        const address = document.createElement("address");
        address.textContent = `Address: ${place.address}`;

        const description = document.createElement("p");
        description.textContent = `${place.description} The Price is ${place.price}`;

        const button = document.createElement("button");
        button.textContent = "Learn More";
        button.classList.add("moreButton");

        button.addEventListener("click", () => {
            window.open(place.more);
        });

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(button);

        showHere.appendChild(card);
    });
}

displayItems(interests);