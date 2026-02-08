
const visitMessage = document.querySelector("#visitMessage");

const lastVisit = localStorage.getItem("lastVisit");

const now = Date.now();

if (lastVisit == null) {

    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    
    const timePassed = 1000 * 60 * 60 * 24;
    const difference = Math.floor((now - lastVisit) / timePassed);

    if (difference < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else if (difference === 1) {
        visitMessage.textContent = "You last visited 1 day ago.";
    } else {
        visitMessage.textContent = `You last visited ${difference} days ago.`;
    }
}

localStorage.setItem("lastVisit", now);