function darkMode() {
    let element = document.body
    element.dataset.bsTheme = element.dataset.bsTheme == "light" ? "dark" : "light"
}

const front = document.querySelector('#tabFront')
const back = document.querySelector('#tabBack')

function listarFront() {
    fetch('../../projetos.json')
        .then(response => response.json())
        .then(dados => {
            console.log(dados.front)
            dados.front.map((item) => {
                const card = document.createElement('div')
                card.innerHTML = `
                <div class="card" style="width: 18rem;">
                        <img src=${item.imagem} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${item.titulo}</h5>
                            <p class="card-text">${item.descricao}</p>
                            <div>
                                <a href=${item.git} class="btn btn-primary">GitHub</a>
                                <a href=${item.demo} class="btn btn-primary">Demo</a>
                            </div>
                        </div>
                    </div>
                `
                front.appendChild(card)
            })
        })
}

listarFront()

function listarBack() {
    fetch('../../projetos.json')
        .then(response => response.json())
        .then(dados => {
            console.log(dados.back)
            dados.back.map((item) => {
                const card = document.createElement('div')
                card.innerHTML = `
                <div class="card" style="width: 18rem;">
                        <img src=${item.imagem} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${item.titulo}</h5>
                            <p class="card-text">${item.descricao}</p>
                            <div>
                                <a href=${item.git} class="btn btn-primary">GitHub</a>
                                <a href=${item.demo} class="btn btn-primary">Demo</a>
                            </div>
                        </div>
                    </div>
                `
                back.appendChild(card)
            })
        })
}

listarBack()