async function users() {
    let cacaoDiv = document.getElementById('cacaoAvatar')
    let jimDiv = document.getElementById('jimAvatar')
    let krazyDiv = document.getElementById('krazyAvatar')
    let willyDiv = document.getElementById('willyAvatar')
    
    let CacaoUser_ = await fetch('https://nekoapi.vanillank2006.repl.co/api/users?user=cacao').then(c => c.json())
    let KrazyUser = await fetch('https://nekoapi.vanillank2006.repl.co/api/users?user=krazy').then(c => c.json())
    let JimUser = await fetch('https://nekoapi.vanillank2006.repl.co/api/users?user=jim').then(c => c.json())
    let WillyUser = await fetch('https://nekoapi.vanillank2006.repl.co/api/users?user=willy').then(c => c.json())

    cacaoDiv.style.backgroundImage = `url(${CacaoUser_.avatar})`
    jimDiv.style.backgroundImage =`url(${JimUser.avatar})`
    krazyDiv.style.backgroundImage = `url(${KrazyUser.avatar})`
    willyDiv.style.backgroundImage = `url(${WillyUser.avatar})`

}; users()


async function users_2() {
    let cacaoDiv = document.getElementById('cacaoAvatar2')
    let jimDiv = document.getElementById('jimAvatar2')
    let krazyDiv = document.getElementById('krazyAvatar2')
    let willyDiv = document.getElementById('willyAvatar2')
    
    let CacaoUser_ = await fetch('https://nekoapi.vanillank2006.repl.co/api/users?user=cacao').then(c => c.json())
    let KrazyUser = await fetch('https://nekoapi.vanillank2006.repl.co/api/users?user=krazy').then(c => c.json())
    let JimUser = await fetch('https://nekoapi.vanillank2006.repl.co/api/users?user=jim').then(c => c.json())
    let WillyUser = await fetch('https://nekoapi.vanillank2006.repl.co/api/users?user=willy').then(c => c.json())

    cacaoDiv.style.backgroundImage = `url(${CacaoUser_.avatar})`
    jimDiv.style.backgroundImage =`url(${JimUser.avatar})`
    krazyDiv.style.backgroundImage = `url(${KrazyUser.avatar})`
    willyDiv.style.backgroundImage = `url(${WillyUser.avatar})`

}; users_2()


/**
 * @param {Element} element 
 */
function most(element) {
    if(!element.classList.contains('helperAvatarActive')) {
        element.classList.add('helperAvatarActive')
        element.classList.remove('helperAvatar')
    } else {
        element.classList.remove('helperAvatarActive')
        element.classList.add('helperAvatar')
    }
}

/**
 * @param {Element} element 
 */
 function textMost(element) {
    if(!element.classList.contains('ocultarTexto')) {
        element.classList.remove('aparecerTexto')
        element.classList.add('ocultar')
        element.classList.add('ocultarTexto')
    } else {
        element.classList.remove('ocultarTexto')
        element.classList.remove('ocultar')
        element.classList.add('aparecerTexto')
    }
}

async function cacao() {
    let userName = document.getElementById('userNameCacao')
    let userTag = document.getElementById('userTagCacao')
    let clientUser_ = await fetch('https://nekoapi.vanillank2006.repl.co/api/users?user=cacao').then(c => c.json())
    userName.innerText = clientUser_.username
    userTag.innerText = clientUser_.discriminator
}; cacao()
async function jim() {
    let userName = document.getElementById('userNameJim')
    let userTag = document.getElementById('userTagJim')
    let clientUser_ = await fetch('https://nekoapi.vanillank2006.repl.co/api/users?user=jim').then(c => c.json())
    userName.innerText = clientUser_.username
    userTag.innerText = clientUser_.discriminator
}; jim()
async function krazy() {
    let userName = document.getElementById('userNameKrazy')
    let userTag = document.getElementById('userTagKrazy')
    let clientUser_ = await fetch('https://nekoapi.vanillank2006.repl.co/api/users?user=krazy').then(c => c.json())
    userName.innerText = clientUser_.username
    userTag.innerText = clientUser_.discriminator
}; krazy()
async function willy() {
    let userName = document.getElementById('userNameWilly')
    let userTag = document.getElementById('userTagWilly')
    let clientUser_ = await fetch('https://nekoapi.vanillank2006.repl.co/api/users?user=willy').then(c => c.json())
    userName.innerText = clientUser_.username
    userTag.innerText = clientUser_.discriminator
}; willy()

