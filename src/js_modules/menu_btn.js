export default function openMenu() {
    //проверяю наличие элементов на странице
    if (document.querySelector('.main-menu__btn')
        && document.querySelector('.main-menu__btn-close')
        && document.querySelector('.main-menu__menu')) {
        const btn = document.querySelector('.main-menu__btn');
        const closeBtn = document.querySelector('.main-menu__btn-close');
        const menu = document.querySelector('.main-menu__menu');

        btn.addEventListener('click', function (event) {
            if (event.target.closest('.main-menu__btn')) {
                closeBtn.classList.add('main-menu__btn-close--visible');
                menu.classList.add('main-menu__menu--visible');
            }
        });

        document.addEventListener('click', function (event) {
            if (document.querySelector('.main-menu__menu--visible')){
                if (!event.target.matches('.main-menu__menu')
                    && !event.target.closest('.main-menu__btn')) {

                    closeBtn.classList.remove('main-menu__btn-close--visible');
                    menu.classList.remove('main-menu__menu--visible');
                }
            }
        });

        document.addEventListener('keyup', function (event){
            if (document.querySelector('.main-menu__menu--visible')){
                if (event.key === 'Escape'){
                    closeBtn.classList.remove('main-menu__btn-close--visible');
                    menu.classList.remove('main-menu__menu--visible');
                }
            }
        });
    }
}
