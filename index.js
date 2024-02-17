const buttons = document.getElementById("buttons");
const stateslist = document.getElementById("states");

fetch("https://api.jsonbin.io/v3/b/65d06319266cfc3fde8b6fc1")
  .then((response) => response.json())
  .then((data) => {
    data.record.record.forEach((countryData) => {
      const countrybutton = document.createElement("button");
      countrybutton.textContent = countryData.country;
      buttons.appendChild(countrybutton);
      countrybutton.addEventListener("click", () => {
        // Clear previous state list
        stateslist.innerHTML = "Data Loading from backend ...";
        setTimeout(() => {
          stateslist.innerHTML = "";
          countryData.states.map((state) => {
            const stateItem = document.createElement("li");
            stateItem.textContent = state;
            stateslist.appendChild(stateItem);
          });
        }, 1000);
        // Iterate over the states of the selected country
      });
    });
  });
