const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);
generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      accept: "application/json",
    },
  };
  //async fetching looks cleaner than having .then
  const result = await fetch("https://icanhazdadjoke.com", config);

  const data = await result.json();

  jokeEl.innerHTML = data.joke;
}

/*function generateJoke() {
  const config = {
    headers: {
      accept: "application/json",
    },
  };

  fetch("https://icanhazdadjoke.com", config)
    .then((response) => response.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke;
    });
}*/
