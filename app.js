const select1 = document.getElementById('currency-one');
const select2 = document.getElementById('currency-two');
const amount1 = document.getElementById('amount1');
const amount2 = document.getElementById('amount2');
const rateText = document.getElementById('small');
const swap = document.getElementById('swap');

function getRate(){
    const select1Value = select1.value;
    const select2Value = select2.value;
    
    fetch(`https://v6.exchangerate-api.com/v6/8c3c365b05ee16a6c798c228/latest/${select1Value}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            
            let rate = data.conversion_rates[select2Value]
            amount2Value = (amount1.value * rate).toFixed(2)

            amount2.value = amount2Value;
            
            rateText.innerHTML = `1 ${select1Value} = ${rate} ${select2Value}`
        })
}

window.addEventListener('load', getRate)
select1.addEventListener('change', getRate)
select2.addEventListener('change', getRate)
amount1.addEventListener('input', getRate)
amount2.addEventListener('input', getRate)
swap.addEventListener('click', () => {
    const swa = select1.value;
    select1.value = select2.value;
    select2.value = swa;
    getRate();
})




