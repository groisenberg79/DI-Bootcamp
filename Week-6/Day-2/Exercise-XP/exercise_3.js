async function getStarship() {
  let response = await fetch("https://www.swapi.tech/api/starships/9/");
  let js_response = await response.json();
  let data = js_response.result;
  console.log(data);
}
getStarship();
