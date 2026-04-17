const square = document.querySelector('.square');

document.getElementById('playBtn').onclick = function() {
    square.classList.remove('paused');
};
//document.getElementById('playBtn').addEventListener('click', (e) => {

document.getElementById('stopBtn').onclick = function() {
    square.classList.add('paused');
};
