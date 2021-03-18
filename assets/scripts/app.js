const welcome = document.querySelector(".firstView h2");
const formFill = document.querySelectorAll(".formContainer input");

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

if (urlParams.has("name", "email")) {
  welcome.textContent = "välkomnar  " + urlParams.get("name") + "  till...";
  formFill[0].value = urlParams.get("name");
  formFill[1].value = urlParams.get("email");
}
