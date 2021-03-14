const cardContainer = document.querySelector(".card");
const button = document.querySelector(".search-btn");

const getCountryData = (name) => {
  fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then((res) => res.json())
    .then((data) => {
      const countryData = data[0];
      const html = `
        <img
        src="${countryData.flag}"
        alt="Flag"
        class="country-flag"
        />
        <div class="info">
        <h3 class="country-name">${countryData.name}</h3>
        <p class="country-cap">🏛️ ${countryData.capital}</p>
        <p class="country-pop">👪 ${(countryData.population / 1000000).toFixed(
          1
        )}M</p>
        <p class="country-currency">💰 ${countryData.currencies[0].name}</p>
        <p class="country-lang">🗣️ ${countryData.languages[0].name}</p>
        </div>`;
      cardContainer.innerHTML = html
//       cardContainer.insertAdjacentHTML("beforeend", html);
    });
};

button.addEventListener("click", () => {
  const text = document.querySelector(".country-search").value;
  getCountryData(text);
});
