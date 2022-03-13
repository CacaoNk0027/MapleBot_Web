async function info() {
    let json = await fetch('https://restnekoapi.herokuapp.com/api/post').then(m => m.json())
    let cmds = await json.clientCommands.filter(c => c.category == "informacion");
    let numberMap = cmds.map(c => parseInt(c.id))
    let numbersM = numberMap.sort(function (a, b) { return a - b })
    for (var num of numbersM) {
        var strings;
        if (num.toString().length == 1) {
            strings = "00" + num.toString();
        } else if (num.toString().length == 2) {
            strings = "0" + num.toString();
        } else if(num.toString().length == 3) {
            strings = num.toString()
        }
        let obj = cmds.find(c => c.id == strings)

        let infoBox = document.getElementById('cmds-info')
        let divForCommand = document.createElement('div')
        let foo = document.createElement('div')
        let condCmd = document.createElement('div')
        let img = document.createElement('img')
        let idCommand = document.createElement('p')
        let titleCommand = document.createElement('h3')
        let descCommand = document.createElement('p')
        img.src = "https://cdn.discordapp.com/emojis/853296021098594325.png";
        img.alt = "info";
        idCommand.innerText = obj.id
        titleCommand.innerText = obj.name
        descCommand.innerText = obj.description
        divForCommand.classList.add('boxCommand')
        divForCommand.classList.add('cuaderWhite')
        divForCommand.classList.add('cmd-xl-m2')
        condCmd.classList.add('cmd-xl-cdcOnt')
        foo.classList.add('foo-imgCmd')
        foo.appendChild(img)
        foo.appendChild(idCommand)
        condCmd.appendChild(titleCommand)
        condCmd.appendChild(descCommand)
        divForCommand.appendChild(foo)
        divForCommand.appendChild(condCmd)
        infoBox.appendChild(divForCommand)

    }
}

info()

async function misc() {
    let json = await fetch('https://restnekoapi.herokuapp.com/api/post').then(m => m.json())
    let cmds = await json.clientCommands.filter(c => c.category == "miscelaneo");
    let numberMap = cmds.map(c => parseInt(c.id))
    let numbersM = numberMap.sort(function (a, b) { return a - b })
    for (var num of numbersM) {
        var strings;
        if (num.toString().length == 1) {
            strings = "00" + num.toString();
        } else if (num.toString().length == 2) {
            strings = "0" + num.toString();
        } else if(num.toString().length == 3) {
            strings = num.toString()
        }
        let obj = cmds.find(c => c.id == strings)

        let infoBox = document.getElementById('cmds-misc')
        let divForCommand = document.createElement('div')
        let foo = document.createElement('div')
        let condCmd = document.createElement('div')
        let img = document.createElement('img')
        let idCommand = document.createElement('p')
        let titleCommand = document.createElement('h3')
        let descCommand = document.createElement('p')
        img.src = "https://cdn.discordapp.com/emojis/854799215993028668.gif";
        img.alt = "info";
        idCommand.innerText = obj.id
        titleCommand.innerText = obj.name
        descCommand.innerText = obj.description
        divForCommand.classList.add('boxCommand')
        divForCommand.classList.add('cuaderWhite')
        divForCommand.classList.add('cmd-xl-m2')
        condCmd.classList.add('cmd-xl-cdcOnt')
        foo.classList.add('foo-imgCmd')
        foo.appendChild(img)
        foo.appendChild(idCommand)
        condCmd.appendChild(titleCommand)
        condCmd.appendChild(descCommand)
        divForCommand.appendChild(foo)
        divForCommand.appendChild(condCmd)
        infoBox.appendChild(divForCommand)

    }
}

misc()

async function funs() {
    let json = await fetch('https://restnekoapi.herokuapp.com/api/post').then(m => m.json())
    let cmds = await json.clientCommands.filter(c => c.category == "diversion");
    let numberMap = cmds.map(c => parseInt(c.id))
    let numbersM = numberMap.sort(function (a, b) { return a - b })
    for (var num of numbersM) {
        var strings;
        if (num.toString().length == 1) {
            strings = "00" + num.toString();
        } else if (num.toString().length == 2) {
            strings = "0" + num.toString();
        } else if(num.toString().length == 3) {
            strings = num.toString()
        }
        let obj = cmds.find(c => c.id == strings)

        let infoBox = document.getElementById('cmds-funs')
        let divForCommand = document.createElement('div')
        let foo = document.createElement('div')
        let condCmd = document.createElement('div')
        let img = document.createElement('img')
        let idCommand = document.createElement('p')
        let titleCommand = document.createElement('h3')
        let descCommand = document.createElement('p')
        img.src = "https://www.webmaplebot.ml/images/diversion.gif";
        img.alt = "info";
        idCommand.innerText = obj.id
        titleCommand.innerText = obj.name
        descCommand.innerText = obj.description
        divForCommand.classList.add('boxCommand')
        divForCommand.classList.add('cuaderWhite')
        divForCommand.classList.add('cmd-xl-m2')
        condCmd.classList.add('cmd-xl-cdcOnt')
        foo.classList.add('foo-imgCmd')
        foo.appendChild(img)
        foo.appendChild(idCommand)
        condCmd.appendChild(titleCommand)
        condCmd.appendChild(descCommand)
        divForCommand.appendChild(foo)
        divForCommand.appendChild(condCmd)
        infoBox.appendChild(divForCommand)

    }
}

