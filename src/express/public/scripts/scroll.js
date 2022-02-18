const elementosHTML_1 = document.getElementsByName('scroll')
const elementosHTML_2 = document.getElementsByName('scrollByRigth')
const elementosHTML_3 = document.getElementsByName('scrollByLeft')

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