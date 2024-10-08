var characterstitle = [
    "assets/imgs/characters/NovaDeluxeAoandon.png!00_wIlUVhNXau-msJGB8JRCZQ",
    "assets/imgs/characters/Koumei.png!00_-NDjFdEA7ztzYkdGe0ws8A",
    "assets/imgs/characters/VoltDeluxeRaijin.png!00_7oiD0A0-c7u5xTjwPi7fUg"
]
function GetCharactersTitle() : string {
    var str = '';
    characterstitle.forEach(value => {
        str += `<img class="character" src=${value} alt="character">`;
    })
    return str;
}

var abilities = [
    {
        "imgPath": "assets/imgs/skills/ability-1.png",
        "name": "KUMIHIMO",
        "des": "Weave the threads of destiny. Enemies who touch the threads suffer a random Elemental Status Effect. A roll of triple sixes creates threads that inflict one of every Elemental Status Effect."
    },
    {
        "imgPath": "assets/imgs/skills/ability-2.png",
        "name": "OMIKUJI",
        "des": "Koumei glimpses a favorable future and the precise steps needed to reach it. Complete the challenge to earn a Decree. A roll of triple sixes grants a Decree without a challenge."
    },
    {
        "imgPath": "assets/imgs/skills/ability-3.png",
        "name": "OMAMORI",
        "des": "Surround yourself with Omamori Charms, each with a chance to have enemy attacks heal you instead of damage you. The number of charms is determined by Koumei's dice roll. A roll of triple sixes grants invulnerability for the duration of your Omamori Charms."
    },
    {
        "imgPath": "assets/imgs/skills/ability-4.png",
        "name": "BUNRAKU",
        "des": "Wield your foe's fate threads like the strings of marionettes. Koumei's dice determine how many Status Effects foes in front of Koumei will suffer. A roll of triple sixes maximizes Status Effect stacks and extends Bunraku to enemies behind Koumei."
    }
]

function GetAblities() : string {
    var str = '';
    abilities.forEach(value => {
        str += 
        `
            <div class="ability m-3">
                <div class="header">
                <img src="${value.imgPath}" alt="ability">
                <h3>${value.name}</h3>
                </div>
                <p>${value.des}</p>
            </div>
        `;
    })
    return str;
}

