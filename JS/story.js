// document
//   .getElementById("light")
//   .animate(
//     [
//       { transform: "translateX(0px)" },
//       { transform: "translateY(10px)" },
//       { transform: "translateX(-10px)" },
//       { transform: "translateX(0px)" },
//     ],
//     {
//       duration: 4500,
//       iterations: Infinity,
//     }
//   );

function imgchangeArasuji() {
  document.getElementById("arasuji").style.backgroundImage =
    "url('../IMAGE/arasujiAfter.png')";
  document.getElementById("nikki").style.backgroundImage =
    "url(../IMAGE/nikkiBefore.png)";
  document.getElementById("nikkiHide").style.opacity = "0";
  document.getElementById("arasujiHide").style.opacity = "1";
}

function imgchangeNikki() {
  document.getElementById("nikki").style.backgroundImage =
    "url(../IMAGE/nikkiAfter.png)";
  document.getElementById("arasuji").style.backgroundImage =
    "url(../IMAGE/arasujiBefore.png)";
  document.getElementById("arasujiHide").style.opacity = "0";
  document.getElementById("nikkiHide").style.opacity = "1";
}
