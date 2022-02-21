function clickRedirect(element) {
    if (element.id == "redic_cmds") {
        window.location = "/commands"
    } else if (element.id == "redic_inv") {
        window.open('https://discord.com/oauth2/authorize?client_id=821452429409124451&scope=bot%20applications.commands&permissions=533923163350&redirect_uri=https%3A%2F%2Fcdnnekoapicacao.vanillank2006.repl.co%2Fapi%2Fthanks&response_type=code')
    } else if (element.id == "redic_srv") {
        window.open('https://discord.gg/PKGhvUKaQN')
    } else if (element.id == "redic_vote") {
        window.open('https://top.gg/bot/821452429409124451/vote')
    } else if (element.id == "redic_inicial") {
        window.location = '/'
    }
}
async function clientUser() {
    let clientAvatar = document.getElementById('mapleAvatar')
    let clientUser_ = await fetch('https://nekoapi.vanillank2006.repl.co/api/users?user=client').then(c => c.json())
    clientAvatar.style.backgroundImage = `url(${clientUser_.avatar})`
    document.getElementById('clientName').innerText = clientUser_.username
    document.getElementById('clientTag').innerText = clientUser_.discriminator
    document.getElementById('clientUserTag').innerText = clientUser_.usertag
};

/**
 * @param {Element} element 
 */
function mostMenu(element) {
    if (!element.classList.contains('show')) {
        element.classList.add('show')
    } else {
        element.classList.remove('show')
    }
}

async function cacaoName() {
    let cacaoUser_ = await fetch('https://nekoapi.vanillank2006.repl.co/api/users?user=cacao').then(c => c.json())
    document.getElementById('cacaoName').innerText = cacaoUser_.username
}

async function userTagClient() {
    let clientUser_ = await fetch('https://nekoapi.vanillank2006.repl.co/api/users?user=client').then(c => c.json())
    document.getElementById('clientUserTag').innerText = clientUser_.usertag
};