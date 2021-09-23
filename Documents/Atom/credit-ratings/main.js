const container = document.querySelector('.container');
///////////////////////////Call data//////////////////////////
Promise.all([
  fetch('https://api.tradingeconomics.com/ratings/qatar,united%20arab%20emirates,saudi%20arabia,kuwait,turkey?c=guest:guest&format=json'),
  fetch('https://api.tradingeconomics.com/historical/country/qatar,saudi%20arabia,kuwait/indicator/gdp?c=guest:guest'),
  fetch('https://api.tradingeconomics.com/historical/country/united%20arab%20emirates,turkey/indicator/gdp?c=guest:guest'),
]).then(([ratings, gdp1, gdp2]) => {
  processRates(ratings.json());
  processGdp(gdp1.json());
  processGdp(gdp2.json());
}).catch(error => console.log(`Error in promises ${error}`))

let processRates = promise => {
  promise.then(data => {
    console.log(data)
    data.forEach((country, i) => {
      let countryContainer = document.createElement('div');
      countryContainer.className = 'countryContaner';

      let countryName = document.createElement('h2');
      countryName.textContent = country.Country;
      countryName.className = 'countryName';

      let countryData = document.createElement('div');
      countryData.className = 'countryData';

      let ratingSection = document.createElement('div');
      ratingSection.className = 'ratingSection';

      let spRating = document.createElement('h4');
      spRating.innerHTML = "S&P: <br>" + country.SP + '<br>' + country.SP_Outlook + ' outlook';
      spRating.className = 'spRating';
      let fitchRating = document.createElement('h4');
      fitchRating.innerHTML = "Fitch: <br>" + country.Fitch + '<br>' + country.Fitch_Outlook + ' outlook';
      fitchRating.className = 'fitchRating';
      let moodysRating = document.createElement('h4');
      moodysRating.innerHTML = "Moodys: <br>" + country.Moodys + '<br>' + country.Moodys_Outlook + ' outlook';
      moodysRating.className = 'fitchRating';

      container.appendChild(countryContainer);
      countryContainer.appendChild(countryName);
      countryContainer.appendChild(countryData);
      countryData.appendChild(ratingSection);

      ratingSection.appendChild(spRating);
      ratingSection.appendChild(fitchRating);
      ratingSection.appendChild(moodysRating);
    });
  })
}


let processGdp = promise => {
  promise.then(data => {
    console.log(data)

    //data.forEach((country, i) => {
    //  if(country.Category == 'GDP') {
    //    let gdp = country.Value;
    //  } else if (country.Category == 'Population') {
    //    let population = country.Value;
    //  }
    //  console.log(gdp)
    //});
  })
}


///////////////////////////Animations//////////////////////////
