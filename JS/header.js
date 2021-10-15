function header() {
  $.ajax({
    url: "/Users/sam/Desktop/CodeFiles/whrereAreYou/HTML/header.html",
    cache: false,
    async: false,
    dataType: "html",
    success: function (html) {
      document.write(html);
    },
  });
}
////////////---------BGM AutoLoop--------////////////////////////////////////
window.addEventListener("DOMContentLoaded", function () {
  var vid = document.getElementById("music");
  vid.loop = true;
  vid.volume = 0.2;
  vid.load();
});
//////////////----BGM ONOFF------//////////////////////////
var music = document.getElementById("music");

function enableMute() {
  music.muted = true;
}

function disableMute() {
  music.muted = false;
  music.play();
}

////////////-----BGM imageChange--------///////////////////
var newImg = "../IMAGE/bgmOffOn.png"
var off1= "../IMAGE/bgmOnoff.png"
function henkou1(){
  document.getElementById("bgmon").src = newImg;
  document.getElementById("bgmoff").src = off1;

}
var newImg2 = "../IMAGE/bgmOffoff.png"
var off2 = "../IMAGE/bgmOnon.png"
function henkou2(){
  document.getElementById("bgmoff").src = newImg2;
  document.getElementById("bgmon").src = off2;
  
}
//<script>header();</script>
