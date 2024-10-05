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