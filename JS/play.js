// // TextRandomAnimeにappearRandomtextというクラス名を付ける定義
// function TextRandomAnimeControl() {
//   $('.TextRandomAnime').each(function () {
//     var scroll = $(window).scrollTop();
//     var windowHeight = $(window).height();
//     if (scroll == windowHeight) {
//       $(this).addClass("appearRandomtext");

//     } else {
//       $(this).removeClass("appearRandomtext");
//     }
//   });
// }

// // 画面をスクロールをしたら動かしたい場合の記述
// $(window).scroll(function () {
//   TextRandomAnimeControl();/* アニメーション用の関数を呼ぶ*/
// });// ここまで画面をスクロールをしたら動かしたい場合の記述

function imgchangeGaiyo() {
  document.getElementById("gaiyo").style.backgroundImage =
    "url('../IMAGE/gaiyoAfter.png')";
  document.getElementById("sei").style.backgroundImage =
    "url(../IMAGE/seiBefore.png)";
  document.getElementById("yado").style.backgroundImage =
    "url(../IMAGE/yadoBefore.png)";
  document.getElementById("town").style.backgroundImage =
    "url(../IMAGE/townBefore.png)";
  document.getElementById("igyo").style.backgroundImage =
    "url(../IMAGE/monsterBefore.png)";
  document.getElementById("seiHide").style.opacity = "0";
  document.getElementById("yadoHide").style.opacity = "0";
  document.getElementById("townHide").style.opacity = "0";
  document.getElementById("igyoHide").style.opacity = "0";
  document.getElementById("gaiyoHide").style.opacity = "1";
}

function imgchangeSei() {
  document.getElementById("sei").style.backgroundImage =
    "url(../IMAGE/seiAfter.png)";
  document.getElementById("gaiyo").style.backgroundImage =
    "url('../IMAGE/gaiyoBefore.png')";
  document.getElementById("yado").style.backgroundImage =
    "url(../IMAGE/yadoBefore.png)";
  document.getElementById("town").style.backgroundImage =
    "url(../IMAGE/townBefore.png)";
  document.getElementById("igyo").style.backgroundImage =
    "url(../IMAGE/monsterBefore.png)";
  document.getElementById("gaiyoHide").style.opacity = "0";
  document.getElementById("yadoHide").style.opacity = "0";
  document.getElementById("townHide").style.opacity = "0";
  document.getElementById("igyoHide").style.opacity = "0";
  document.getElementById("seiHide").style.opacity = "1";
}
function imgchangeYado() {
  document.getElementById("yado").style.backgroundImage =
    "url(../IMAGE/yadoAfter.png)";
  document.getElementById("gaiyo").style.backgroundImage =
    "url('../IMAGE/gaiyoBefore.png')";
  document.getElementById("sei").style.backgroundImage =
    "url(../IMAGE/seiBefore.png)";
  document.getElementById("town").style.backgroundImage =
    "url(../IMAGE/townBefore.png)";
  document.getElementById("igyo").style.backgroundImage =
    "url(../IMAGE/monsterBefore.png)";
  document.getElementById("gaiyoHide").style.opacity = "0";
  document.getElementById("seiHide").style.opacity = "0";
  document.getElementById("townHide").style.opacity = "0";
  document.getElementById("igyoHide").style.opacity = "0";
  document.getElementById("yadoHide").style.opacity = "1";
}
function imgchangeTown() {
  document.getElementById("town").style.backgroundImage =
    "url(../IMAGE/townAfter.png)";
  document.getElementById("gaiyo").style.backgroundImage =
    "url('../IMAGE/gaiyoBefore.png')";
  document.getElementById("sei").style.backgroundImage =
    "url(../IMAGE/seiBefore.png)";
  document.getElementById("yado").style.backgroundImage =
    "url(../IMAGE/yadoBefore.png)";
  document.getElementById("igyo").style.backgroundImage =
    "url(../IMAGE/monsterBefore.png)";
  document.getElementById("gaiyoHide").style.opacity = "0";
  document.getElementById("seiHide").style.opacity = "0";
  document.getElementById("yadoHide").style.opacity = "0";
  document.getElementById("igyoHide").style.opacity = "0";
  document.getElementById("townHide").style.opacity = "1";
}
function imgchangeIgyo() {
  document.getElementById("igyo").style.backgroundImage =
    "url(../IMAGE/monsterAfter.png)";
  document.getElementById("gaiyo").style.backgroundImage =
    "url('../IMAGE/gaiyoBefore.png')";
  document.getElementById("sei").style.backgroundImage =
    "url(../IMAGE/seiBefore.png)";
  document.getElementById("town").style.backgroundImage =
    "url(../IMAGE/townBefore.png)";
  document.getElementById("town").style.backgroundImage =
    "url(../IMAGE/townBefore.png)";
  document.getElementById("gaiyoHide").style.opacity = "0";
  document.getElementById("seiHide").style.opacity = "0";
  document.getElementById("townHide").style.opacity = "0";
  document.getElementById("yadoHide").style.opacity = "0";
  document.getElementById("igyoHide").style.opacity = "1";
}

  $(function() {
    var headerHeight = 180;//固定ヘッダーの高さを入れる
    $('[href^="#"]').click(function(){
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top-headerHeight; 
      $("html, body").animate({scrollTop:position}, 700, "swing");//200はスクロールの移動スピードです
      return false;
    });
  });
