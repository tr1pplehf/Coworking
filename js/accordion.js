// Находим все блоки для аккордеона
const topics = document.querySelectorAll('.topic');

// Обходим все блоки аккордеона
topics.forEach(function (topic) {
    topic.addEventListener('click', function (e) {  // Прослушка
        if (e.target.closest('.topic__btn')) {
            const toggleResult = topic.classList.toggle('.topic--open');

            const content = topic.querySelector('.topic__content');
            const img = topic.querySelector('.topic__icon');

            if (toggleResult) {
                img.src = './img/icons/btn-minus.svg';
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                img.src = './img/icons/btn-plus.svg';
                content.style.maxHeight = '0px';
            }
            
        }
    })
})