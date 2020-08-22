var usd;
var euro;
var gbp;
var chf;
var spanUsd;
var spanEuro;
var spanChf;
var spanGbp;
window.addEventListener("load", async () => {
    spanUsd = document.getElementById("usd");
    spanEuro = document.getElementById("euro");
    spanGbp = document.getElementById("gbp");
    spanChf = document.getElementById("chf");

    try {
        const response = await fetch("https://api.exchangeratesapi.io/latest?base=TRY");
        const data = await response.json();
        const { rates } = data;
        usd = (1 / rates.USD).toFixed(2);
        euro = (1 / rates.EUR).toFixed(2);
        gbp = (1 / rates.GBP).toFixed(2);
        chf = (1 / rates.CHF).toFixed(2);

        spanEuro.innerHTML = euro;
        spanUsd.innerHTML = usd;
        spanGbp.innerHTML = gbp;
        spanChf.innerHTML =chf;
    } catch (e) {
        console.error(e);
    }
    const getInputValue = (val) => (val ? parseInt(val, 10) : 1);
    document.getElementById("txtUsd").addEventListener("keyup", ({ target: { value } }) => {
        spanUsd.innerHTML = (usd * getInputValue(value)).toFixed(4);
    });
    document.getElementById("txtEuro").addEventListener("keyup", ({ target: { value } }) => {
        spanEuro.innerHTML = (euro * getInputValue(value)).toFixed(4);
    });
    document.getElementById("txtGbp").addEventListener("keyup", ({ target: { value } }) => {
        spanGbp.innerHTML = (gbp * getInputValue(value)).toFixed(4);
    });
    document.getElementById("txtChf").addEventListener("keyup", ({ target: { value } }) => {
        spanChf.innerHTML = (chf * getInputValue(value)).toFixed(4);
    });
});
