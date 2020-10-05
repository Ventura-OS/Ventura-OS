setInterval(function(){
    document.getElementById("desk").style.height = cijs("sizeScreenH") - 188 + "px"
}, 50);
document.getElementById("startbtn").onclick = function() {
    if (document.getElementById("startmenu").className == "hstartm") {
        document.getElementById("startmenu").className = "sstartm"
    } else if (document.getElementById("startmenu").className == "sstartm") {
        document.getElementById("startmenu").className = "hstartm"
    }
}
window.onclick = function(event) {
    if (event.target == document.getElementById("startmenu")) {
        document.getElementById("startmenu").className = "hstartm"
    }
  }