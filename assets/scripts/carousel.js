
function arrowMove(x) {

    var move = document.querySelector(".emmetCard")

    if (x == 1) {
        move.scrollLeft = move.scrollLeft - 200;
    } else if (x == 2) {
        move.scrollLeft = move.scrollLeft + 100;
    }

}
