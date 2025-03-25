function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#friendship-poem", {
    strings: "I will not play at tug o’ war",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
