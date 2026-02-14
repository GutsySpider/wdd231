const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");
const dialogBoxText = document.querySelector("#dialogBox div");

openButton1.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `
        <h1> GutsySpider </h1>
        <p> 6 subscribers </p>
        <p> Filmed: May 2, 2019 </p>
        <p> Game: Apex Legends </p>
        <button class="streamButton" data-url="https://www.twitch.tv/gutsyspider">Stream</button>
    `;
});

openButton2.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `
        <h1> Fortnite Highlights </h1>
        <p> 562 subscribers </p>
        <p> Filmed: February 8, 2025 </p>
        <p> Game: Fortnite </p>
        <button class="streamButton" data-url="https://www.youtube.com/@fortnite_hi_lights">Stream</button>
    `;
});

openButton3.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `
        <h1> JMPDoubleX </h1>
        <p> 123K subscribers </p>
        <p> Filmed: Mar 20, 2023 </p>
        <p> Game: Destiny 2 </p>
        <button class="streamButton" data-url="https://www.youtube.com/channel/UCrn_4Cvnpji5PNx0ZeLH2xA">Stream</button>
    `;
});

closeButton.addEventListener("click", () => {
    dialogBox.close();
});

dialogBox.addEventListener("click", (e) => {
    if (e.target.classList.contains("streamButton")) {
        const url = e.target.dataset.url;
        window.open(url, "_blank");
    }
});

const games = [
    {
        title: "Apex Legends",
        image: "images/apexLegends.webp",
        link: "https://store.steampowered.com/app/1172470/Apex_Legends/"
    },
    {
        title: "Fortnite",
        image: "images/fortnite.webp",
        link: "https://www.epicgames.com/fortnite/en-US/home"
    },
    {
        title: "Destiny 2",
        image: "images/destiny2.webp",
        link: "https://store.steampowered.com/app/1085660/Destiny_2/"
    },
    {
        title: "Call of Duty: MW3",
        image: "images/codmw3.webp",
        link: "https://www.callofduty.com/modernwarfare3"
    },
    {
        title: "Elden Ring",
        image: "images/eldenring.webp",
        link: "https://store.steampowered.com/app/1245620/ELDEN_RING/"
    }
];


function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function displayRandomGames() {
    const container = document.querySelector("#recentGames");
    const randomGames = shuffle(games).slice(0, 2);

    randomGames.forEach(game => {
        const card = document.createElement("div");
        card.classList.add("gameCard");

        card.innerHTML = `
            <a href="${game.link}" target="_blank">
                <img src="${game.image}" alt="${game.title}">
            </a>
        `;

        container.appendChild(card);
    });
}

displayRandomGames();