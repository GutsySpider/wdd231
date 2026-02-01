document.addEventListener("DOMContentLoaded", () => {
    const timestampField = document.getElementById("hidden");
    timestampField.value = new Date().toISOString();
});
