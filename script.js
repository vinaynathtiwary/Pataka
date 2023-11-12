const Ro_cat = document.getElementById("Ro_cat");
const phata1baaraur = document.getElementById("phata1baaraur");
const phata = document.getElementById("phata");
const share = document.getElementById("share");
var audio = new Audio("awaz.mp3");
Ro_cat?.addEventListener("click", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const meranaam = urlParams.get("name");
  Ro_cat.style.bottom = "80%";
  audio.play();
  setTimeout(() => {
    Ro_cat.style.display = "none";
    phata1baaraur.style.transform = "scale(1)";
    phata.style.opacity = "1";
    phata1baaraur.style.opacity = "1";
    if (meranaam) phata.innerText = `Happy Diwali ${meranaam}`;
  }, 3500);
});

share?.addEventListener("click", () => {
  navigator.share({
    title: "Happy Diwali",
    url: "https://vinaynathtiwary.github.io/Pataka",
  });
});

const Submit = document.getElementById("Submit");
Submit?.addEventListener("click", () => {
  const name = document.getElementById("naamDalDiya");
  window.location.href = `https://vinaynathtiwary.github.io/Pataka/rocket.html?name=${name.value}`;
});
