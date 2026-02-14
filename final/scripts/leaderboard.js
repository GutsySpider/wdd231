import { leaderboard } from '../data/leaderboard.mjs';

const showHere = document.querySelector("#leaderboard");

function displayItems(players) {
    showHere.innerHTML = ""; 

    players.forEach(place => {
        const row = document.createElement("div");
        row.classList.add("leaderboard-row");

        const playerCell = document.createElement("div");
        playerCell.classList.add("cell", "player-cell");

        const avatar = document.createElement("img");
        avatar.src = place.img;
        avatar.alt = place.player;
        avatar.loading = "lazy";

        const name = document.createElement("span");
        name.textContent = place.player;

        playerCell.appendChild(avatar);
        playerCell.appendChild(name);

        const rank = document.createElement("div");
        rank.classList.add("cell");
        rank.textContent = place.rank;

        const time = document.createElement("div");
        time.classList.add("cell");
        time.textContent = place.time_played;

        const kills = document.createElement("div");
        kills.classList.add("cell");
        kills.textContent = place.kills;

        const kd = document.createElement("div");
        kd.classList.add("cell");
        kd.textContent = place.kd_ratio;

        const platform = document.createElement("div");
        platform.classList.add("cell");
        platform.textContent = place.platform;

        row.appendChild(playerCell);
        row.appendChild(rank);
        row.appendChild(time);
        row.appendChild(kills);
        row.appendChild(kd);
        row.appendChild(platform);

        showHere.appendChild(row);
    });
}


displayItems(leaderboard);

window.filterLeaderboard = function (filterBy) {
    let filtered = [...leaderboard];

    switch (filterBy) {
        case "time":
            filtered.sort((a, b) => parseInt(b.time_played) - parseInt(a.time_played));
            break;

        case "kills":
            filtered.sort((a, b) => b.kills - a.kills);
            break;

        case "kd":
            filtered.sort((a, b) => b.kd_ratio - a.kd_ratio);
            break;

        case "platform":
            filtered.sort((a, b) => a.platform.localeCompare(b.platform));
            break;

        default:
            filtered.sort((a, b) => a.rank - b.rank);
    }

    filtered = filtered.map((player, index) => ({
        ...player,
        rank: index + 1
    }));

    displayItems(filtered);
};