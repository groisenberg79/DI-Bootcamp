const form = document.querySelector("form");

// add event listener to fetch the gif when clicking 'search'
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user_input = document.querySelector("input").value;
  fetchGIF(user_input);
});

// add event listener to delete all gifs when clicking 'delete all'
form.addEventListener("reset", () => {
  const gifs = document.querySelector(".gifs");
  gifs.innerHTML = "";
});

async function fetchGIF(tag) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?tag=${tag}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
    );
    const data = await response.json();
    appentGif(data);
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  }
}

function appentGif(data) {
  const gifs = document.querySelector(".gifs");

  const gif = document.createElement("div");
  gif.className = "gif";

  const img = document.createElement("img");
  img.src = data.data.images.fixed_height.url;

  const delete_button = document.createElement("button");
  delete_button.innerHTML = "delete";
  // to each delete button, add an event listener that deletes the parent (gif) node
  delete_button.addEventListener("click", () => {
    const parent_div = delete_button.parentElement;
    parent_div.remove();
  });

  gif.appendChild(delete_button);
  gif.appendChild(img);
  gifs.appendChild(gif);
}
