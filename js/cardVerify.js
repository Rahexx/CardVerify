import {
    verifyProvider
} from './cardProvider';

const button = document.querySelector("form button");
const text = document.querySelector("form input");
const textAfterCheckCard = document.querySelector("main p");

button.addEventListener("click", function (e) {
    e.preventDefault();
    const provider = verifyProvider(text.value);
    textAfterCheckCard.textContent = provider;
    text.value = "";
});