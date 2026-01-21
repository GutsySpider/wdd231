const spotlightContainer = document.querySelector('#spotlight-container');
const membersURL = 'data/members.json';

async function getSpotlights() {
    try {
        const response = await fetch(membersURL);
        if (!response.ok) throw new Error("Failed to load member data");

        const data = await response.json();
        displaySpotlights(data.members);
    } catch (error) {
        console.error("Spotlight Error:", error);
    }
}

function displaySpotlights(members) {
    // Filter for Gold (3) and Silver (2)
    const qualified = members.filter(member => {
        const level = parseInt(member.membership); // extracts 3 from "3(Gold)"
        return level === 2 || level === 3;
    });

    // Shuffle array
    const shuffled = qualified.sort(() => 0.5 - Math.random());

    // Pick 2 or 3 random members
    const spotlightCount = Math.random() < 0.5 ? 2 : 3;
    const selected = shuffled.slice(0, spotlightCount);

    selected.forEach(member => {
        const card = document.createElement('section');
        card.classList.add('spotlight-card');

        card.innerHTML = `
            <img src="${member.image}" alt="${member.name} logo" loading="lazy">
            <h3>${member.name}</h3>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            <p class="level ${member.membership === 3 ? 'gold' : 'silver'}">
                ${member.membership === 3 ? 'Gold Member' : 'Silver Member'}
            </p>
        `;

        spotlightContainer.appendChild(card);
    });
}

getSpotlights();