function clickRedirect(element) {
    if (element.id == "redic_cmds") {
        window.location = "/commands"
    } else if (element.id == "redic_inv") {
        window.open('https://discord.com/oauth2/authorize?client_id=821452429409124451&scope=bot%20applications.commands&permissions=533923163350&redirect_uri=https%3A%2F%2Fcdnnekoapicacao.vanillank2006.repl.co%2Fapi%2Fthanks&response_type=code')
    } else if (element.id == "redic_srv") {
        window.open('https://discord.gg/PKGhvUKaQN')
    } else if (element.id == "redic_vote") {
        window.open('https://top.gg/bot/821452429409124451/vote')
    }
}

async function clientUser() {
    let clientAvatar = document.getElementById('mapleAvatar')
    let clientUser_ = await fetch('https://nekoapi.vanillank2006.repl.co/api/users?user=client').then(c => c.json())
    clientAvatar.style.backgroundImage = `url(${clientUser_.avatar})`
    document.getElementById('clientName').innerText = clientUser_.username
    document.getElementById('clientTag').innerText = clientUser_.discriminator
    document.getElementById('clientUserTag').innerText = clientUser_.usertag
}; clientUser()

async function users() {
    let cacaoDiv = document.getElementById('cacaoAvatar')
    let jimDiv = document.getElementById('jimAvatar')
    let krazyDiv = document.getElementById('krazyAvatar')
    let willyDiv = document.getElementById('willyAvatar')
    let cacaoName = document.getElementById('cacaoName')
    
    let CacaoUser_ = await fetch('https://nekoapi.vanillank2006.repl.co/api/users?user=cacao').then(c => c.json())
    let KrazyUser = await fetch('https://nekoapi.vanillank2006.repl.co/api/users?user=krazy').then(c => c.json())
    let JimUser = await fetch('https://nekoapi.vanillank2006.repl.co/api/users?user=jim').then(c => c.json())
    let WillyUser = await fetch('https://nekoapi.vanillank2006.repl.co/api/users?user=willy').then(c => c.json())

    cacaoDiv.style.backgroundImage = `url(${CacaoUser_.avatar})`
    jimDiv.style.backgroundImage =`url(${JimUser.avatar})`
    krazyDiv.style.backgroundImage = `url(${KrazyUser.avatar})`
    willyDiv.style.backgroundImage = `url(${WillyUser.avatar})`
    cacaoName.innerText = CacaoUser_.username

}; users()


async function users_2() {
    let cacaoDiv = document.getElementById('cacaoAvatar2')
    let jimDiv = document.getElementById('jimAvatar2')
    let krazyDiv = document.getElementById('krazyAvatar2')
    let willyDiv = document.getElementById('willyAvatar2')
    let cacaoName = document.getElementById('cacaoName2')
    
    let CacaoUser_ = await fetch('https://nekoapi.vanillank2006.repl.co/api/users?user=cacao').then(c => c.json())
    let KrazyUser = await fetch('https://nekoapi.vanillank2006.repl.co/api/users?user=krazy').then(c => c.json())
    let JimUser = await fetch('https://nekoapi.vanillank2006.repl.co/api/users?user=jim').then(c => c.json())
    let WillyUser = await fetch('https://nekoapi.vanillank2006.repl.co/api/users?user=willy').then(c => c.json())

    cacaoDiv.style.backgroundImage = `url(${CacaoUser_.avatar})`
    jimDiv.style.backgroundImage =`url(${JimUser.avatar})`
    krazyDiv.style.backgroundImage = `url(${KrazyUser.avatar})`
    willyDiv.style.backgroundImage = `url(${WillyUser.avatar})`
    cacaoName.innerText = CacaoUser_.username

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


/**
 * @param {Element} element 
 */
 function mostMenu(element) {
    if(!element.classList.contains('show')) {
        element.classList.add('show')
    } else {
        element.classList.remove('show')
    }
}