let modoTemaWeb = localStorage.getItem("themeMode")
let footerTheme = document.getElementById('footerTheme')
let switches = document.getElementById('onoff-theme')
let themeSwitches = document.getElementById('onoff-button')
let navBar = document.getElementById('navBar')
let navMenu = document.getElementById('navMenu')
let buttons = document.getElementsByName('navButton')
let mapleBox = document.getElementById('mapleAvatar')
let mapleAvatar = document.getElementById('mapleBox')
let categorias = document.querySelectorAll('.cuadro')
let imagenesCat = document.getElementsByName('category')
let despImg = document.getElementById('despImg')
let cuerpoWeb = document.body;

function uploadTheme() {
    if (document.head.firstElementChild.innerText == 'Maple Bot | 404' || document.head.firstElementChild.innerText == "Maple Bot | Thanks") {
        if (modoTemaWeb == "oscuro") {
            themeSwitches.classList.add('cheese')
            if (cuerpoWeb.classList.contains('theme-white')) {
                navBar.classList.remove('inicialBar-thWhite')
                cuerpoWeb.classList.remove('theme-white')
                footerTheme.classList.remove('fooTheme-white')
                navMenu.classList.remove('boxesCelMenu-White')
                navMenu.classList.add('boxesCelMenu-Dark')
                navBar.classList.add('inicialBar-thDark')
                cuerpoWeb.classList.add("theme-dark")
                footerTheme.classList.add('fooTheme-dark')
                for (const button of buttons) {
                    button.classList.remove("navOption-thWhite")
                    button.classList.add("navOption-thDark")
                }
                for (const categoria of categorias) {
                    categoria.classList.remove('cuaderWhite')
                    categoria.classList.add('cuaderDark')
                }
                for (const objeto of imagenesCat) {
                    objeto.classList.remove('imgCuaderWhite')
                    objeto.classList.add('imgCuaderDark')
                }
            } else {
                navBar.classList.remove('inicialBar-thWhite')
                cuerpoWeb.classList.remove('theme-white')
                footerTheme.classList.remove('fooTheme-white')
                navBar.classList.add('inicialBar-thDark')
                cuerpoWeb.classList.add('theme-dark')
                navMenu.classList.remove('boxesCelMenu-White')
                navMenu.classList.add('boxesCelMenu-Dark')
                footerTheme.classList.add('fooTheme-dark')
                for (const button of buttons) {
                    button.classList.remove("navOption-thWhite")
                    button.classList.add("navOption-thDark")
                }
                for (const categoria of categorias) {
                    categoria.classList.remove('cuaderWhite')
                    categoria.classList.add('cuaderDark')
                }
                for (const objeto of imagenesCat) {
                    objeto.classList.remove('imgCuaderWhite')
                    objeto.classList.add('imgCuaderDark')
                }
            }
        } else {
            themeSwitches.classList.remove('cheese')
            if (cuerpoWeb.classList.contains('theme-dark')) {
                navBar.classList.remove('inicialBar-thDark')
                cuerpoWeb.classList.remove("theme-dark")
                footerTheme.classList.remove('fooTheme-dark')
                navBar.classList.add('inicialBar-thWhite')
                navMenu.classList.add('boxesCelMenu-White')
                navMenu.classList.remove('boxesCelMenu-Dark')
                cuerpoWeb.classList.add('theme-white')
                footerTheme.classList.add('fooTheme-white')
                for (const button of buttons) {
                    button.classList.remove("navOption-thDark")
                    button.classList.add("navOption-thWhite")
                }
                for (const categoria of categorias) {
                    categoria.classList.add('cuaderWhite')
                    categoria.classList.remove('cuaderDark')
                }
                for (const objeto of imagenesCat) {
                    objeto.classList.add('imgCuaderWhite')
                    objeto.classList.remove('imgCuaderDark')
                }
            } else {
                navBar.classList.remove('inicialBar-thDark')
                cuerpoWeb.classList.remove('theme-dark')
                footerTheme.classList.remove('fooTheme-dark')
                navBar.classList.add('inicialBar-thWhite')
                cuerpoWeb.classList.add('theme-white')
                footerTheme.classList.add('fooTheme-white')
                navMenu.classList.add('boxesCelMenu-White')
                navMenu.classList.remove('boxesCelMenu-Dark')
                for (const button of buttons) {
                    button.classList.remove("navOption-thDark")
                    button.classList.add("navOption-thWhite")
                }
                for (const categoria of categorias) {
                    categoria.classList.add('cuaderWhite')
                    categoria.classList.remove('cuaderDark')
                }
                for (const objeto of imagenesCat) {
                    objeto.classList.add('imgCuaderWhite')
                    objeto.classList.remove('imgCuaderDark')
                }
            }
        }
    } else {
        if (modoTemaWeb == "oscuro") {
            themeSwitches.classList.add('cheese')
            if (cuerpoWeb.classList.contains('theme-white')) {
                navBar.classList.remove('inicialBar-thWhite')
                cuerpoWeb.classList.remove('theme-white')
                footerTheme.classList.remove('fooTheme-white')
                navMenu.classList.remove('boxesCelMenu-White')
                navMenu.classList.add('boxesCelMenu-Dark')
                navBar.classList.add('inicialBar-thDark')
                cuerpoWeb.classList.add("theme-dark")
                footerTheme.classList.add('fooTheme-dark')
                for (const button of buttons) {
                    button.classList.remove("navOption-thWhite")
                    button.classList.add("navOption-thDark")
                }
                for (const categoria of categorias) {
                    categoria.classList.remove('cuaderWhite')
                    categoria.classList.add('cuaderDark')
                }
                for (const objeto of imagenesCat) {
                    objeto.classList.remove('imgCuaderWhite')
                    objeto.classList.add('imgCuaderDark')
                }
            } else {
                navBar.classList.remove('inicialBar-thWhite')
                cuerpoWeb.classList.remove('theme-white')
                footerTheme.classList.remove('fooTheme-white')
                navBar.classList.add('inicialBar-thDark')
                cuerpoWeb.classList.add('theme-dark')
                navMenu.classList.remove('boxesCelMenu-White')
                navMenu.classList.add('boxesCelMenu-Dark')
                footerTheme.classList.add('fooTheme-dark')
                for (const button of buttons) {
                    button.classList.remove("navOption-thWhite")
                    button.classList.add("navOption-thDark")
                }
                for (const categoria of categorias) {
                    categoria.classList.remove('cuaderWhite')
                    categoria.classList.add('cuaderDark')
                }
                for (const objeto of imagenesCat) {
                    objeto.classList.remove('imgCuaderWhite')
                    objeto.classList.add('imgCuaderDark')
                }
            }
        } else {
            themeSwitches.classList.remove('cheese')
            if (cuerpoWeb.classList.contains('theme-dark')) {
                navBar.classList.remove('inicialBar-thDark')
                cuerpoWeb.classList.remove("theme-dark")
                footerTheme.classList.remove('fooTheme-dark')
                navBar.classList.add('inicialBar-thWhite')
                navMenu.classList.add('boxesCelMenu-White')
                navMenu.classList.remove('boxesCelMenu-Dark')
                cuerpoWeb.classList.add('theme-white')
                footerTheme.classList.add('fooTheme-white')
                for (const button of buttons) {
                    button.classList.remove("navOption-thDark")
                    button.classList.add("navOption-thWhite")
                }
                for (const categoria of categorias) {
                    categoria.classList.add('cuaderWhite')
                    categoria.classList.remove('cuaderDark')
                }
                for (const objeto of imagenesCat) {
                    objeto.classList.add('imgCuaderWhite')
                    objeto.classList.remove('imgCuaderDark')
                }
            } else {
                navBar.classList.remove('inicialBar-thDark')
                cuerpoWeb.classList.remove('theme-dark')
                footerTheme.classList.remove('fooTheme-dark')
                navBar.classList.add('inicialBar-thWhite')
                cuerpoWeb.classList.add('theme-white')
                footerTheme.classList.add('fooTheme-white')
                navMenu.classList.add('boxesCelMenu-White')
                navMenu.classList.remove('boxesCelMenu-Dark')
                for (const button of buttons) {
                    button.classList.remove("navOption-thDark")
                    button.classList.add("navOption-thWhite")
                }
                for (const categoria of categorias) {
                    categoria.classList.add('cuaderWhite')
                    categoria.classList.remove('cuaderDark')
                }
                for (const objeto of imagenesCat) {
                    objeto.classList.add('imgCuaderWhite')
                    objeto.classList.remove('imgCuaderDark')
                }
            }
        }
    }
}

