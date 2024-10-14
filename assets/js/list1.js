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

window.addEventListener('scroll', function() {
    const section5 = document.querySelector('.section5');
    const part1 = document.querySelector('.part1');
    const section5Top = section5.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (section5Top < windowHeight && section5Top > 0) {
        const moveDistance = 100 - (100 * (windowHeight - section5Top) / windowHeight); // Adjusting the speed of movement
        part1.style.left = `${moveDistance}px`;
    } else if (section5Top <= 0) {
        part1.style.left = '0px';
    } else {
        part1.style.left = '100px';
    }
});
