//Random number Generator
function randNum(min, max) {
    return Math.random() * (max - min) + min;
}

//On mouse movement move the canvas aswell. 
var balls = document.getElementsByClassName('ball');
var menu_button = document.getElementById('info');
document.addEventListener('mousemove', function (e) {
    // var mousePos = getMousePos(canvas, e);
    // vPlayer.x = mousePos.x;
    // vPlayer.y = mousePos.y;
    // offset.directionX = -mousePos.x / 30;
    // offset.directionY = -mousePos.y / 30;

    let x = e.clientX * 100 / window.innerWidth;
    let y = e.clientY * 100 / (window.innerHeight / 3)

    for (var i = 0; i < 2; i++) {
        x = ((x >= 90) ? 90 : (x <= 20 ? 20 : x));
        y = ((y >= 90) ? 90 : (y <= 20 ? 20 : y));
        balls[i].style.left = x + "%";
        balls[i].style.top = y + "%";
        balls[i].style.transform = "translate(-" + x + ",-" + y + ")";
    }
}, false);

function wait(callback, time) {
    var wait_ = window.setTimeout(() => {
        callback();
        clearInterval(wait_);
    }, time);
}

function typeThis(string, id, speed) {
    string = string.split('');
    var text = '';
    var i = 0;
    var typing = window.setInterval(() => {
        if (text.length < string.length) {
            text += string[i];
            i++;
            document.getElementById(id).innerHTML = text;
        } else {
            clearInterval(typing);
        }
    }, speed);
}
typeThis("kunle.dev", "name", 300)
menu_button.onclick = () => {
    $(".more_info_menu").toggleClass('opened');
    $(".more_info").toggleClass('opened');

    $(".more_info_menu").toggleClass('closed');
}

