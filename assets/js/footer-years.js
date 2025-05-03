const now = new Date();
const currentYear = now.getFullYear();

// Puerto Rico (1898-07-25)
const prDate = new Date("1898-07-25");
const prYearsElapsed = currentYear - prDate.getFullYear();
document.getElementById("pr-link").textContent =
    `${prYearsElapsed} years since the US invaded Puerto Rico.`;

// Palestine (1948-05-15)
const psDate = new Date("1948-05-15");
const psYearsElapsed = currentYear - psDate.getFullYear();
document.getElementById("ps-link").textContent =
    `${psYearsElapsed} years since the Nakba.`;