var warframes = [
    {
        "imgPath": "harrow.png",
        "name": "HARROW",
        "des": "",
        "video": "https://www-static.warframe.com/images/warframes/diorama/harrow.webm"
    },
    {
        "imgPath": "chroma.png",
        "name": "CHROMA",
        "des": "",
        "video": "https://www-static.warframe.com/images/warframes/diorama/chroma.webm"
    },
    {
        "imgPath": "citrine.png",
        "name": "CITRINE",
        "des": "",
        "video": "https://www-static.warframe.com/images/warframes/diorama/citrine.webm"
    },
    {
        "imgPath": "dagath.png",
        "name": "DAGATH",
        "des": "",
        "video": "https://www-static.warframe.com/images/warframes/diorama/dagath.webm"
    },
    {
        "imgPath": "equinox.png",
        "name": "EQUINOX",
        "des": "",
        "video": "https://www-static.warframe.com/images/warframes/diorama/equinox.webm"
    },
    {
        "imgPath": "gara.png",
        "name": "GARA",
        "des": "",
        "video": "https://www-static.warframe.com/images/warframes/diorama/gara.webm"
    },
    {
        "imgPath": "grendel.png",
        "name": "GRENDEL",
        "des": "Grendel sees every battlefield as a smorgasbord. His insatiable appetite rewards him with high survivability. Enemies will be eaten. And regurgitated.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/grendel.webm"
    },
    {
        "imgPath": "gyre.png",
        "name": "GYRE",
        "des": "",
        "video": "https://www-static.warframe.com/images/warframes/diorama/gyre.webm"
    },
    {
        "imgPath": "hildryn.png",
        "name": "HILDRYN",
        "des": "",
        "video": "https://www-static.warframe.com/images/warframes/diorama/hildryn.webm"
    },
    {
        "imgPath": "ivara.png",
        "name": "IVARA",
        "des": "",
        "video": "https://www-static.warframe.com/images/warframes/diorama/ivara.webm"
    },
    {
        "imgPath": "jade.png",
        "name": "JADE",
        "des": "",
        "video": "https://www-static.warframe.com/images/warframes/diorama/jade.webm"
    },
    {
        "imgPath": "khora.png",
        "name": "KHORA",
        "des": "",
        "video": "https://www-static.warframe.com/images/warframes/diorama/khora.webm"
    },
    {
        "imgPath": "koumei.png",
        "name": "KOUMEI",
        "des": "",
        "video": "https://www-static.warframe.com/images/warframes/diorama/koumei.webm"
    },
    {
        "imgPath": "kullervo.png",
        "name": "KULLERVO",
        "des": "Kullervo answers for his sins and the sins of others. His daggers and melee prowess deal high damage. Seize the power of treachery to slake his thirst for revenge.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/kullervo.webm"
    },
    {
        "imgPath": "nidus.png",
        "name": "NIDUS",
        "des": "",
        "video": "https://www-static.warframe.com/images/warframes/diorama/nidus.webm"
    },
    {
        "imgPath": "nyx.png",
        "name": "NYX",
        "des": "",
        "video": "https://www-static.warframe.com/images/warframes/diorama/nyx.webm"
    },
    {
        "imgPath": "protea.png",
        "name": "PROTEA",
        "des": "",
        "video": "https://www-static.warframe.com/images/warframes/diorama/protea.webm"
    },
    {
        "imgPath": "rhino.png",
        "name": "RHINO",
        "des": "",
        "video": "https://www-static.warframe.com/images/warframes/diorama/rhino.webm"
    },
    {
        "imgPath": "sevagoth.png",
        "name": "SEVAGOTH",
        "des": "",
        "video": "https://www-static.warframe.com/images/warframes/diorama/sevagoth.webm"
    },
    {
        "imgPath": "styanax.png",
        "name": "STYANAX",
        "des": "",
        "video": "https://www-static.warframe.com/images/warframes/diorama/styanax.webm"
    },
    {
        "imgPath": "tianina.png",
        "name": "TIANINA",
        "des": "",
        "video": "https://www-static.warframe.com/images/warframes/diorama/tianina.webm"
    },
    {
        "imgPath": "trinity.png",
        "name": "TRINITY",
        "des": "",
        "video": "https://www-static.warframe.com/images/warframes/diorama/trinity.webm"
    },
    {
        "imgPath": "volt.png",
        "name": "VOLT",
        "des": "Electricity flows through Volt. His attacks deal high damage. Enemies will be shocked.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/volt.webm"
    },
    {
        "imgPath": "wisp.png",
        "name": "WISP",
        "des": "",
        "video": "https://www-static.warframe.com/images/warframes/diorama/wisp.webm"
    },
    {
        "imgPath": "wukong.png",
        "name": "WUKONG",
        "des": "",
        "video": "https://www-static.warframe.com/images/warframes/diorama/wukong.webm"
    },
    {
        "imgPath": "xaku.png",
        "name": "XAKU",
        "des": "",
        "video": "https://www-static.warframe.com/images/warframes/diorama/xaku.webm"
    },
    {
        "imgPath": "qorvex.png",
        "name": "QORVEX",
        "des": "Albrecht Entrati designed Qorvex to protect a Chosen Operator from the unique hazards of his lab. A Crucible Core gives Qorvex high survivability as he provides crowd control.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/qorvex.webm"
    },
    {
        "imgPath": "nova.png",
        "name": "NOVA",
        "des": "",
        "video": "https://www-static.warframe.com/images/warframes/diorama/nova.webm"
    },
    {
        "imgPath": "atlas.png",
        "name": "ATLAS",
        "des": "Enemies tremble before the brawler with fists as hard as stone. Atlas deals high damage. Command terrestrial elements that form the foundation of any battlefield.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/atlas.webm"
    },
    {
        "imgPath": "vauban.png",
        "name": "VAUBAN",
        "des": "",
        "video": "https://www-static.warframe.com/images/warframes/diorama/vauban.webm"
    },
    {
        "imgPath": "oberon.png",
        "name": "OBERON",
        "des": "Healing and suffering do Oberon’s bidding. His command of the natural world supports allies. Boon to his friends, bane of his foes.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/oberon.webm"
    },
    {
        "imgPath": "baruuk.png",
        "name": "BARUUK",
        "des": "Beware the fury of the truly patient. Baruuk boasts survivability and crowd control. Pushed beyond his restraint, he unleashes the storm within.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/baruuk.webm"
    },
    {
        "imgPath": "nezha.png",
        "name": "NEZHA",
        "des": "",
        "video": "https://www-static.warframe.com/images/warframes/diorama/nezha.webm"
    },
    {
        "imgPath": "nekros.png",
        "name": "NEKROS",
        "des": "",
        "video": "https://www-static.warframe.com/images/warframes/diorama/nekros.webm"
    },
    {
        "imgPath": "loki.png",
        "name": "LOKI",
        "des": "",
        "video": "https://www-static.warframe.com/images/warframes/diorama/loki.webm"
    },
    {
        "imgPath": "limbo.png",
        "name": "LIMBO",
        "des": "",
        "video": "https://www-static.warframe.com/images/warframes/diorama/limbo.webm"
    },
    {
        "imgPath": "garuda.png",
        "name": "GARUDA",
        "des": "",
        "video": "https://www-static.warframe.com/images/warframes/diorama/garuda.webm"
    },
    {
        "imgPath": "frost.png",
        "name": "FROST",
        "des": "",
        "video": "https://www-static.warframe.com/images/warframes/diorama/frost.webm"
    }
]