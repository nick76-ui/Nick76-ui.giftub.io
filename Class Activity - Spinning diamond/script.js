const diamond = document.querySelector('.diamond');
const btn = document.getElementById('toggle');
btn.onclick = () => {
    diamond.classList.toggle('rotating');
    btn.textContent = diamond.classList.contains('rotating') ? 'Pause' : 'Play';
    btn.classList.toggle('pause');
};
