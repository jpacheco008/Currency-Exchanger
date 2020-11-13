let rateValue;

const getRates = async () => {
  const url = 'https://api.frankfurter.app/latest'
  try {
    const response = await axios.get(url)
    const rates = Object.keys(response.data.rates)
    rates.splice(8, 0, response.data.base)
    rates.splice(0,0, 'Choose currency')
    rateValue = response.data.rates
    // console.log(rateValue.AUD);
    console.log(rates);
    currentOptions(rates)
    newOptions(rates)
    
    // console.log(rateValue.getCountry);
  } catch (error) {
    console.log(error);
  }
}
getRates()

function currentOptions(list) {
  const currentC = document.querySelector('#current-currency')
  return list.forEach(currency => {
    const option = document.createElement('option')
    option.value = `${currency}`
    option.textContent = `${currency}`
    currentC.append(option)
  });
}
function newOptions(list) {
  const newC = document.querySelector('#newCurrency')
  return list.forEach(currency => {
    const optionNew = document.createElement('option')
    optionNew.value = `${currency}`
    optionNew.textContent = `${currency}`
    newC.append(optionNew)
  });
}
let mainCountry = ''
async function getCountry(country, exchangeCountry) {
  const url = `https://api.frankfurter.app/latest?from=${country}`
  try {
    const response = await axios.get(url)
    console.log(response);
    let currentCountry = response.data.base
    console.log(currentCountry);
    console.log(exchangeCountry);
    let rates = response.data.rates
    for (const key in rates) {
      if (key === exchangeCountry) {
        newR = rates[key]
        console.log(newR);
        let money = document.querySelector('input');
        money.addEventListener('change', (event) => {
          let moneyAmnt = document.querySelector('input').value
          console.log(moneyAmnt);
          let newAmount = document.querySelector('#newAmount')
          newAmount.value = `${moneyAmnt * newR}`
          newAmount.textContent = `${moneyAmnt * newR}`
          console.log(newAmount);
        })
      }
    }
  } catch (error) {
    console.log(error);
  }
}

const selectC = document.querySelector('#current-currency');
selectC.addEventListener('change', (event) => {
  mainCountry = event.target.value
})

const selectN = document.querySelector('#newCurrency');
selectN.addEventListener('change', (event) => {
  getCountry(mainCountry, event.target.value)
})
