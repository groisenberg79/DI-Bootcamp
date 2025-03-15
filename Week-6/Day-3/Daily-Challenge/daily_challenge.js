async function fetchCurrencies() {
  try {
    const currencies = await fetch(
      "https://v6.exchangerate-api.com/v6/858a24cde232f277e887ed4a/codes"
    );
    const js_currencies = await currencies.json();
    console.log(js_currencies);
    return js_currencies;
  } catch (error) {
    throw new Error(`Failed to fetch currencies: ${error}`);
  }
}

// populate the selection dropdown menus
async function makeExchangeOptions(parent_id) {
  const currencies_database = await fetchCurrencies();
  const parent = document.querySelector(`${parent_id}`);

  for (let currency of currencies_database.supported_codes) {
    const option = document.createElement("option");
    option.setAttribute("value", currency[0]);
    option.innerHTML = `${currency[0]} - ${currency[1]}`;
    parent.appendChild(option);
  }
}

// obtain the conversion result
async function fetchExchange(base_cur, target_cur, amount) {
  const exchange_rate = await fetch(
    `https://v6.exchangerate-api.com/v6/858a24cde232f277e887ed4a/pair/${base_cur}/${target_cur}/${amount}`
  );
  const js_exchange_rate = await exchange_rate.json();
  console.log(js_exchange_rate);
  return js_exchange_rate.conversion_result;
}

// convert for especific elements given by the user
async function convert() {
  const base_cur = document.querySelector("#base-currency").value;
  const target_cur = document.querySelector("#target-currency").value;
  const amount = document.querySelector("#amount").value;

  const conversion_result = await fetchExchange(base_cur, target_cur, amount);
  return conversion_result;
}

// add listener to input form and show result on DOM
function outputListener() {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const target_cur = document.querySelector("#target-currency").value;
    const output = convert()
      .then((result) => {
        console.log(result);
        return result;
      })
      .then((result) => {
        const output_area = document.querySelector("#output-area");
        output_area.innerHTML = result + " " + target_cur;
      });
  });
}

async function init() {
  await makeExchangeOptions("#base-currency");
  await makeExchangeOptions("#target-currency");
}

init().then(outputListener());
