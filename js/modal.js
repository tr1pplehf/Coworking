const openModalBtns = document.querySelectorAll('[data-action="modal"]');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('#closeModal');
const modalBody = document.querySelector('.modal__body');

// Функция открытия модального окна
function openModal () {
    modal.classList.add('modal--open');
    document.body.classList.add('no-scroll');
}

// Функция закрытия модального окна
function closeModal() {
    modal.classList.remove('modal--open');
    document.body.classList.remove('no-scroll');
}

// Открытие модального окна при нажатии на кнопку
openModalBtns.forEach(function (i) {
    i.addEventListener('click', openModal);
});

// Закрытие модального окна при нажатии на кнопку
closeModalBtn.addEventListener('click', closeModal);

// Закрытие модального окна при клике на оверлей
modal.addEventListener('click', closeModal);

// Чтобы модалка не закрывалась при клике на само модальное окно
modalBody.addEventListener('click', function (e) {
    event.stopPropagation();
})

// Закрываем модалку нажатием Escape
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) {
        closeModal();
    }
})