funs()

async function mod() {
    let json = await fetch('https://restnekoapi.herokuapp.com/api/post').then(m => m.json())
    let cmds = await json.clientCommands.filter(c => c.category == "moderacion");
    let numberMap = cmds.map(c => parseInt(c.id))
    let numbersM = numberMap.sort(function (a, b) { return a - b })
    for (var num of numbersM) {
        if (num.toString().length == 1) {
            strings = "00" + num.toString();
        } else if (num.toString().length == 2) {
            strings = "0" + num.toString();
        } else if(num.toString().length == 3) {
            strings = num.toString()
        }
        let obj = cmds.find(c => c.id == strings)

        let infoBox = document.getElementById('cmds-mods')
        let divForCommand = document.createElement('div')
        let foo = document.createElement('div')
        let condCmd = document.createElement('div')
        let img = document.createElement('img')
        let idCommand = document.createElement('p')
        let titleCommand = document.createElement('h3')
        let descCommand = document.createElement('p')
        img.src = "https://www.webmaplebot.ml/images/moderacion.png";
        img.alt = "info";
        idCommand.innerText = obj.id
        titleCommand.innerText = obj.name
        descCommand.innerText = obj.description
        divForCommand.classList.add('boxCommand')
        divForCommand.classList.add('cuaderWhite')
        divForCommand.classList.add('cmd-xl-m2')
        condCmd.classList.add('cmd-xl-cdcOnt')
        foo.classList.add('foo-imgCmd')
        foo.appendChild(img)
        foo.appendChild(idCommand)
        condCmd.appendChild(titleCommand)
        condCmd.appendChild(descCommand)
        divForCommand.appendChild(foo)
        divForCommand.appendChild(condCmd)
        infoBox.appendChild(divForCommand)

    }
}

mod()

async function acc() {
    let json = await fetch('https://restnekoapi.herokuapp.com/api/post').then(m => m.json())
    let cmds = await json.clientCommands.filter(c => c.category == "accion");
    let numberMap = cmds.map(c => parseInt(c.id))
    let numbersM = numberMap.sort(function (a, b) { return a - b })
    for (var num of numbersM) {
        if (num.toString().length == 1) {
            strings = "00" + num.toString();
        } else if (num.toString().length == 2) {
            strings = "0" + num.toString();
        } else if(num.toString().length == 3) {
            strings = num.toString()
        }
        let obj = cmds.find(c => c.id == strings)

        let infoBox = document.getElementById('cmds-acti')
        let divForCommand = document.createElement('div')
        let foo = document.createElement('div')
        let condCmd = document.createElement('div')
        let img = document.createElement('img')
        let idCommand = document.createElement('p')
        let titleCommand = document.createElement('h3')
        let descCommand = document.createElement('p')
        img.src = "https://www.webmaplebot.ml/images/action.gif";
        img.alt = "info";
        idCommand.innerText = obj.id
        titleCommand.innerText = obj.name
        descCommand.innerText = obj.description
        divForCommand.classList.add('boxCommand')
        divForCommand.classList.add('cuaderWhite')
        divForCommand.classList.add('cmd-xl-m2')
        condCmd.classList.add('cmd-xl-cdcOnt')
        foo.classList.add('foo-imgCmd')
        foo.appendChild(img)
        foo.appendChild(idCommand)
        condCmd.appendChild(titleCommand)
        condCmd.appendChild(descCommand)
        divForCommand.appendChild(foo)
        divForCommand.appendChild(condCmd)
        infoBox.appendChild(divForCommand)

    }
}

acc()

