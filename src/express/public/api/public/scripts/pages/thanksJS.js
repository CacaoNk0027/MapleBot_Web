let container = document.getElementById('contenedor')

function constructLength0 () {
    let imagen = document.createElement('img')
    let titulo = document.createElement('h2')
    let parrafo = document.createElement('p')
    imagen.src = "https://webmaplebotml.herokuapp.com/api/public/assets/azukiAngry.png"
    imagen.style.width = "250px";
    imagen.style.marginBottom = "20px";
    titulo.innerText = "Que haces aqui!?"
    parrafo.innerText = "si estas en esta pagina es porque invitaste a la bot a tu servidor de discord, salvo que hayas puesto el link asi tal cual sin autorizar y te encuentres en esta situación! ve a casa ahora mismo >:b"
    container.appendChild(imagen)
    container.appendChild(titulo)
    container.appendChild(parrafo)
}
function constructHasError () {
    let imagen = document.createElement('img')
    let titulo = document.createElement('h2')
    let parrafo = document.createElement('p')
    imagen.src = "https://webmaplebotml.herokuapp.com/api/public/assets/mapleWasted.png"
    imagen.style.width = "250px";
    imagen.style.marginBottom = "20px";
    titulo.innerText = "No Autorizada"
    parrafo.innerText = "no tengo mucho que decir.. agradezco que hayas intentado invitarme, estare ahora aqui esperando de rodillas a que en algun futuro pueda tratar de unirme de nuevo a tu servidor..."
    container.appendChild(imagen)
    container.appendChild(titulo)
    container.appendChild(parrafo)
}
function constructHasCode () {
    let imagen = document.createElement('img')
    let titulo = document.createElement('h2')
    let parrafo = document.createElement('p')
    imagen.src = "https://webmaplebotml.herokuapp.com/api/public/assets/mapleLove.png"
    imagen.style.width = "250px";
    imagen.style.marginBottom = "20px";
    titulo.innerText = "Gracias!"
    parrafo.innerText = "Gracias por invitar a la bot a tu servidor de discord! prometemos no decepcionarte y claro, si deseas hacerlo, en esta misma web puedes ver los comandos de maple bot asi como puedes unirte a su servidor de soporte para contactar al desarrollador o poder dar sugerencias e incluso poder reportar errores! Muchas Gracias!!"
    container.appendChild(imagen)
    container.appendChild(titulo)
    container.appendChild(parrafo)
}

function queryParams() {
    let query = window.location.search
    if(query.length <= 0) {
        constructLength0()
    } else {
        let params = new URLSearchParams(query)
        if(params.has('error')) {
            constructHasError()
        } else if(params.has('code')) {
            constructHasCode()
        } else {
            constructLength0()
        }
    }
}

queryParams()