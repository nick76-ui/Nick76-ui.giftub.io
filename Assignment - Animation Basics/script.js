const toggleBtn = document.getElementById('toggleBtn');
const panel = document.querySelector('.panel');

toggleBtn.addEventListener('click', function() {
    panel.classList.toggle('show');
    
    if (panel.classList.contains('show')) {
        toggleBtn.textContent = 'Hide Panel';
    } else {
        toggleBtn.textContent = 'Show Panel';
    }
});
