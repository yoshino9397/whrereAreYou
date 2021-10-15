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
  vid.load();

  const audioElement = document.querySelector("music");

  audioElement.addEventListener("loadeddata", (e) => {
    audioElement.muted = true;
    audioElement.autoplay = true;
  });
});
//////////////----BGM ONOFF------//////////////////////////
var music = document.getElementById("music");

function enableMute() {
  music.muted = true;
}

function disableMute() {
  music.muted = false;
}

//<script>header();</script>
