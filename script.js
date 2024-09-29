//loading screen
let submitBtn = document.querySelector("#loginBtn");
submitBtn.addEventListener("click", showLoadingScreen);

function showLoadingScreen() {
  let bodyLoading = document.querySelector("#bodyLoading");
  let backgroundVideo = document.querySelector(".backgroundVideo");
  let login = document.querySelector("#login");

  backgroundVideo.style.display = "none";
  login.style.display = "none";
  bodyLoading.style.display = "block";
  setTimeout(showInterface, 1);
}

let loginInput = document.querySelector("#loginInput");
loginInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    showLoadingScreen();
  }
});

function showInterface() {
    let bodyInterface = document.querySelector('#interface')

    bodyLoading.style.display = 'none';
    bodyInterface.style.display = 'block';
}