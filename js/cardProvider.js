let provider;
let oddSum = 0;
let evenSum = 0;

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


const splitNumber = (number) => [...number.toString()].map((number) => number * 1);

function sumValues(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

function verifyProvider(cardNumber) {
    let cardSign = [];
    let flag = false;
    let output;

    for (let i = 0; i < cardNumber.length; i++) {
        if (!isNaN(cardNumber[i] * 1) && cardNumber[i] != " ") cardSign.push(cardNumber[i]);
    }

    cardNumber = cardSign.join("");

    const firstNumber = cardNumber.substr(0, 2);

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

    const oddNumber = [...cardNumber].filter((value, index) => (++index % 2) > 0).map((value) => value * 2);

    for (let i = 0; i < oddNumber.length; i++) {

        if (oddNumber[i] > 9) {
            const result = splitNumber(oddNumber[i]);

            for (let i = 0; i < result.length; i++) {
                oddNumber.push(result[i]);
            }
            oddNumber.splice(i, 1);
            i--;
        }
    }

    oddSum = sumValues(oddNumber);
    evenSum = sumValues([...cardNumber].filter((value, index) => (++index % 2) == 0).map((value) => value * 1));

    output = (evenSum + oddSum) % 10 === 0 ? "Numer karty poprawny. " : "Numer karty niepoprawny. ";
    output += checkCardLength(provider, cardNumber) ? ` Wydał ją: ${provider}` : "Nieprawidłowy";
    return output;
}

export {
    verifyProvider
};