async function anim() {
    let json = await fetch('https://restnekoapi.herokuapp.com/api/post').then(m => m.json())
    let cmds = await json.clientCommands.filter(c => c.category == "anime");
    let numberMap = cmds.map(c => parseInt(c.id))
    let numbersM = numberMap.sort(function (a, b) { return a - b })
    for (var num of numbersM) {
        var strings;
        if (num.toString().length == 1) {
            strings = "00" + num.toString();
        } else if (num.toString().length == 2) {
            strings = "0" + num.toString();
        } else if(num.toString().length == 3) {
            strings = num.toString()
        }
        let obj = cmds.find(c => c.id == strings)

        let infoBox = document.getElementById('cmds-anim')
        let divForCommand = document.createElement('div')
        let foo = document.createElement('div')
        let condCmd = document.createElement('div')
        let img = document.createElement('img')
        let idCommand = document.createElement('p')
        let titleCommand = document.createElement('h3')
        let descCommand = document.createElement('p')
        img.src = "https://cdn.discordapp.com/emojis/853291202061139978.png";
        img.alt = "info";
        idCommand.innerText = obj.id
        titleCommand.innerText = obj.name
        descCommand.innerText = obj.description
        divForCommand.classList.add('boxCommand')
        divForCommand.classList.add('cuaderWhite')
        divForCommand.classList.add('cmd-xl-m2')
        condCmd.classList.add('cmd-xl-cdcOnt')
        foo.classList.add('foo-imgCmd')
        foo.appendChild(img)
        foo.appendChild(idCommand)
        condCmd.appendChild(titleCommand)
        condCmd.appendChild(descCommand)
        divForCommand.appendChild(foo)
        divForCommand.appendChild(condCmd)
        infoBox.appendChild(divForCommand)

    }
}

anim()

async function reac() {
    let json = await fetch('https://restnekoapi.herokuapp.com/api/post').then(m => m.json())
    let cmds = await json.clientCommands.filter(c => c.category == "reaccion");
    let numberMap = cmds.map(c => parseInt(c.id))
    let numbersM = numberMap.sort(function (a, b) { return a - b })
    for (var num of numbersM) {
        var strings;
        if (num.toString().length == 1) {
            strings = "00" + num.toString();
        } else if (num.toString().length == 2) {
            strings = "0" + num.toString();
        } else if(num.toString().length == 3) {
            strings = num.toString()
        }
        let obj = cmds.find(c => c.id == strings)

        let infoBox = document.getElementById('cmds-reac')
        let divForCommand = document.createElement('div')
        let foo = document.createElement('div')
        let condCmd = document.createElement('div')
        let img = document.createElement('img')
        let idCommand = document.createElement('p')
        let titleCommand = document.createElement('h3')
        let descCommand = document.createElement('p')
        img.src = "https://cdn.discordapp.com/emojis/926479390307676220.png";
        img.alt = "info";
        idCommand.innerText = obj.id
        titleCommand.innerText = obj.name
        descCommand.innerText = obj.description
        divForCommand.classList.add('boxCommand')
        divForCommand.classList.add('cuaderWhite')
        divForCommand.classList.add('cmd-xl-m2')
        condCmd.classList.add('cmd-xl-cdcOnt')
        foo.classList.add('foo-imgCmd')
        foo.appendChild(img)
        foo.appendChild(idCommand)
        condCmd.appendChild(titleCommand)
        condCmd.appendChild(descCommand)
        divForCommand.appendChild(foo)
        divForCommand.appendChild(condCmd)
        infoBox.appendChild(divForCommand)

    }
}

reac()

async function pets() {
    let json = await fetch('https://restnekoapi.herokuapp.com/api/post').then(m => m.json())
    let cmds = await json.clientCommands.filter(c => c.category == "animales");
    let numberMap = cmds.map(c => parseInt(c.id))
    let numbersM = numberMap.sort(function (a, b) { return a - b })
    for (var num of numbersM) {
        var strings;
        if (num.toString().length == 1) {
            strings = "00" + num.toString();
        } else if (num.toString().length == 2) {
            strings = "0" + num.toString();
        } else if(num.toString().length == 3) {
            strings = num.toString()
        }
        let obj = cmds.find(c => c.id == strings)

        let infoBox = document.getElementById('cmds-pets')
        let divForCommand = document.createElement('div')
        let foo = document.createElement('div')
        let condCmd = document.createElement('div')
        let img = document.createElement('img')
        let idCommand = document.createElement('p')
        let titleCommand = document.createElement('h3')
        let descCommand = document.createElement('p')
        img.src = "https://cdn.discordapp.com/emojis/852226706009882664.png";
        img.alt = "info";
        idCommand.innerText = obj.id
        titleCommand.innerText = obj.name
        descCommand.innerText = obj.description
        divForCommand.classList.add('boxCommand')
        divForCommand.classList.add('cuaderWhite')
        divForCommand.classList.add('cmd-xl-m2')
        condCmd.classList.add('cmd-xl-cdcOnt')
        foo.classList.add('foo-imgCmd')
        foo.appendChild(img)
        foo.appendChild(idCommand)
        condCmd.appendChild(titleCommand)
        condCmd.appendChild(descCommand)
        divForCommand.appendChild(foo)
        divForCommand.appendChild(condCmd)
        infoBox.appendChild(divForCommand)

    }
}