async function cacao2() {
    let userName = document.getElementById('userNameCacao2')
    let userTag = document.getElementById('userTagCacao2')
    let clientUser_ = await fetch('https://nekoapi.vanillank2006.repl.co/api/users?user=cacao').then(c => c.json())
    userName.innerText = clientUser_.username
    userTag.innerText = clientUser_.discriminator
}; cacao2()
async function jim2() {
    let userName = document.getElementById('userNameJim2')
    let userTag = document.getElementById('userTagJim2')
    let clientUser_ = await fetch('https://nekoapi.vanillank2006.repl.co/api/users?user=jim').then(c => c.json())
    userName.innerText = clientUser_.username
    userTag.innerText = clientUser_.discriminator
}; jim2()
async function krazy2() {
    let userName = document.getElementById('userNameKrazy2')
    let userTag = document.getElementById('userTagKrazy2')
    let clientUser_ = await fetch('https://nekoapi.vanillank2006.repl.co/api/users?user=krazy').then(c => c.json())
    userName.innerText = clientUser_.username
    userTag.innerText = clientUser_.discriminator
}; krazy2()
async function willy2() {
    let userName = document.getElementById('userNameWilly2')
    let userTag = document.getElementById('userTagWilly2')
    let clientUser_ = await fetch('https://nekoapi.vanillank2006.repl.co/api/users?user=willy').then(c => c.json())
    userName.innerText = clientUser_.username
    userTag.innerText = clientUser_.discriminator
}; willy2()

const elementosHTML_4 = document.querySelectorAll('.contador_cantidad')

async function clientFetch() {
    let json = await fetch('https://nekoapi.vanillank2006.repl.co/api/post/').then(m => m.json())
    document.getElementById('servers').cantidadtotal = json.clientGuilds
    document.getElementById('commands').cantidadtotal = json.clientCommands.length
    document.getElementById('users').cantidadtotal = json.clientMembers
    document.getElementById('votes').cantidadtotal = json.clientVotes
}

clientFetch();

window.addEventListener('DOMContentLoaded', function() {
    const contadores = document.querySelectorAll('.contador_cantidad')
    const velocidad = 2000;

    function animarContadores() {
        for (const contador of contadores) {
            function actualizarContador() {
                var cantidadMaxima = parseInt(contador.cantidadtotal)
                var valorActual = parseInt(contador.innerText)
                var incremento = (cantidadMaxima / velocidad)
                if (valorActual < cantidadMaxima) {
                    contador.innerText = Math.ceil(valorActual + incremento)
                    if (cantidadMaxima > 10000) {
                        setTimeout(actualizarContador, 1);
                    } else if (cantidadMaxima > 300) {
                        setTimeout(actualizarContador, 10);
                    } else if (cantidadMaxima > 100) {
                        setTimeout(actualizarContador, 60);
                    } else if (cantidadMaxima > 10) {
                        setTimeout(actualizarContador, 200);
                    } else if (cantidadMaxima > 0) {
                        setTimeout(actualizarContador, 500);
                    }
                } else {
                    contador.innerText = cantidadMaxima
                }
            }
            actualizarContador()
        }
    }
    // IntersectionObserver

    function mostrarContadores(elementos) {
        elementos.forEach(element => {
            if (element.isIntersecting == true) {
                element.target.classList.add('animarCantidad')
                element.target.classList.remove('ocultarCantidad')
                setTimeout(animarContadores, 300);
            }
        });
    }

    let observer_4 = new IntersectionObserver(mostrarContadores, {
        threshold: 0.75
    })

    elementosHTML_4.forEach(elementoHTML => {
        observer_4.observe(elementoHTML)
    })
})
