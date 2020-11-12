let rateValue;
const getRates = async () => {
  const url = 'https://api.frankfurter.app/latest'
  try {
    const response = await axios.get(url)
    // console.log(response.data.rates);
    const rates = Object.keys(response.data.rates)
    rates.splice(8, 0, response.data.base)
    rateValue = response.data.rates
    console.log(rateValue);
    console.log(rates);
    currentOptions(rates)
    newOptions(rates)
    console.log(rateValue.AUD);
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
  const newC = document.querySelector('#new-currency')
  return list.forEach(currency => {
    const optionNew = document.createElement('option')
    optionNew.value = `${currency}`
    optionNew.textContent = `${currency}`
    newC.append(optionNew)
  });
}
function currentCurrency(event) {
  event.preventDefault()
  const currentRateValue = document.querySelector('#current-currency').value
  console.log(currentRateValue);
  getCountry(currentRateValue)
}


async function getCountry(country) {
  const url = `https://api.frankfurter.app/latest?from=${country}`
  try {
    const response = await axios.get(url)
    console.log(response);

  } catch (error) {
    console.log(error);
  }
}

const selectC = document.querySelector('#current-currency');
console.log(selectC)
selectC.addEventListener('change', (event) => {
  getCountry(event.target.value)
})