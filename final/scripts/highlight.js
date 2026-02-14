const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");
const dialogBoxText = document.querySelector("#dialogBox div");

// "Show the dialog" button opens dialog modally
openButton1.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `<h1> Non-Profit Membership </h1>
    <p> <strong>Fee:</strong> $0 </p>
    <p> <strong>Purpose:</strong> Support local non‑profit organizations and community groups.</p>
    <p> <strong>Benefits:</strong> </p>
    <p> -Listing in the business directory </p>
    <p> -Access to general chamber events </p>
    <p> -Basic newsletter inclusion </p>
    <p> -Eligible for community‑focused training sessions </p>`
});

openButton2.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `<h1> Bronze Membership </h1>
    <p> <strong>Fee:</strong> $100 / year </p>
    <p> <strong>Purpose:</strong> Entry‑level paid membership for small businesses.</p>
    <p> <strong>Benefits:</strong> </p>
    <p> -All Non-Profit benefits </p>
    <p> -Access to member‑only workshops </p>
    <p> -Small event discount (5%) </p>
    <p> -Social media shout‑outs once per year </p>
    <p> -Basic advertising opportunities </p>`
});

openButton3.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `<h1> Silver Membership </h1>
    <p> <strong>Fee:</strong> $250 / year </p>
    <p> <strong>Purpose:</strong> Mid‑tier membership with stronger promotional perks.</p>
    <p> <strong>Benefits:</strong> </p>
    <p> -All Bronze benefits </p>
    <p> -Medium event discount (10%) </p>
    <p> -Priority placement in the business directory </p>
    <p> -One spotlight feature per quarter </p>
    <p> -Access to advanced training sessions </p>
    <p> -Discounted booth fees at chamber events </p>`
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
    dialogBox.close();
});
