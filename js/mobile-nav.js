const mobileNavBtnOpen = document.querySelector('#navBtnOpen');
const mobileNav = document.querySelector('#mobile-nav');
const mobileNavBtnClose = document.querySelector('#mobileNavBtnClose');
const mobileNavLinks = mobileNav.querySelectorAll('a, button');

mobileNavBtnOpen.addEventListener('click', function () {
    mobileNav.classList.add('mobile-nav--open');
    document.body.classList.add('no-scroll');
})

mobileNavBtnClose.addEventListener('click', function () {
    mobileNav.classList.remove('mobile-nav--open');
    document.body.classList.remove('no-scroll');
})

mobileNavLinks.forEach(function (i) {
    i.addEventListener('click', function () {
        mobileNav.classList.remove('mobile-nav--open');
        document.body.classList.remove('no-scroll');
    })
})