const apikey = "Qn2sqIb33mPOEeH4Is1s5X0h9MOdBOA7";
const searchTerm = "cats";
const img = document.querySelector("img");
const searchButton = document.querySelector("button");
const inputBox = document.querySelector("input");

async function giphy(search = searchTerm) {
  await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${apikey}&s=${search}`
  )
    .then((response) => {
      // createP(response);
      console.log(response);
      response.json().then((json) => {
        img.src = `${json.data.images.original.url}`;
      });
    })
    .catch((err) => console.log("shiit" + err));
}
giphy();
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  giphy(inputBox.value);
});
