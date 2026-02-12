document.addEventListener("DOMContentLoaded", () => {
    const timestampField = document.getElementById("hidden");
    const now = new Date();

    const formatted = now.toLocaleString();
    timestampField.value = formatted;
});