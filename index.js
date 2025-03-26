function displayPoem(responce) {
  new Typewriter("#friendship-poem", {
    strings: responce.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "d0abb40f949d3e5e54983cob5a3ct305";

  let context =
    "You are an extrovert that is able to my friends very easily wherever you go. You also love to write short poems. Please write a 4 line poem. Please follow the user instructions.";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}. Please sign with "Shecodes AI" at the end of the poem .`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");
  console.log(`prompt:${prompt}`);
  console.log(`context:${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
