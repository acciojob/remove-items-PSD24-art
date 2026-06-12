//your JS code here. If required.

const button = document.querySelector('input[type="button"]');
const dropdown = document.getElementById("colorSelect");

button.addEventListener("click", () => {
    dropdown.remove(dropdown.selectedIndex);
});