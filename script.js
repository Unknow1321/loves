document.addEventListener('DOMContentLoaded', function() {
    const nextBtn = document.getElementById('nextBtn');
    const openLetterBtn = document.getElementById('openLetterBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');
    const screen3 = document.getElementById('screen3');
    const catPaw = document.getElementById('catPaw');
    const heartsContainer = document.querySelector('.hearts-container');

    // Первый экран - переход к письму
    nextBtn.addEventListener('click', function() {
        screen1.classList.add('hidden');
        screen2.classList.remove('hidden');
    });

    // Открыть письмо
    openLetterBtn.addEventListener('click', function() {
        screen2.classList.add('hidden');
        screen3.classList.remove('hidden');
        createHearts();
    });

    // Не открывать письмо
    cancelBtn.addEventListener('click', function() {
        catPaw.classList.remove('hidden');
        cancelBtn.classList.add('hidden');
        
        setTimeout(() => {
            catPaw.classList.add('hidden');
            cancelBtn.classList.remove('hidden');
        }, 1500);
    });

    // Создание сердечек
    function createHearts() {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.innerHTML = '❤️';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
                heartsContainer.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 3000);
            }, i * 200);
        }
    }
});