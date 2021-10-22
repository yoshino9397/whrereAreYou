function imgchangemain() {
  document.getElementById("main").style.backgroundImage =
    "url('../IMAGE/maincharaAfter.png')";
  document.getElementById("onefloor").style.backgroundImage =
    "url(../IMAGE/onefloorBefore.png)";
  document.getElementById("twofloor").style.backgroundImage =
    "url(../IMAGE/twofloorBefore.png)";
  document.getElementById("threefloor").style.backgroundImage =
    "url(../IMAGE/threefloorBefore.png)";
  document.getElementById("onefloorHide").style.opacity = "0";
  document.getElementById("twofloorHide").style.opacity = "0";
  document.getElementById("threefloorHide").style.opacity = "0";
  document.getElementById("mainHide").style.opacity = "1";
}

function imgchangeonefloor() {
  document.getElementById("onefloor").style.backgroundImage =
    "url('../IMAGE/onefloorAfter.png')";
  document.getElementById("main").style.backgroundImage =
    "url(../IMAGE/mainTagBefore.png)";
  document.getElementById("twofloor").style.backgroundImage =
    "url(../IMAGE/twofloorBefore.png)";
  document.getElementById("threefloor").style.backgroundImage =
    "url(../IMAGE/threefloorBefore.png)";
  document.getElementById("mainHide").style.opacity = "0";
  document.getElementById("twofloorHide").style.opacity = "0";
  document.getElementById("threefloorHide").style.opacity = "0";
  document.getElementById("onefloorHide").style.opacity = "1";
}
function imgchangetwofloor() {
  document.getElementById("twofloor").style.backgroundImage =
    "url('../IMAGE/twofloorAfter.png')";
  document.getElementById("main").style.backgroundImage =
    "url(../IMAGE/mainTagBefore.png)";
  document.getElementById("onefloor").style.backgroundImage =
    "url(../IMAGE/onefloorBefore.png)";
  document.getElementById("threefloor").style.backgroundImage =
    "url(../IMAGE/threefloorBefore.png)";
  document.getElementById("mainHide").style.opacity = "0";
  document.getElementById("onefloorHide").style.opacity = "0";
  document.getElementById("threefloorHide").style.opacity = "0";
  document.getElementById("twofloorHide").style.opacity = "1";
}
function imgchangethreefloor() {
  document.getElementById("threefloor").style.backgroundImage =
    "url('../IMAGE/threefloorAfter.png')";
  document.getElementById("main").style.backgroundImage =
    "url(../IMAGE/mainTagBefore.png)";
  document.getElementById("onefloor").style.backgroundImage =
    "url(../IMAGE/onefloorBefore.png)";
  document.getElementById("twofloor").style.backgroundImage =
    "url(../IMAGE/twofloorBefore.png)";
  document.getElementById("mainHide").style.opacity = "0";
  document.getElementById("onefloorHide").style.opacity = "0";
  document.getElementById("twofloorHide").style.opacity = "0";
  document.getElementById("threefloorHide").style.opacity = "1";
}
