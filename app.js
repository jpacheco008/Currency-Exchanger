
const getRates = async () => {
  const url = 'https://api.frankfurter.app/latest'
  try {
    const response = await axios.get(url)
    const rates = Object.keys(response.data.rates)
    rates.splice(8, 0, response.data.base)
    rates.splice(0,0, 'Choose currency')
    rateValue = response.data.rates
    currentOptions(rates) //sets values for the dropdown values
    newOptions(rates) //sets values for the dropdown values
  } catch (error) {
    console.log(error);
  }
}
getRates()

function currentOptions(list) { //creates the element of the dropdown
  const currentC = document.querySelector('#current-currency')
  return list.forEach(currency => {
    const option = document.createElement('option')
    option.value = `${currency}`
    option.textContent = `${currency}`
    currentC.append(option)
  });
}
function newOptions(list) { //creates the element of the second dropdown
  const newC = document.querySelector('#newCurrency')
  return list.forEach(currency => {
    const optionNew = document.createElement('option')
    optionNew.value = `${currency}`
    optionNew.textContent = `${currency}`
    newC.append(optionNew)
  });
}
let mainCountry = ''
async function getCountry(country, exchangeCountry) { //second API call to get the 
  const url = `https://api.frankfurter.app/latest?from=${country}`
  try {
    const response = await axios.get(url)
    let rates = response.data.rates 
    for (const key in rates) { 
      if (key === exchangeCountry) { //grab rate from the second picked country
        newR = rates[key]
        let money = document.querySelector('input');
        money.addEventListener('keyup', (event) => {
          let moneyAmnt = document.querySelector('input').value
          let newAmount = document.querySelector('#newAmount')
          let moneyFormat = new Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD',minimumFractionDigits: 2 });
          newAmount.value = moneyFormat.format(`${moneyAmnt * newR}`) //currency calculation
          newAmount.textContent = moneyFormat.format(`${moneyAmnt * newR}`)
        })
      }
    }
  } catch (error) {
    console.log(error);
  }
}

const selectC = document.querySelector('#current-currency'); //gets value from first drop down selection
selectC.addEventListener('change', (event) => {
  mainCountry = event.target.value
})

const selectN = document.querySelector('#newCurrency'); //gets value from second drop down selection and starts the function 
selectN.addEventListener('change', (event) => {
  getCountry(mainCountry, event.target.value)
  getHistory(mainCountry, event.target.value)
})

let dateArr = new Date(new Date().getTime() - (60000 * 60 * 24 * 7)).toLocaleDateString('ko-KR').replace('. ','-').replace('. ','-').replace('.','').split('-')
dateArr[1] = dateArr[1].length < 2 ? '0' + dateArr[1] : dateArr[1]
dateArr[2] = dateArr[2].length < 2 ? '0' + dateArr[2] : dateArr[2]
let lastWeek = dateArr.join('-') //this give us a date in the Korean format using the clock from inside VS code

let datesForAPI = []
for (let i = 7; i >= 0 ; i--){ //this formats the date in a way the the API could read it
  let dateArrN = new Date(new Date().getTime() - (60000 * 60 * 24 * i)).toLocaleDateString('ko-KR').replace('. ','-').replace('. ','-').replace('.','').split('-');
  dateArrN[1] = dateArrN[1].length < 2 ? '0' + dateArrN[1] : dateArrN[1]
  dateArrN[2] = dateArrN[2].length < 2 ? '0' + dateArrN[2] : dateArrN[2]
  dates = dateArrN.join('-')
  datesForAPI.push(dates)
}

let datesForChart = []
for (let i = 7; i >= 0; i--) {//this formats the date in a way the the chart could read it
  let dateArrC = new Date(new Date().getTime() - (60000 * 60 * 24 * i)).toLocaleDateString('ko-KR').replace('. ',',').replace('. ',',').replace('.','').split('-');
  dates = dateArrC.join(',')
  datesForChart.push(dates)
}

let rate = [] //colects the rates to be used in the chart
async function getHistory(countryChart, exVersus) {
  const url = `https://api.frankfurter.app/${lastWeek}..?from=${countryChart}`
  try {
    let response = await axios.get(url)
    let chartRates = response.data.rates
    for (const key in chartRates[datesForAPI[0]]) {
      if (key === exVersus) { 
        for (let i = 0; i <= 7 ; i++) {
          if (chartRates[datesForAPI[i]]) { //checks if there is data for this date
            rate.push(chartRates[datesForAPI[i]][key])
          } else {
            rate.push(null)
          }
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
}

const renderChart = document.querySelector('#chart');
renderChart.addEventListener('click', (event) => {

    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
        text: "Changes in Rates"
      },
      axisY: {
        title: "Rate",
        valueFormatString: "#,##0.###.",
        prefix: "$",
        stripLines: [{
          value: (rate[0] + rate[1] + rate[2] + rate[3] + rate[4] + rate[5] + rate[6] + rate[7]) / 5,
          label: "Average"
        }]
      },
      data: [{
        yValueFormatString: "#####.##### Units",
        xValueFormatString: "DD-MMM",
        type: "spline",
        connectNullData:true,
        nullDataLineDashType: "dot", 
        dataPoints: [
          { x: new Date(datesForChart[0]), y: rate[0] },
          { x: new Date(datesForChart[1]), y: rate[1] },
          { x: new Date(datesForChart[2]), y: rate[2] },
          { x: new Date(datesForChart[3]), y: rate[3] },
          { x: new Date(datesForChart[4]), y: rate[4] },
          { x: new Date(datesForChart[5]), y: rate[5] },
          { x: new Date(datesForChart[6]), y: rate[6] },
          { x: new Date(datesForChart[7]), y: rate[7] },
        ]
      }]
    });
    chart.render();
})
  
  