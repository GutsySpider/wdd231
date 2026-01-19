const file = 'data/members.json';

function displayMembers(members) {
    const cards = document.querySelector('#cards');

    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let image = document.createElement('img');
        let membership = document.createElement('p');
        let description = document.createElement('p');

        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        website.textContent = `${member.website}`;
        image.textContent = `${member.image}`;
        membership.textContent = `${member.membership}`;
        description.textContent = `${member.description}`;

        image.setAttribute('src', member.image)
        image.setAttribute('alt', `Information for ${member.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', '440');

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(image);
        card.appendChild(membership);
        card.appendChild(description);

        cards.appendChild(card);
    });
};

async function getMembers() {
    const response = await fetch(file);
    const data = await response.json();
    displayMembers(data.members);
}

getMembers();