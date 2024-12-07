export default function openModalPhoto(
    sliderTag = '.achievements-slider',
    popupTag = '.achievements__popup'
) {
    if (document.querySelector(sliderTag)) {
        const slider = document.querySelector(sliderTag);
        const modalWindow = document.querySelector(popupTag);

        slider.addEventListener('click', function (event) {
            let windowSize = Number(window.innerWidth);
            //проверяем, что разрешение экрана достаточно для нормального показа
            if (windowSize >= 576) {
                if (event.target.matches(`${sliderTag}__image img`)) {
                    //генерируем код модального окна
                    let popupBody = `<div class="modal-window">
                                <div class="modal-window__wrapper">
                                    <div class="modal-window__body">
                                        <div class="modal-window__content">
                                            <div class="modal-window__image">
                                                <img src="${event.target.src}" alt="Фото">
                                            </div>
                                            <div class="modal-window__close">
                                                <div class="modal-window__line"></div>
                                                <div class="modal-window__line"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`;

                    //записываем в контекст 
                    modalWindow.innerHTML = popupBody;

                }
            }
        });

        //закрываем окно
        modalWindow.addEventListener('click', function (event) {
            if (modalWindow.querySelector('.modal-window')) {
                if (event.target.closest('.modal-window')
                    && !event.target.closest('.modal-window__image')) {
                    modalWindow.innerHTML = '';
                }
            }

        });

        //закрываем окно по нажатию клавиши escape
        document.addEventListener('keyup', function (event) {
            if (event.key === 'Escape') {
                if (modalWindow.querySelector('.modal-window')) {
                    modalWindow.innerHTML = '';
                }
            }
        });
    }
}
