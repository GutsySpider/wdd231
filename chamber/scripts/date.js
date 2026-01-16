const year = document.querySelector("#year");
const today = new Date();
if (year) {
    year.innerHTML = ` <span class="highlight">${today.getFullYear()}</span>`;
}
const lastModifiedEl = document.getElementById("lastModified");
if (lastModifiedEl) {
    lastModifiedEl.textContent = document.lastModified;
}