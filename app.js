console.log('hello');
const getRates = async () => {
  const url = 'https://api.frankfurter.app/latest'
  try {
    const response = await axios.get(url)
    // console.log(response.data.rates);
    const rates = Object.keys(response.data.rates)
    console.log(rates);
    rateOptions(rates)
  } catch (error) {
    console.log(error);
  }
}
getRates()

function rateOptions(list) {
  const select = document.querySelector('#current-currency')
  return list.forEach((currency) => {
    const option = document.createElement('option')
    console.log(currency);
    option.value = `${currency}`
    option.textContent = `${currency}`
    select.append(option)
  });
}
rateOptions()