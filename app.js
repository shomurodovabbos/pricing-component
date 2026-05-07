const slider = document.getElementById("slider");
const price = document.getElementById("price");
const toggle = document.querySelector(".toggle input");

const prices = [0, 8, 16, 24, 30];

function updateUI() {
    const value = Number(slider.value);

    let finalPrice = prices[value];

    if (toggle.checked) {
        finalPrice *= 0.25;
    }

    // PRICE
    price.textContent = `$${finalPrice.toFixed(2)}`;

    // PROGRESS
    const percent = (value / slider.max) * 100;

    slider.style.background = `
        linear-gradient(
            to right,
            var(--green-400) ${percent}%,
            var(--slate-200) ${percent}%
        )
    `;
}

slider.addEventListener("input", updateUI);
toggle.addEventListener("change", updateUI);

// initial state
slider.value = 2;
toggle.checked = false;

updateUI();