pets()

async function config() {
    let json = await fetch('https://restnekoapi.herokuapp.com/api/post').then(m => m.json())
    let cmds = await json.clientCommands.filter(c => c.category == "configuracion");
    let numberMap = cmds.map(c => parseInt(c.id))
    let numbersM = numberMap.sort(function (a, b) { return a - b })
    for (var num of numbersM) {
        var strings;
        if (num.toString().length == 1) {
            strings = "00" + num.toString();
        } else if (num.toString().length == 2) {
            strings = "0" + num.toString();
        } else if(num.toString().length == 3) {
            strings = num.toString()
        }
        let obj = cmds.find(c => c.id == strings)

        let infoBox = document.getElementById('cmds-conf')
        let divForCommand = document.createElement('div')
        let foo = document.createElement('div')
        let condCmd = document.createElement('div')
        let img = document.createElement('img')
        let idCommand = document.createElement('p')
        let titleCommand = document.createElement('h3')
        let descCommand = document.createElement('p')
        img.src = "https://www.webmaplebot.ml/images/config.png";
        img.alt = "info";
        idCommand.innerText = obj.id
        titleCommand.innerText = obj.name
        descCommand.innerText = obj.description
        divForCommand.classList.add('boxCommand')
        divForCommand.classList.add('cuaderWhite')
        divForCommand.classList.add('cmd-xl-m2')
        condCmd.classList.add('cmd-xl-cdcOnt')
        foo.classList.add('foo-imgCmd')
        foo.appendChild(img)
        foo.appendChild(idCommand)
        condCmd.appendChild(titleCommand)
        condCmd.appendChild(descCommand)
        divForCommand.appendChild(foo)
        divForCommand.appendChild(condCmd)
        infoBox.appendChild(divForCommand)

    }
}

config()

async function rpnsfw() {
    let json = await fetch('https://restnekoapi.herokuapp.com/api/post').then(m => m.json())
    let cmds = await json.clientCommands.filter(c => c.category == "rp_nsfw");
    let numberMap = cmds.map(c => parseInt(c.id))
    let numbersM = numberMap.sort(function (a, b) { return a - b })
    for (var num of numbersM) {
        var strings;
        if (num.toString().length == 1) {
            strings = "00" + num.toString();
        } else if (num.toString().length == 2) {
            strings = "0" + num.toString();
        } else if(num.toString().length == 3) {
            strings = num.toString()
        }
        let obj = cmds.find(c => c.id == strings)

        let infoBox = document.getElementById('cmds-rpnw')
        let divForCommand = document.createElement('div')
        let foo = document.createElement('div')
        let condCmd = document.createElement('div')
        let img = document.createElement('img')
        let idCommand = document.createElement('p')
        let titleCommand = document.createElement('h3')
        let descCommand = document.createElement('p')
        img.src = "https://cdn.discordapp.com/emojis/869814289727381575.png";
        img.alt = "info";
        idCommand.innerText = obj.id
        titleCommand.innerText = obj.name
        descCommand.innerText = obj.description
        divForCommand.classList.add('boxCommand')
        divForCommand.classList.add('cuaderWhite')
        divForCommand.classList.add('cmd-xl-m2')
        condCmd.classList.add('cmd-xl-cdcOnt')
        foo.classList.add('foo-imgCmd')
        foo.appendChild(img)
        foo.appendChild(idCommand)
        condCmd.appendChild(titleCommand)
        condCmd.appendChild(descCommand)
        divForCommand.appendChild(foo)
        divForCommand.appendChild(condCmd)
        infoBox.appendChild(divForCommand)

    }
}

rpnsfw()

