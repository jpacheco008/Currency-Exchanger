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
    let todayDate = response.data.date
    console.log(todayDate);
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
})

// let lastWeek = new Date(new Date().getTime()- (3 * 24 * 60 * 60 * 1000)).toLocaleDateString('ko-KR').replace('. ','-').replace('. ','-').replace('.','')
// console.log(lastWeek);

let dateArr = new Date(new Date().getTime() - (60000 * 60 * 24 * 4)).toLocaleDateString('ko-KR').replace('. ','-').replace('. ','-').replace('.','').split('-')
dateArr[2] = dateArr[2].length < 2 ? '0' + dateArr[2] : dateArr[2]
let lastWeek = dateArr.join('-')
console.log(dateArr);

async function getHistory(countryChart) {
  const url = `https://api.frankfurter.app/${lastWeek}..?from=${countryChart}`
  try {
    let response = await axios.get(url)
    console.log(response);
  } catch (error) {
    console.log(error);
  }
  
}
getHistory('USD')
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
        {x: new Date(2020, 10, 7), y: 1250.87},
        {x: new Date(2020, 10, 8), y: 279},
        {x: new Date(2020, 10, 9), y: 338},
        {x: new Date(2020, 10, 10), y: 694},
        {x: new Date(2020, 10, 11), y: 602},
        {x: new Date(2020, 10, 12), y: 230},
        {x: new Date(2020, 10, 13), y: 180},
      ]
    }]
  });
  chart.render();
  
  }
  // chart.options.title.text = "Chart Title";
  // chart.options.data = [array];
  // chart.options.data[0] = {object};
  // chart.options.data[0].dataPoints = [array];