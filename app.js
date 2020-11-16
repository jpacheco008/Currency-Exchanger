
const getRates = async () => {
  const url = 'https://api.frankfurter.app/latest'
  try {
    const response = await axios.get(url)
    console.log(response);
    const rates = Object.keys(response.data.rates)
    rates.splice(8, 0, response.data.base)
    rates.splice(0,0, 'Choose currency')
    rateValue = response.data.rates
    currentOptions(rates)
    newOptions(rates)
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
    let currentCountry = response.data.base
    let rates = response.data.rates
    for (const key in rates) {
      if (key === exchangeCountry) {
        newR = rates[key]
        let money = document.querySelector('input');
        money.addEventListener('keyup', (event) => {
          let moneyAmnt = document.querySelector('input').value
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
  getHistory(mainCountry, event.target.value)
})


let dateArr = new Date(new Date().getTime() - (60000 * 60 * 24 * 7)).toLocaleDateString('ko-KR').replace('. ','-').replace('. ','-').replace('.','').split('-')
dateArr[1] = dateArr[1].length < 2 ? '0' + dateArr[1] : dateArr[1]
dateArr[2] = dateArr[2].length < 2 ? '0' + dateArr[2] : dateArr[2]
let lastWeek = dateArr.join('-')

let datesForAPI = []
for (let i = 7; i >= 0 ; i--){
  let dateArrN = new Date(new Date().getTime() - (60000 * 60 * 24 * i)).toLocaleDateString('ko-KR').replace('. ','-').replace('. ','-').replace('.','').split('-');
  dateArrN[1] = dateArrN[1].length < 2 ? '0' + dateArrN[1] : dateArrN[1]
  dateArrN[2] = dateArrN[2].length < 2 ? '0' + dateArrN[2] : dateArrN[2]
  dates = dateArrN.join('-')
  datesForAPI.push(dates)
}

let datesForChart = []
for (let i = 7; i >= 0; i--) {
  let dateArrC = new Date(new Date().getTime() - (60000 * 60 * 24 * i)).toLocaleDateString('ko-KR').replace('. ',',').replace('. ',',').replace('.','').split('-');
  dates = dateArrC.join(',')
  datesForChart.push(dates)
}
let rate0
let rate1 
let rate2
let rate3 
let rate4 
let rate5 
let rate6 
let rate7

async function getHistory(countryChart, exVersus) {
  const url = `https://api.frankfurter.app/${lastWeek}..?from=${countryChart}`
  try {
    let response = await axios.get(url)
    let chartRates = response.data.rates
    for (const key in chartRates[datesForAPI[0]]) {
      if (key === exVersus) {
        try {
          rate0 = chartRates[datesForAPI[0]][key]
        } catch (error) {
          rate0 = null
        }
        try {
          rate1 = chartRates[datesForAPI[1]][key]
        } catch (error) {
          return null
        }
        try {
          rate2 = chartRates[datesForAPI[2]][key]
        } catch (error) {
          return null
        }
        try {
          rate3 = chartRates[datesForAPI[3]][key]
        } catch (error) {
          return null
        }
        try {
          rate4 = chartRates[datesForAPI[4]][key]
        } catch (error) {
          return null
        }
        try {
          rate5 = chartRates[dateForChart[5]][key]
        } catch (error) {
          rate5 = null
        }
        try {
          rate6 = chartRates[dateForChart[6]][key]
        } catch (error) {
          rate6 = null
        }
        try {
          rate7 = chartRates[dateForChart[7]][key]
        } catch (error) {
          rate7 = null
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
          value: (rate0 + rate1 + rate2 + rate3 + rate4 + rate5 + rate6 + rate7) / 5,
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
          { x: new Date(datesForChart[0]), y: rate0 },
          { x: new Date(datesForChart[1]), y: rate1 },
          { x: new Date(datesForChart[2]), y: rate2 },
          { x: new Date(datesForChart[3]), y: rate3 },
          { x: new Date(datesForChart[4]), y: rate4 },
          { x: new Date(datesForChart[5]), y: rate5 },
          { x: new Date(datesForChart[6]), y: rate6 },
          { x: new Date(datesForChart[7]), y: rate7 },
        ]
      }]
    });
    chart.render();
})
  
  