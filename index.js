const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns = document.querySelectorAll('.dropdown select');
const fromcurr = document.querySelector('.from select');
const tocurr = document.querySelector('.to select');
const msg = document.querySelector('.message');

for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        if (currCode === "USD" && select.name === 'from') {
            newOption.selected = "selected";
        } else if (currCode === "INR" && select.name === 'to') {
            newOption.selected = "selected";
        }

        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateflag(evt.target);
    });
}

const updateflag = (element) => {
    let currcode = element.value;
    let countrycode = countryList[currcode];
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
    let img = element.parentElement.querySelector('img');
    img.src = newsrc;
};

const Currencyexchangerate = async () => {
    let amt = document.querySelector('.amount input');

    let amtValue = amt.value;
    if (amtValue == 0 || amtValue < 1) {
        amtValue = 1;
        amt.value = "1";
    }

    const URL = `${BASE_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[tocurr.value.toLowerCase()];

    let finalamount = rate * amtValue;
    msg.innerText = `${finalamount}`;
};

window.addEventListener('load', () => {
    Currencyexchangerate();
});