async function nsfw() {
    let json = await fetch('https://restnekoapi.herokuapp.com/api/post').then(m => m.json())
    let cmds = await json.clientCommands.filter(c => c.category == "nsfw");
    let numberMap = cmds.map(c => parseInt(c.id))
    let numbersM = numberMap.sort(function (a, b) { return a - b })
    for (var num of numbersM) {
        var strings;
        if (num.toString().length == 1) {
            strings = "00" + num.toString();
        } else if (num.toString().length == 2) {
            strings = "0" + num.toString();
        } else if(num.toString().length == 3) {
            strings = num.toString()
        }
        let obj = cmds.find(c => c.id == strings)

        let infoBox = document.getElementById('cmds-nsfw')
        let divForCommand = document.createElement('div')
        let foo = document.createElement('div')
        let condCmd = document.createElement('div')
        let img = document.createElement('img')
        let idCommand = document.createElement('p')
        let titleCommand = document.createElement('h3')
        let descCommand = document.createElement('p')
        img.src = "https://cdn.discordapp.com/emojis/853975964123398144.png";
        img.alt = "info";
        idCommand.innerText = obj.id
        titleCommand.innerText = obj.name
        descCommand.innerText = obj.description
        divForCommand.classList.add('boxCommand')
        divForCommand.classList.add('cuaderWhite')
        divForCommand.classList.add('cmd-xl-m2')
        condCmd.classList.add('cmd-xl-cdcOnt')
        foo.classList.add('foo-imgCmd')
        foo.appendChild(img)
        foo.appendChild(idCommand)
        condCmd.appendChild(titleCommand)
        condCmd.appendChild(descCommand)
        divForCommand.appendChild(foo)
        divForCommand.appendChild(condCmd)
        infoBox.appendChild(divForCommand)

    }
}

nsfw()

function uploadThemeCommands() {
    let boxCommands = document.querySelectorAll('.boxCommand')
    let cuadroMenu = document.querySelector('.cuadro_menu')
    if (modoTemaWeb == "oscuro") {
        cuadroMenu.classList.add('cuaderThemeDark')
        cuadroMenu.classList.remove('cuaderThemeWhite')
        for (let boxCommand of boxCommands) {
            boxCommand.classList.add('cuaderDark')
            boxCommand.classList.remove('cuaderWhite')
        }
    } else {
        cuadroMenu.classList.remove('cuaderThemeDark')
        cuadroMenu.classList.add('cuaderThemeWhite')
        for (let boxCommand of boxCommands) {
            boxCommand.classList.remove('cuaderDark')
            boxCommand.classList.add('cuaderWhite')
        }
    }
}

function changeCommandsTheme() {
    let boxCommands = document.querySelectorAll('.boxCommand')
    let cuadroMenu = document.querySelector('.cuadro_menu')
    if (!document.body.classList.contains('theme-white')) {
        cuadroMenu.classList.add('cuaderThemeDark')
        cuadroMenu.classList.remove('cuaderThemeWhite')
        for (let boxCommand of boxCommands) {
            boxCommand.classList.remove('cuaderWhite')
            boxCommand.classList.add('cuaderDark')
        }
    } else {
        cuadroMenu.classList.remove('cuaderThemeDark')
        cuadroMenu.classList.add('cuaderThemeWhite')
        for (let boxCommand of boxCommands) {
            boxCommand.classList.add('cuaderWhite')
            boxCommand.classList.remove('cuaderDark')
        }
    }
    console.log(document.body.classList)
}

async function music() {
    let json = await fetch('https://restnekoapi.herokuapp.com/api/post').then(m => m.json())
    let cmds = await json.clientCommands.filter(c => c.category == "musica");
    let numberMap = cmds.map(c => parseInt(c.id))
    let numbersM = numberMap.sort(function (a, b) { return a - b })
    for (var num of numbersM) {
        if (num.toString().length == 1) {
            strings = "00" + num.toString();
        } else if (num.toString().length == 2) {
            strings = "0" + num.toString();
        } else if(num.toString().length == 3) {
            strings = num.toString()
        }
        let obj = cmds.find(c => c.id == strings)

        let infoBox = document.getElementById('cmds-music')
        let divForCommand = document.createElement('div')
        let foo = document.createElement('div')
        let condCmd = document.createElement('div')
        let img = document.createElement('img')
        let idCommand = document.createElement('p')
        let titleCommand = document.createElement('h3')
        let descCommand = document.createElement('p')
        img.src = "https://cdn.discordapp.com/emojis/829550591025741824.gif";
        img.alt = "info";
        idCommand.innerText = obj.id
        titleCommand.innerText = obj.name
        descCommand.innerText = obj.description
        divForCommand.classList.add('boxCommand')
        divForCommand.classList.add('cuaderWhite')
        divForCommand.classList.add('cmd-xl-m2')
        condCmd.classList.add('cmd-xl-cdcOnt')
        foo.classList.add('foo-imgCmd')
        foo.appendChild(img)
        foo.appendChild(idCommand)
        condCmd.appendChild(titleCommand)
        condCmd.appendChild(descCommand)
        divForCommand.appendChild(foo)
        divForCommand.appendChild(condCmd)
        infoBox.appendChild(divForCommand)

    }
}

music()