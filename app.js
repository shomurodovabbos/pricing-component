const slider = document.getElementById("slider");
const price = document.getElementById("price");
const prices = [0, 8, 16, 24, 30];

function updateUI() {
    const value = Number(slider.value);

    // PRICE
    price.textContent = `$${prices[value].toFixed(2)}`;

    // PROGRESS
    const percent = (value / slider.max) * 100;

    slider.style.background = `linear-gradient(to right,
    var(--green-400) ${percent}%,
    var(--slate-200) ${percent}%
)`;
}

slider.addEventListener("input", updateUI);

// initial state
slider.value = 2;
updateUI();
