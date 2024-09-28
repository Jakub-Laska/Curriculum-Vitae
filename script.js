//loading screen
let submitBtn = document.querySelector("#loginBtn");
submitBtn.addEventListener("click", loadingScreen);

function loadingScreen() {
  let bodyLoading = document.querySelector("#bodyLoading");
  let backgroundVideo = document.querySelector(".backgroundVideo");
  let login = document.querySelector("#login");
  
  backgroundVideo.style.display = "none";
  login.style.display = "none";
  bodyLoading.style.display = "block";
}

let loginInput = document.querySelector("#loginInput");
loginInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    loadingScreen();
  }
});
