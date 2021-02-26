var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollpos = window.pageYOffset;
    if(prevScrollpos > currentScrollpos) {
        document.getElementById('menu').style.top = "0";
    } else {
        document.getElementById('menu').style.top = "-100px";
    }
    prevScrollpos = currentScrollpos;
}