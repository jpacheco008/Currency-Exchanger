# Currency-Exchanger-

| Project 1 Important Dates | Day      | Date       |
|---------------------------|---       |---         |
| Project Prompt Delivered  | Monday   | 11/09/2020 |
| Project Pitches           | Tuesday  | 11/10/2020 |
| Project Deployment        | Tuesday  | 11/17/2020 |
| Project Presentations     | Tuesday  | 11/17/2020 |

- **App Title**: Currency Exchanger
- **App Description**: The app will take a type of currency and quantity and convert it to another designated currency type with the current exchange rate.
- **API**: https://www.frankfurter.app/docs/#deployment
- **API Snippet**: 
{
    "amount": 1,
    "base": "USD",
    "date": "2020-11-09",
    "rates": {
        "AUD": 1.3662,
        "BGN": 1.6459,
        "BRL": 5.2552,
        "CAD": 1.295,
        "CHF": 0.90701,
        "CNY": 6.604,
        "CZK": 22.28,
        "DKK": 6.2674,
        "EUR": 0.84154,
        "GBP": 0.75927,
        "HKD": 7.7529,
        "HRK": 6.3654,
        "HUF": 300.41,
        "IDR": 14062,
        "ILS": 3.3599,
        "INR": 73.752,
        "ISK": 137.25,
        "JPY": 104.91,
        "KRW": 1112.03,
        "MXN": 20.109,
        "MYR": 4.1085,
        "NOK": 9.013,
        "NZD": 1.4624,
        "PHP": 48.147,
        "PLN": 3.7592,
        "RON": 4.0945,
        "RUB": 75.89,
        "SEK": 8.5812,
        "SGD": 1.3423,
        "THB": 30.38,
        "TRY": 8.0608,
        "ZAR": 15.2575
    }
}

- **Wireframes**:  
https://wireframe.cc/ux3pX0

- **MVP**: 
*Functioning drop down list of the currencies avialable 
*accurate exchange rate displayed in respect with the daily exchange rate

- **Post-MVP**: 
*use historical data to graph fluxations in the exchange rate
*little trivia question asking if the exchange rate is higher or lower in comparrison to another currency type

- **Goals**: 
11/10: Complete base index and CSS
11/12: Complete JS code and MVP functionality
11/13: Add graph display
11/16: Add trivia question and deploy app
11/17: Present app

- **Priority Matrix**: 
https://docs.google.com/drawings/d/1HvKWbWwRoI6jtLLAI4tgirZxzt4U_2ReiwBWl1X1X_4/edit?usp=sharing

