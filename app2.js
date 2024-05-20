document.addEventListener('DOMContentLoaded', () => {
    var add = document.querySelector('.add-container');
    var body = document.querySelector('.body');
    var cantidad = 0;

    add.addEventListener('click', () => {
        var contenedor = document.createElement('section');
        contenedor.classList.add('add-dataImg');
        contenedor.innerHTML = `
            <div class="dataImg-container">
                <div class="dataTravel-img">
                    <img src="./icons/add_photo_alternate_48dp_FILL0_wght400_GRAD0_opsz48.svg" alt="">
                    <div>
                        <img class="iconWeb" src="./icons/icons8-web-48.png" alt="">
                        <img class="iconDesktop" src="./icons/icons8-carpeta.svg" alt="">
                    </div>
                </div>
                <div class="button-salir">
                    <button>
                        <img class="salir" src="./img/icons8-x-48.png" alt="">
                    </button>
                </div>
            </div>
        `;
        body.appendChild(contenedor);
    });

    body.addEventListener('click', (e) => {
        var iconWeb2 = document.querySelector('.iconWeb');
        var iconDesktop2 = document.querySelector('.iconDesktop');
        var iconWeb = e.target.closest('.iconWeb');
        var iconDesktop = e.target.closest('.iconDesktop');

        if (iconWeb || iconDesktop) {
            var dataImgContainer = e.target.closest('.dataImg-container');
            iconWeb && iconWeb.classList.add('display');
            iconDesktop && iconDesktop.classList.add('display');

            var dataImgWeb = document.createElement('div');
            dataImgWeb.classList.add('dataTravel-text');
            if (iconWeb) {
                iconWeb2.classList.add('display');
                iconDesktop2.classList.add('display');
                dataImgWeb.innerHTML = `
                    <div>
                        <label for="lugar">Lugar</label>
                        <input id="lugar" type="text">
                    </div>
                    <div>
                        <label for="link">Link</label>
                        <input id="link" type="text" placeholder="URL">
                    </div>
                    <div>
                        <label for="date">Fecha</label>
                        <input id="date" type="date">
                    </div>
                    <button class="agregarImgWeb">Agregar</button>
                `;
            } else if (iconDesktop) {
                iconWeb2.classList.add('display');
                iconDesktop2.classList.add('display');
                dataImgWeb.innerHTML = `
                    <div>
                        <label for="lugar">Lugar</label>
                        <input id="lugar" type="text">
                    </div>
                    <div class="input-imgDesktop">
                        <input type="file" id="fileInput1">
                    </div>
                    <div>
                        <label for="date">Fecha</label>
                        <input id="date" type="date">
                    </div>
                    <button id="viewImageButton" class="agregarImgDesktop">Agregar</button>
                `;
            }
            dataImgContainer.appendChild(dataImgWeb);
            cantidad++;
            console.log(cantidad);
        }

        if (e.target.classList.contains('agregarImgWeb') || e.target.classList.contains('agregarImgDesktop')) {
            var contenedor = e.target.closest('section');
            var containerMain = document.querySelector('.main');
            var lugar = contenedor.querySelector('#lugar').value;
            var date = contenedor.querySelector('#date').value;
            var article = document.createElement('article');
            article.classList.add('article-img');
            article.id = `${cantidad}`;

            if (e.target.classList.contains('agregarImgWeb')) {
                var link = contenedor.querySelector('#link').value;
                article.innerHTML = `
                <div class="img" style="
                background-image: url('${link}');
                background-position: center;
                background-size: cover;
            ">
            </div>
                    <div class="article-text">
                        <p>${lugar}</p>
                        <p>${date}</p>
                    </div>
                    <div class="clear">
                        <img class="clearImg" src="./icons/icons8-x-64.png" alt="">
                    </div>
                `;
                containerMain.appendChild(article);
            } else {
                var input = document.getElementById('fileInput1');
                if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        article.innerHTML = `
                        <div class="img" style="
                        background-image: url('${e.target.result}');
                        background-position: center;
                        background-size: cover;
                    ">
                    </div>
                            <div class="article-text">
                                <p>${lugar}</p>
                                <p>${date}</p>
                            </div>
                            <div class="clear">
                                <img class="clearImg" src="./icons/icons8-x-64.png" alt="">
                            </div>
                        `;
                        containerMain.appendChild(article);
                    }
                    reader.readAsDataURL(input.files[0]);
                }
            }
            body.removeChild(contenedor);
        }

        if (e.target.classList.contains("salir")) {
            var contenedor = e.target.closest('section');
            body.removeChild(contenedor);
            cantidad--;
        }

        if (e.target.classList.contains('clear')) {
            console.log(e.target.parentElement)
            var childClear = e.target.parentElement;
            childClear.classList.add('display');
        }
        if (e.target.classList.contains('clearImg')) {
            console.log(e.target.parentElement.parentElement)
            var childClearImg = e.target.parentElement.parentElement;
            childClearImg.classList.add('display');
        }
    });

});
