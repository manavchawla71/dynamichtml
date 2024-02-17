const buttons = document.getElementById("buttons");
const stateslist = document.getElementById("states");

fetch("https://api.jsonbin.io/v3/b/64344f54ace6f33a22087613")
  .then((response) => response.json())
  .then((data) => {
    data.record.forEach((countryData) => {
      const countrybutton = document.createElement("button");
      countrybutton.textContent = countryData.country;
      buttons.appendChild(countrybutton);

      countrybutton.addEventListener("click", () => {
        // Clear previous state list
        stateslist.innerHTML = "";

        // Iterate over the states of the selected country
        countryData.states.map((state) => {
          const stateItem = document.createElement("li");
          stateItem.textContent = state;
          stateslist.appendChild(stateItem);
        });
      });
    });
  });
