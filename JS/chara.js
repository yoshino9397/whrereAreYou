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
  document.getElementById("mainCharaHide").style.opacity = "1";
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
  document.getElementById("mainCharaHide").style.opacity = "0";
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
  document.getElementById("mainCharaHide").style.opacity = "0";
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
  document.getElementById("mainCharaHide").style.opacity = "0";
  document.getElementById("onefloorHide").style.opacity = "0";
  document.getElementById("twofloorHide").style.opacity = "0";
  document.getElementById("threefloorHide").style.opacity = "1";
}


////-----------------スクロール先の位置を調整-------------------------------////
$(function () {
  var headerHeight = 180; //固定ヘッダーの高さを入れる
  $('[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - headerHeight;
    $("html, body").animate({ scrollTop: position }, 700, "swing"); //200はスクロールの移動スピードです
    return false;
  });
});
////-----------------スクロール先の位置を調整 終了-------------------------------////