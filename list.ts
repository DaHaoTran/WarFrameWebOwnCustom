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