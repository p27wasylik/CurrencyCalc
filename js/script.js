{
    const plnToEurAmount = document.querySelector(".js-plnToEur_pln");
    const plnToEurResult = document.querySelector(".js-plnToEur_eur");

    const eurToPlnAmount = document.querySelector(".js-eurToPln_eur");
    const eurToPlnResult = document.querySelector(".js-eurToPln_pln");

    const eurValue = +4.86;

    const currencyCalc = (plnToEurAmount) => {
        amount = plnToEurAmount.value;
        result = +amount / eurValue;
        return result.toFixed(2);
    };

    const reverseCurrencyCalc = (eurToPlnAmount) => {
        amount = eurToPlnAmount.value;
        result = +amount * eurValue;
        return result.toFixed(2);
    };


    plnToEurAmount.addEventListener("input", () => {
        plnToEurResult.value = currencyCalc(plnToEurAmount);
    })

    eurToPlnAmount.addEventListener("input", () => {
        eurToPlnResult.value = reverseCurrencyCalc(eurToPlnAmount);
    })

    let currentEur = document.querySelector(".js-eurValue");

    currentEur.innerText = `1€ » ${eurValue} PLN`;

}