function changeTheme() {
    if (document.head.firstElementChild.innerText == 'Maple Bot | 404' || document.head.firstElementChild.innerText == "Maple Bot | Thanks") {
        if (cuerpoWeb.classList.contains('theme-white') && footerTheme.classList.contains('fooTheme-white')) {
            themeSwitches.classList.add('cheese')
            navBar.classList.remove('inicialBar-thWhite')
            cuerpoWeb.classList.remove('theme-white')
            footerTheme.classList.remove('fooTheme-white')
            navBar.classList.add('inicialBar-thDark')
            cuerpoWeb.classList.add("theme-dark")
            footerTheme.classList.add('fooTheme-dark')
            navMenu.classList.remove('boxesCelMenu-White')
            navMenu.classList.add('boxesCelMenu-Dark')
            for (const button of buttons) {
                button.classList.remove("navOption-thWhite")
                button.classList.add("navOption-thDark")
            }
            for (const categoria of categorias) {
                categoria.classList.remove('cuaderWhite')
                categoria.classList.add('cuaderDark')
            }
            for (const objeto of imagenesCat) {
                objeto.classList.remove('imgCuaderWhite')
                objeto.classList.add('imgCuaderDark')
            }
            localStorage.setItem("themeMode", "oscuro");
        } else {
            themeSwitches.classList.remove('cheese')
            navBar.classList.remove('inicialBar-thDark')
            cuerpoWeb.classList.remove('theme-dark')
            footerTheme.classList.add('fooTheme-white')
            navBar.classList.add('inicialBar-thWhite')
            cuerpoWeb.classList.add("theme-white")
            footerTheme.classList.remove('fooTheme-dark')
            navMenu.classList.add('boxesCelMenu-White')
            navMenu.classList.remove('boxesCelMenu-Dark')
            for (const button of buttons) {
                button.classList.remove("navOption-thDark")
                button.classList.add("navOption-thWhite")
            }
            for (const categoria of categorias) {
                categoria.classList.add('cuaderWhite')
                categoria.classList.remove('cuaderDark')
            }
            for (const objeto of imagenesCat) {
                objeto.classList.add('imgCuaderWhite')
                objeto.classList.remove('imgCuaderDark')
            }
            localStorage.setItem("themeMode", "claro");
        }
    } else {
        if (cuerpoWeb.classList.contains('theme-white') && footerTheme.classList.contains('fooTheme-white')) {
            themeSwitches.classList.add('cheese')
            navBar.classList.remove('inicialBar-thWhite')
            cuerpoWeb.classList.remove('theme-white')
            footerTheme.classList.remove('fooTheme-white')
            navBar.classList.add('inicialBar-thDark')
            cuerpoWeb.classList.add("theme-dark")
            footerTheme.classList.add('fooTheme-dark')
            navMenu.classList.remove('boxesCelMenu-White')
            navMenu.classList.add('boxesCelMenu-Dark')
            for (const button of buttons) {
                button.classList.remove("navOption-thWhite")
                button.classList.add("navOption-thDark")
            }
            for (const categoria of categorias) {
                categoria.classList.remove('cuaderWhite')
                categoria.classList.add('cuaderDark')
            }
            for (const objeto of imagenesCat) {
                objeto.classList.remove('imgCuaderWhite')
                objeto.classList.add('imgCuaderDark')
            }
            localStorage.setItem("themeMode", "oscuro");
        } else {
            themeSwitches.classList.remove('cheese')
            navBar.classList.remove('inicialBar-thDark')
            cuerpoWeb.classList.remove('theme-dark')
            footerTheme.classList.add('fooTheme-white')
            navBar.classList.add('inicialBar-thWhite')
            cuerpoWeb.classList.add("theme-white")
            footerTheme.classList.remove('fooTheme-dark')
            navMenu.classList.add('boxesCelMenu-White')
            navMenu.classList.remove('boxesCelMenu-Dark')
            for (const button of buttons) {
                button.classList.remove("navOption-thDark")
                button.classList.add("navOption-thWhite")
            }
            for (const categoria of categorias) {
                categoria.classList.add('cuaderWhite')
                categoria.classList.remove('cuaderDark')
            }
            for (const objeto of imagenesCat) {
                objeto.classList.add('imgCuaderWhite')
                objeto.classList.remove('imgCuaderDark')
            }
            localStorage.setItem("themeMode", "claro");
        }
    }
}