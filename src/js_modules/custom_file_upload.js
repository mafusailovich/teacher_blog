export function oneFileUpload(selector = '.material__preview') {
    const baseContainer = document.querySelector(selector);
    const input = baseContainer.querySelector(`${selector} input`);
    const fileName = baseContainer.querySelector('.material__input');
    input.addEventListener('change', function (event) {
        if (event.target.files && event.target.files.length) {
            const fileInfo = event.target.files[0];
            fileName.innerText = fileInfo.name;
        }
    });
}

export function anyFilesUpload() {
    if (document.querySelector('.material__drop-zone')) {
        const dropZone = document.querySelector('.material__drop-zone');
        const input = document.querySelector('.material__drop-input');
        const hoverClassName = 'material__drop-zone--hover';

        dropZone.addEventListener("dragenter", function (event) {
            event.preventDefault();
            dropZone.classList.add(hoverClassName);
        });

        dropZone.addEventListener("dragover", function (event) {
            event.preventDefault();
            dropZone.classList.add(hoverClassName);
        });

        dropZone.addEventListener("dragleave", function (event) {
            event.preventDefault();
            dropZone.classList.remove(hoverClassName);
        });

        function countUploadedFiles(files = 0) {
            dropZone.innerHTML = `<div class="material__drop-count">
                <p class="material__drop-text">Количество загруженных файлов: ${files}</p>
                </div>`
        }

        function resetDropContent() {
            dropZone.innerHTML = `<svg class="material__drop-img" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960"
                                    width="40px" fill="#020438">
                                    <path
                                        d="M254-160q-89 0-151.5-62T40-373q0-78.67 49.33-138 49.34-59.33 125.34-73 15.66-80 83-144.67 67.33-64.66 149.66-64.66 27 0 46.84 16.83Q514-759.67 514-733.33v276.66l76.67-76L638-485.33 480.67-328 323.33-485.33l47.34-47.34 76.66 76V-730Q364.67-718 318-655.17q-46.67 62.84-46.67 133.84H252q-60 0-102.67 42.33-42.66 42.33-42.66 105t43.66 105Q194-226.67 254-226.67h493.33q44 0 75-31t31-75q0-44-31-75t-75-31h-62v-82.66q0-61.34-29.33-108.17t-76-75.83v-74.34q78.67 31 125.33 101.84Q752-607 752-521.33v16q71 1.33 119.5 50.5Q920-405.67 920-332.67q0 71-50.83 121.84Q818.33-160 747.33-160H254Zm226-350.67Z" />
                                </svg>
                                <p class="material__drop-text">Перетащите файлы в эту зону или нажмите кнопку ОБЗОР для выбора файлов</p>`;
        }

        dropZone.addEventListener("drop", function (event) {
            event.preventDefault();
            dropZone.classList.remove(hoverClassName);
            input.files = event.dataTransfer.files;
            countUploadedFiles(input.files.length);
        });

        input.addEventListener('change', function (event) {
            if (event.target.files && event.target.files.length) {
                countUploadedFiles(this.files.length);
            }
        });
    }
}

