var characterstitle = [
    "assets/imgs/characters/NovaDeluxeAoandon.png!00_wIlUVhNXau-msJGB8JRCZQ",
    "assets/imgs/characters/Koumei.png!00_-NDjFdEA7ztzYkdGe0ws8A",
    "assets/imgs/characters/VoltDeluxeRaijin.png!00_7oiD0A0-c7u5xTjwPi7fUg"
];
function GetCharactersTitle() {
    var str = '';
    characterstitle.forEach(function (value) {
        str += "<img class=\"character\" src=".concat(value, " alt=\"character\">");
    });
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
];
function GetAblities() {
    var str = '';
    abilities.forEach(function (value) {
        str +=
            "\n            <div class=\"ability m-3\">\n                <div class=\"header\">\n                <img src=\"".concat(value.imgPath, "\" alt=\"ability\">\n                <h3>").concat(value.name, "</h3>\n                </div>\n                <p>").concat(value.des, "</p>\n            </div>\n        ");
    });
    return str;
}
var warframes = [
    {
        "imgPath": "harrow.png",
        "name": "HARROW",
        "des": "Achieve redemption through vengeance. The monastic Harrow increases damage to support allies. Defy enemies and ascend.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/harrow.webm"
    },
    {
        "imgPath": "chroma.png",
        "name": "CHROMA",
        "des": "Unleash the draconic. Chroma employs Heat, Electricity, Toxin, and Cold to deal high damage while maintaining survivability. Soar with winged fury.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/chroma.webm"
    },
    {
        "imgPath": "citrine.png",
        "name": "CITRINE",
        "des": "Gaze upon the Crystal Bastion. Citrine's crystalline might supports allies on the battlefield. Combat only enhances her fractal beauty.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/citrine.webm"
    },
    {
        "imgPath": "dagath.png",
        "name": "DAGATH",
        "des": "Never underestimate the power and wrath of sullen sadness. Dagath's malice deals high damage.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/dagath.webm"
    },
    {
        "imgPath": "equinox.png",
        "name": "EQUINOX",
        "des": "Equinox rises from the edge of day and night. Her Day form offers offensive support while her Night form offers defensive support. She thrives between realms.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/equinox.webm"
    },
    {
        "imgPath": "gara.png",
        "name": "GARA",
        "des": "Enemies are made fragile by Gara's deadly touch. Gara's vitric abilities provide her and her allies with survivability and deal high damage. Shatter the foe.",
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
        "des": "Annihilate enemies with the conductivity of coils and transmitters. Gyre's electric attacks provide crowd control. She is the embodiment of elegant theory.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/gyre.webm"
    },
    {
        "imgPath": "hildryn.png",
        "name": "HILDRYN",
        "des": "Strength is Hildryn's virtue. Her unique high-damage abilities are powered by her Shields, which can be recharged with Energy. Hildryn proves that a strong offense is a good defense.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/hildryn.webm"
    },
    {
        "imgPath": "ivara.png",
        "name": "IVARA",
        "des": "The huntress draws her bow. Ivara is stealth itself. Her enemies live in fear of her sudden attacks.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/ivara.webm"
    },
    {
        "imgPath": "jade.png",
        "name": "JADE",
        "des": "Become enraptured by the song of devastation. Through her, the Jade Light can be a force of destruction or a source of support.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/jade.webm"
    },
    {
        "imgPath": "khora.png",
        "name": "KHORA",
        "des": "Khora is red in whip and claw. She works together with her Kavat companion, Venari, to deal high damage and provide crowd control. Two bodies, one will.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/khora.webm"
    },
    {
        "imgPath": "koumei.png",
        "name": "KOUMEI",
        "des": "Test your luck with the dice-maiden. Koumei weaves fate to unleash damage and ensure her survival. To the virtuous, she is an oracle. To the wicked, a perilous game of chance.",
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
        "des": "Nidus draws strength from the Infestation. It bolsters him with survivability as he deals high damage and provides crowd control. Plague your enemies.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/nidus.webm"
    },
    {
        "imgPath": "nyx.png",
        "name": "NYX",
        "des": "Psychic attacks make Nyx a dangerous foe. She reaches into enemy consciousness to provide crowd control and turn their attacks back on them. Such manipulation can turn the tide of battle.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/nyx.webm"
    },
    {
        "imgPath": "protea.png",
        "name": "PROTEA",
        "des": "Protea knows all about protection. Her vast arsenal inflicts damage and provides ally support. She can even manipulate time itself.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/protea.webm"
    },
    {
        "imgPath": "rhino.png",
        "name": "RHINO",
        "des": "Rhino packs a punch. He boasts high survivability and crowd control. The wise would do well to stand clear when he charges.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/rhino.webm"
    },
    {
        "imgPath": "sevagoth.png",
        "name": "SEVAGOTH",
        "des": "No longer adrift in the Void, Sevagoth has returned. He and his Shadow deal heavy damage and have high survivability. They are sustained by the reaping of wayward souls.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/sevagoth.webm"
    },
    {
        "imgPath": "styanax.png",
        "name": "STYANAX",
        "des": "Styanax never wonders how many enemies he will face, only where he can find them. The hoplite deals high damage. Enemies tremble before his spear and shield",
        "video": "https://www-static.warframe.com/images/warframes/diorama/styanax.webm"
    },
    {
        "imgPath": "titania.png",
        "name": "TITANIA",
        "des": "Titania fairy-like appearance belies her formidable regal power. The enchantress deals high damage and provides crowd control. She forces opponents to pay homage or perish.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/tianina.webm"
    },
    {
        "imgPath": "trinity.png",
        "name": "TRINITY",
        "des": "Trinity embodies redemption and health. Her extraordinary healing powers support allies. Where others destroy, she restores.",
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
        "des": "Wisp floats between the material and the ethereal. She accesses multiple dimensions to support her allies. Her countenance is mysterious and enigmatic.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/wisp.webm"
    },
    {
        "imgPath": "wukong.png",
        "name": "WUKONG",
        "des": "The simian warrior is a mountain of strength. Wukong deals heavy damage and has high survivability. His quick trickster tactics are unforgettable.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/wukong.webm"
    },
    {
        "imgPath": "xaku.png",
        "name": "XAKU",
        "des": "Broken Warframes adrift in the Void converged to create Xaku. Together, they deal high damage. Xaku proves that the sum of the whole is greater than its parts.",
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
        "des": "Harness antimatter. Nova uses antiparticles to provide crowd control and amplify damage output. She obliterates enemies by destabilizing matter itself.",
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
        "des": "Vauban is the model of innovative technology. He deploys clever inventions to provide crowd control. His tenacity and focus make him formidable.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/vauban.webm"
    },
    {
        "imgPath": "oberon.png",
        "name": "OBERON",
        "des": "Healing and suffering do Oberon's bidding. His command of the natural world supports allies. Boon to his friends, bane of his foes.",
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
        "des": "The mercurial firemonger protects the innocent. Nezha's multifaceted tactics give him high survivability as he inflicts damage and provides crowd control. His fire is the clarion of hope.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/nezha.webm"
    },
    {
        "imgPath": "nekros.png",
        "name": "NEKROS",
        "des": "There is a reaper whose name is Nekros. He provides deathly crowd control. Erstwhile enemies become allies when Nekros calls up recruits from the dead.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/nekros.webm"
    },
    {
        "imgPath": "loki.png",
        "name": "LOKI",
        "des": "Loki knows the art of deception. The trickster employs stealth to sabotage enemies. Sow confusion.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/loki.webm"
    },
    {
        "imgPath": "limbo.png",
        "name": "LIMBO",
        "des": "Master the rift between shadow and substance. Limbo disrupts time-space to provide crowd control. He is at home where others struggle with what is real.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/limbo.webm"
    },
    {
        "imgPath": "garuda.png",
        "name": "GARUDA",
        "des": "Death's crimson maiden sharpens her talons. Garuda weaponizes the blood of her foes to deal high damage. Sanguine beauty complements her deadly power.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/garuda.webm"
    },
    {
        "imgPath": "frost.png",
        "name": "FROST",
        "des": "When Frost steps onto the battlefield, enemies experience a chill. Frost's attacks control crowds, protect objectives, and increase survivability. Wield the biting cold.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/frost.webm"
    },
    {
        "imgPath": "dante.png",
        "name": "DANTE",
        "des": "Seeker of knowledge. Keeper of history. Daring researcher of Leverian lore. Dante composes arcane tales to support allies and devastate enemies.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/dante.webm"
    },
    {
        "imgPath": "mesa.png",
        "name": "MESA",
        "des": "The gunslinger has a steady deadly hand. Each shot deals high damage. Mesa is the fastest draw in the realm.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/mesa.webm"
    },
    {
        "imgPath": "octavia.png",
        "name": "OCTAVIA",
        "des": "Octavia turns bass, beat, and melody into a symphony of devastation. The music of her Mandachord gives her high survivability and supports allies. Her composition means the enemy's destruction.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/octavia.webm"
    },
    {
        "imgPath": "banshee.png",
        "name": "BANSHEE",
        "des": "Banshee's call heralds death. She maintains crowd control and identifies enemy weak points with sonic attacks. Few can hold their position when struck by her force.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/banshee.webm"
    },
    {
        "imgPath": "zephyr.png",
        "name": "ZEPHYR",
        "des": "Command the power of the wind. Zephyr's cyclonic abilities protect her, deal high damage, and provide crowd control. She swoops in from above and leaves a path of destruction.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/zephyr.webm"
    },
    {
        "imgPath": "inaros.png",
        "name": "INAROS",
        "des": "Inaros commands the fearsome desert. He survives like the ever-shifting sands that empower him. Legend recalls Inaros as the Fear-Eater.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/inaros.webm"
    },
    {
        "imgPath": "gauss.png",
        "name": "GAUSS",
        "des": "Take charge with the Saint of Altra. Gauss is fast, deals high damage, and has strong survivability. Movement charges his powerful battery, so never stop moving.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/gauss.webm"
    },
    {
        "imgPath": "saryn.png",
        "name": "SARYN",
        "des": "Toxicity is Saryn's strength. Her serpentine powers deal heavy damage. For Saryn, venom is a virtue.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/saryn.webm"
    },
    {
        "imgPath": "caliban.png",
        "name": "CALIBAN",
        "des": "The heir of twin kingdoms ascends. Biological and Sentient life meet in Caliban. An adept monarch, he offers crowd control and survivability. His creator had more than one world in mind.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/kaliban.webm"
    },
    {
        "imgPath": "voruna.png",
        "name": "VORUNA",
        "des": "Four beasts, one heart. Voruna's loyal wolf pack makes for a deadly combination of strength and stealth. Beware the monstrous howl that heralds fangs of vengeance.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/voruna.webm"
    },
    {
        "imgPath": "lavos.png",
        "name": "LAVOS",
        "des": "The serpents of Lavos encourage him as he transmutes the battlefield. He uses Toxin, Cold, Electricity, and Heat to deal elemental damage. Harness the power of the dark alchemist.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/lavos.webm"
    },
    {
        "imgPath": "ash.png",
        "name": "ASH",
        "des": "Behold the patron saint of the Orokin school of political assassination. Ash specializes in stealth. The edge of his blade is sooner felt than seen.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/ash.webm"
    },
    {
        "imgPath": "hydroid.png",
        "name": "HYDROID",
        "des": "Hydroid summons the power of the ocean depths. He provides crowd control with aqueous attacks. His enemies will meet a watery demise.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/hydroid.webm"
    },
    {
        "imgPath": "revenant.png",
        "name": "REVENANT",
        "des": "Macabre spectral power has risen. Infused with the essence of the Eidolon, Revenant has strong survivability and deals high damage. Enemies become his thralls.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/revenant.webm"
    },
    {
        "imgPath": "mag.png",
        "name": "MAG",
        "des": "Take down your enemies with magnetic force. Mag alters magnetic fields to provide crowd control and strip enemy defenses. Few can resist her attraction or her repulsion.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/mag.webm"
    },
    {
        "imgPath": "yareli.png",
        "name": "YARELI",
        "des": "The waverider can unleash a flood of destruction on the battlefield. Yareli's aqueous attacks deal high damage. Surf's up. Enemies down.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/yareli.webm"
    },
    {
        "imgPath": "mirage.png",
        "name": "MIRAGE",
        "des": "Mirage's sleight of hand complements her might. Her dazzled foes take heavy damage. Doppelgangers, lasers, and traps are elements of her stagecraft.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/mirage.webm"
    },
    {
        "imgPath": "excalibur.png",
        "name": "EXCALIBUR",
        "des": "Excalibur epitomizes the warrior spirit. His master swordsmanship deals high damage. He is the embodiment of martial excellence.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/excalibur.webm"
    },
    {
        "imgPath": "ember.png",
        "name": "EMBER",
        "des": "Harness the power of fire. Ember's heat deals high damage. She keeps a cool head when the battle is hot.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/ember.webm"
    },
    {
        "imgPath": "valkyr.png",
        "name": "VALKYR",
        "des": "Valkyr was modified into a highly motivated and fearsome killer. She is adept at dealing damage and surviving. Her battle cry strikes terror into all who hear it.",
        "video": "https://www-static.warframe.com/images/warframes/diorama/valkyr.webm"
    }
];
console.log("Numbers of warframe: " + warframes.length);
function GetWarframes() {
    var str = '';
    warframes.forEach(function (e) {
        str += "\n            <div class=\"col-md-6 col-lg-2\" onlick=\"GetVideo(".concat(e.video, "})\">\n            <div class=\"card warframe\" data-bs-toggle=\"modal\" data-bs-target=\"#videoModal\">\n              <div class=\"card-body text-center\">\n                <img src=\"/assets/imgs/warframes/").concat(e.imgPath, "\" alt=\"warframe\">\n                <h5>").concat(e.name, "</h5>\n                <p>").concat(e.des, "</p>\n              </div>\n            </div>\n          </div>\n        ");
    });
    return str;
}
function GetVideo(video) {
    document.getElementsByClassName("warframeVideo")[0].setAttribute("src", video);
}
