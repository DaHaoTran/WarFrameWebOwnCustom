var characterstitle = [
    "NovaDeluxeAoandon.png!00_wIlUVhNXau-msJGB8JRCZQ",
    "Koumei.png!00_-NDjFdEA7ztzYkdGe0ws8A",
    "VoltDeluxeRaijin.png!00_7oiD0A0-c7u5xTjwPi7fUg"
];
function GetCharactersTitle() {
    var str = '';
    characterstitle.forEach(function (value) {
        str += "<img class=\"character\" src=\"assets/imgs/characters/".concat(value, "\" alt=\"character\">");
    });
    return str;
}

function GetVideo(video) {
    document.getElementsByClassName("warframeVideo")[0].setAttribute("src", video);
}