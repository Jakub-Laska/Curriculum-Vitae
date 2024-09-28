let submitBtn = document.querySelector('#loginBtn');
let bodyLoading = document.querySelector('#bodyLoading');
let backgroundVideo = document.querySelector('.backgroundVideo');
let login = document.querySelector('#login');
submitBtn.addEventListener('click', loadingScreen);

function loadingScreen() {
    backgroundVideo.style.display = 'none';
    login.style.display = 'none';
    bodyLoading.style.display = 'block';
}