const elementosHTML_1 = document.getElementsByName('scroll')
const elementosHTML_2 = document.getElementsByName('scrollByRigth')
const elementosHTML_3 = document.getElementsByName('scrollByLeft')
const elementosHTML_4 = document.querySelectorAll('.contador_cantidad')

function mostrarElementos(elementos) {
    elementos.forEach(element => {
        if (element.isIntersecting == true) {
            element.target.classList.add('animar')
            element.target.classList.remove('ocultar')
        }
    });
}

let observer_1 = new IntersectionObserver(mostrarElementos, {
    threshold: 0.75
})

elementosHTML_1.forEach(elementoHTML => {
    observer_1.observe(elementoHTML)
})

function mostrarElementosDerecha(elementos) {
    elementos.forEach(element => {
        if (element.isIntersecting == true) {
            element.target.classList.add('animarDerecha')
            element.target.classList.remove('ocultarDerecha')
        }
    });
}

let observer_2 = new IntersectionObserver(mostrarElementosDerecha, {
    threshold: 0.75
})

elementosHTML_2.forEach(elementoHTML => {
    observer_2.observe(elementoHTML)
})

function mostrarElementosIzquierda(elementos) {
    elementos.forEach(element => {
        if (element.isIntersecting == true) {
            element.target.classList.add('animarIzquierda')
            element.target.classList.remove('ocultarIzquierda')
        }
    });
}

let observer_3 = new IntersectionObserver(mostrarElementosIzquierda, {
    threshold: 0.75
})

elementosHTML_3.forEach(elementoHTML => {
    observer_3.observe(elementoHTML)
})

async function clientFetch() {
    let json = {
            clientGuilds: 123,
            clientCommands: 59,
            clientMembers: 30000,
            clientVotes: 3
        }
        // let json = await fetch('https://www.webmaplebot.ml/api/post/').then(m => m.json())
    document.getElementById('servers').cantidadtotal = json.clientGuilds
    document.getElementById('commands').cantidadtotal = json.clientCommands
    document.getElementById('users').cantidadtotal = json.clientMembers
    document.getElementById('votes').cantidadtotal = json.clientVotes
}

clientFetch()

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