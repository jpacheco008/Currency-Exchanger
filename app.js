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
    // console.log(rates);
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
    // console.log(currentCountry);
    // console.log(exchangeCountry);
    let rates = response.data.rates
    // console.log(todayDate);
    for (const key in rates) {
      if (key === exchangeCountry) {
        newR = rates[key]
        // console.log(newR);
        let money = document.querySelector('input');
        money.addEventListener('keyup', (event) => {
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
  // getHistory(mainCountry)
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
// console.log(lastWeek);
// console.log(dateArr);

let datesForAPI = []
for (let i = 7; i >= 0 ; i--){
  let dateArrN = new Date(new Date().getTime() - (60000 * 60 * 24 * i)).toLocaleDateString('ko-KR').replace('. ','-').replace('. ','-').replace('.','').split('-');
  dateArrN[1] = dateArrN[1].length < 2 ? '0' + dateArrN[1] : dateArrN[1]
  dateArrN[2] = dateArrN[2].length < 2 ? '0' + dateArrN[2] : dateArrN[2]
  dates = dateArrN.join('-')
  datesForAPI.push(dates)
}
console.log(datesForAPI);

let datesForChart = []
for (let i = 7; i >= 0; i--) {
  let dateArrC = new Date(new Date().getTime() - (60000 * 60 * 24 * i)).toLocaleDateString('ko-KR').replace('. ',',').replace('. ',',').replace('.',',').split('-');
  dates = dateArrC.join(',')
  datesForChart.push(dates)
}
let rate0
let rate1 
let rate2
let rate3 
let rate4 
// let rate5 
// let rate6 
// let rate7 
console.log(datesForChart);
async function getHistory(countryChart, exVersus) {
  const url = `https://api.frankfurter.app/${lastWeek}..?from=${countryChart}`
  try {
    let response = await axios.get(url)
    console.log(response);
    let chartRates = response.data.rates
    console.log(chartRates[datesForAPI[4]]);
    for (const key in chartRates[datesForAPI[0]]) {
      if (key === exVersus) {
        rate0 = chartRates[datesForAPI[0]][key]
        rate1 = chartRates[datesForAPI[1]][key]
        rate2 = chartRates[datesForAPI[2]][key]
        rate3 = chartRates[datesForAPI[3]][key]
        rate4 = chartRates[datesForAPI[4]][key]
        // rate5 = chartRates[dateForChart[5]][key]
        // rate6 = chartRates[dateForChart[6]][key]
        // rate7 = chartRates[dateForChart[7]][key]
      }
    }
    console.log(rate0);
    console.log(rate1);
    console.log(rate2);
    console.log(rate3);
    console.log(rate4);
    // console.log(rate5);
    // console.log(rate6);
    // console.log(rate7);
    
  } catch (error) {
    console.log(error);
  }
  
}
    console.log(rate0);
    console.log(rate1);
    console.log(rate2);
    console.log(rate3);
    console.log(rate4);
// getHistory('USD')
window.onload = function () {

  let chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,  
    title:{
      text: "Changes in Rates"
    },
    axisY: {
      title: "Rate",
      valueFormatString: "#,##0.###.",
      prefix: "$",
      stripLines: [{
        value: 500,
        label: "Average"
      }]
    },
    data: [{
      yValueFormatString: "#####.##### Units",
      xValueFormatString: "DD-MMM",
      type: "spline",
      dataPoints: [
        {x: new Date(2020, 11,07), y: 1250.87},
        {x: new Date(2020, 11, 8), y: 279},
        {x: new Date(2020, 11, 9), y: 338},
        {x: new Date(2020, 11, 10), y: 694},
        {x: new Date(2020, 11, 11), y: 602},
        {x: new Date(2020, 11, 12), y: 230},
        {x: new Date(2020, 11, 13), y: 180},
      ]
    }]
  });
  chart.render();
  
  }
  // chart.options.title.text = "Chart Title";
  // chart.options.data = [array];
  // chart.options.data[0] = {object};
  // chart.options.data[0].dataPoints = [array];