- **Timeframes**: 
| Objectives                | Hours EST | Date       |
|---------------------------|---        |---         |
| Project Pitch             | 1hr       | 11/10/2020 |
| Index base code           | 3hrs      | 11/10/2020 |
| CSS.  base code           | 4hrs      | 11/10/2020 |
| CSS.  style               | 3hrs      | 11/10/2020 |
| Implement MVP JS code     | 4hrs      | 11/12/2020 |
| QA.                       | 3hrs      | 11/12/2020 |
| Research graph displays   | 4hrs      | 11/13/2020 |
| Add graph to app          | 4hrs      | 11/13/2020 |
| Add trivia question       | 2hrs      | 11/16/2020 |
| Deploy                    | 2hrs      | 11/16/2020 |
| Present                   | 1hr       | 11/17/2020 |

      
      
      
### STEP 3: Make a New Repo
1. [Make a new **personal** GitHub repo for your project](https://help.github.com/articles/create-a-repo/). **DO NOT FORK THIS REPO.** 
2. This new repo should be under your **personal** Github, NOT your General Assembly Github account.
2. Make sure your new repo is set to "Public" and initialize it with a README.md file. **This will be your project worksheet.**
3. Send a link for your repository to your Squad Leader.
4. After your have been approved, clone this new repository down to your machine.
5. CD into the project directory and touch ```index.html```, ```style.css``` and ```script.js``` files.
6. Test a commit and push it to make sure everything is connected with ```git commit -m "My Garnet Project 1!"```.

Note: Your repository should **not** be called `project-1`! Think of a name for your application, and then name your repository after your application. 

### STEP 4: &#x1F534; Build Your Project MVP — Mandatory To Pass

#### Your application must meet these requirements:

  1. Built with HTML, CSS, and JavaScript.
  1. Styled using `Flexbox` or `Grid`.
  1. Use Axios to make a request to an external data source and insert some of the retrieved data on to the DOM.
  1. Implement responsive design using at least one media query/breakpoint (i.e. desktop, tablet, mobile, etc).
  1. Fulfill the build requirements you have specified in your MVP.
  1. Deployed site to a hosting service like [Github Pages](https://pages.github.com/).
  1. Make commits to GitHub every day.
  1. A `README.md` file that contains your project worksheet, a link to your live, deployed site, and any necessary installation instructions such as ```npm i```.

#### 📋 List of APIs

Below is a non-exhaustive list of some free APIs you can use. There are _many_ APIs out there, however, so if you find one not on this list, feel free to use it. No matter what API you decide on, make sure you can successfully make a GET request before you commit to using it.

  1. Weather: https://openweathermap.org/api
  1. News: https://newsapi.org/
  1. Giphy: https://developers.giphy.com/
  1. Pokemon: http://pokeapi.co/
  1. Card Deck: https://deckofcardsapi.com/
  1. City of Chicago: https://data.cityofchicago.org/
  1. Beer: https://www.brewerydb.com/developers
  1. NYC Open Data: https://opendata.cityofnewyork.us/
  1. Rick and Morty: https://rickandmortyapi.com/documentation/#rest
  
[This site](https://github.com/toddmotto/public-apis) lists a collection APIs as well. Take a look through their libraries and try to find one that interests you. Please note, however, that many APIs will require an authentication key, and some APIs require payment. We **highly suggest** using a free API for your first project dealing with one.

### STEP 5: &#x1F535; Ideas for Post-MVP - Not Mandatory
- Look into [localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) so you can save data to the user's browser 
- Add a second API.
- Add creative use of event listeners and UI interaction.
- Add animations.
- Get input from a UX student on how to make your app have intuitive UI and design.

### STEP 6: Technical Demonstration

All projects will be presented to the class.  Your presentation should:

* Be no longer than 5 minutes in length
* Show off all features of the app
* Explain the technical details
* Explain the technical challenges
* Explain which improvements you might make

Your presentation should **NOT**:
* Focus on what you didn't accomplish.

You will be sharing your project and your code.  Be prepared to answer questions from the instructors and other students.

Did you read all of the directions before starting? If so write `git commit -m "My Garnet Project 1"` instead of `git commit -m "first commit"` for your first commit.

### Step 7: Help and Support

1. Each student will be given 5 (five) tokens, redeemable at any time during regular class time (subject to instructors' schedules), for 20 minutes. **Tokens cannot be transferred between students - there is no secondary market for tokens.**

1. Give at least a 10 minutes heads up to an instructor with the link to your project repo and a link to your `issue` ticket. Instructors will not be holding open office hours during project week. This is to allow you to solve issues and errors you run in to on your own and with your classmates. 

1. [Project approval sign up form](https://docs.google.com/forms/d/e/1FAIpQLSeZ2sjTXCI3w5NDsLt8rDnJlZs79Indj6abNdYBBaynLdCefw/viewform)

1. [Sign up here for help with your squad lead.](https://docs.google.com/forms/d/e/1FAIpQLSei27kMlH6M0TsgPN_aUf4rOIFjM53KJsmtq8UEGEBUxfFx_Q/viewform)

### Step 8: Grading

#### Hard Requirements

The following requirements **_must_** be met in order for the project to be
considered complete:

- The project is deployed to GitHub Pages or a custom domain
- The application renders in the browser and runs without errors
- The repo has a README that adequately documents the project

We do not give letter grades; it is either a pass/fail. The real benchmark is how much you grow and learn each unit. 

You will receive feedback in a secret gist. The gist will be Slacked out independent of your P1 repo to keep feedback confidential. 

An example of the gist can be found here: [Secret Gist](https://gist.git.generalassemb.ly/SteveVW/6b49d9b08d1edcd203609d843eb8b97f)

If you would like more feedback than the gist, instructors will be available to meet one on one. Please feel free to reach out and schedule a time with your squad leader. 

### Incomplete Projects

Incomplete projects will be given an extension. An instructor will follow up with you to discuss the details of the resubmission.  **Note that you are allowed one extension on only one of the four projects.**

<br>

## PLAGIARISM

Remember. We have a **zero-tolerance policy** towards plagiarism. More on our plagiarism policy can be found in our course wiki's [plagiarism page](https://gist.git.generalassemb.ly/SteveVW/7b780310c82d10df98a4e620abbfbfec).
