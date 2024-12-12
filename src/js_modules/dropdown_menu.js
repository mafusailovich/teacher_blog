function selectFormItems (param){
    const baseSelector = 'material';
    const invisible =`${baseSelector}__invisible`;
    const items = document.querySelectorAll('.material__add-form > div');
    //делаем все невидимым, кроме выбора раздела
    for (let item of items){
        if (!item.classList.contains('material__select')){
            item.classList.add(invisible);
        }
    }
    //список для селекторов
    let selectors = [];
    //выбор разделов формы в зависимости от пунктов списка
    switch (param){
        case 'events':
            selectors = [
                `${baseSelector}__name`, 
                `${baseSelector}__preview`,
                `${baseSelector}__text-content`,
                `${baseSelector}__photo-gallery`,
                `${baseSelector}__submit`];
            break;
        
        case 'parents':
            selectors = [
                `${baseSelector}__name`, 
                `${baseSelector}__document-pdf`,
                `${baseSelector}__submit`];
            break;

        case 'teachers':
            selectors = [
                `${baseSelector}__name`, 
                `${baseSelector}__document-pdf`,
                `${baseSelector}__submit`];
            break;

        case 'achievement':
            selectors = [
                `${baseSelector}__achievement`,
                `${baseSelector}__submit`];
            break;
    }

    
    //перебираем элементы формы и делаем видимыми все элементы и списка
    for (let item of items){
        selectors.forEach(function(selector){
            if (item.classList.contains(selector)){
                item.classList.remove(invisible);
            }
        });
    }
}

function manageSelect(param){
    const manage = document.querySelector('.manage__materials');
    const baseSelector = '.manage__material';
    const items = manage.querySelectorAll('ul');
    //делаем все невидимым, кроме выбора раздела
    for (let item of items){
        item.classList.add('invisible');
    }
    let selector = null;
    //выбор разделов формы в зависимости от пунктов списка
    switch (param){
        case 'events':
            selector = `${baseSelector}--events`;
            break;
        
        case 'parents':
            selector = `${baseSelector}--parents`;
            break;

        case 'teachers':
            selector = `${baseSelector}--teachers`;
            break;

        case 'achievement':
            selector = `${baseSelector}--achievements`;
            break;
    }

    
    //перебираем элементы формы и делаем видимыми все элементы и списка
    manage.querySelector(selector).classList.remove('invisible');
}

export default function dropdown() {
    if (document.querySelector('.dropdown')) {
        const dropdowns = document.querySelectorAll('.dropdown');
        for (let dropdown of dropdowns) {
            const dropdownBtn = dropdown.querySelector('.dropdown__btn');
            const dropdownList = dropdown.querySelector('.dropdown__list');
            const dropdownInput = dropdown.querySelector('.dropdown__hide-input');

            dropdownBtn.addEventListener('click', function () {
                dropdownList.classList.toggle('dropdown__list--visible');
            });

            dropdownList.addEventListener('click', function (event) {
                if (event.target.matches('.dropdown__list-item')) {
                    dropdownBtn.innerText = event.target.innerText;
                    dropdownInput.value = event.target.dataset.value;
                    dropdownList.classList.remove('dropdown__list--visible');
                    //вызываю функцию выбора того, что показывать
                    if (document.querySelector('.manage')){
                        manageSelect(dropdownInput.value);
                    } else {
                        selectFormItems(dropdownInput.value);
                    }
                }
            });

            document.addEventListener('click', function (event) {
                if (event.target !== dropdownBtn) {
                    dropdownList.classList.remove('dropdown__list--visible');
                }
            });

            document.addEventListener('keyup', function (event) {
                if ((event.key === 'Escape' || event.key === 'Tab')
                    && dropdownList.classList.contains('dropdown__list--visible')) {
                    dropdownList.classList.remove('dropdown__list--visible');
                }
            });
        }
    }
}