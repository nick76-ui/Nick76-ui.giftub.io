const enableAnimationBtn = document.getElementById('enableAnimationBtn');
const container = document.querySelector('.container');

enableAnimationBtn.addEventListener('click', function() {
    container.classList.toggle('enable-animation');
    
    if (container.classList.contains('enable-animation')) {
        enableAnimationBtn.textContent = 'Disable Animation';
    } else {
        enableAnimationBtn.textContent = 'Enable Animation';
    }
});

