var cards = ["c", "first", "second", "third", "fourth"];
var currIndex = 0;

//leftpress
function downpress() {
    if (currIndex != 0) {
        document.getElementById(cards[currIndex]).classList.remove('show');
        currIndex -= 1;
        document.getElementById(cards[currIndex]).classList.add('show');
    }
    return 0;
}

//rightpress
function uppress() {
    console.log(currIndex + " " + cards[currIndex]);
    if (currIndex != 4) {
        document.getElementById(cards[currIndex]).classList.remove('show');
        currIndex += 1;
        document.getElementById(cards[currIndex]).classList.add('show');
    }
    return 0;
}

function checkIfAtEnds() {
    if (currIndex == 0) {
        document.getElementById("upB").style.opacity = 0;
    }
    else if (currIndex == cards.length-1) {
        document.getElementById("downB").style.opacity = 0;
    }
    else {
        document.getElementById("downB").style.opacity = 100;
        document.getElementById("upB").style.opacity = 100;
    }
}

window.onload = function() {
    checkIfAtEnds();
}