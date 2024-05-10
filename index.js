const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns = document.querySelectorAll('.dropdown select');

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

    select.addEventListener("change",(evt)=>{
        updateflag(evt.target)
    })
}
const updateflag=((element)=>{
    let currcode=element.value;
    let countrycode=countryList[currcode];
    let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`
    let img = element.parentElement.querySelector('img');
    img.src=newsrc;
})
