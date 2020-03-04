let provider;

function checkOtherProviders(firstCardNumber) {

    if (firstCardNumber > 50 && firstCardNumber <= 55) {
        provider = "MasterCard";
    } else if (firstCardNumber[0] == "4") {
        provider = "Visa";
    } else {
        provider = "Brak dostawcy karty";
    }
}

function checkCardLength(provider, cardNumber) {
    let flag = false;

    switch (provider) {
        case "MasterCard":
            cardNumber.length === 16 ? flag = true : flag = false;
            break;

        case "Visa":
            cardNumber.length === 16 || cardNumber.length === 13 ? flag = true : flag = false;
            break;

        case "American Express":
            cardNumber.length === 15 ? flag = true : flag = false;
            break;
    }

    return flag;
}

function verifyProvider(cardNumber) {
    const firstNumber = cardNumber.substr(0, 2);
    let flag = false;

    switch (firstNumber) {

        case "34":
            provider = "American Express";
            break;

        case "37":
            provider = "American Express";
            break;

        default:
            checkOtherProviders(firstNumber);
    }

    console.log(checkCardLength(provider, cardNumber));
    return checkCardLength(provider, cardNumber) ? provider : "Brak dostawcy karty";
}

export {
    verifyProvider
};