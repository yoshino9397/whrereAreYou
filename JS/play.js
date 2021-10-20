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


window.setTimeout(messageInKanji, 2000);
function messageInKanji() {
  document.getElementById("ikanaideKanji").style.opacity="1";
}
window.setTimeout(messageOutKanji, 5000);
function messageOutKanji() {
  document.getElementById("ikanaideKanji").style.opacity="0";
}
window.setTimeout(messageInKana, 4000);
function messageInKana() {
  document.getElementById("ikanaideKana").style.opacity="1";
}
window.setTimeout(messageOutKana, 7000);
function messageOutKana() {
  document.getElementById("ikanaideKana").style.opacity="0";
}
window.setTimeout(messageInBig, 8500);
function messageInBig() {
  document.getElementById("ikanaideBig").style.opacity="1";
}
window.setTimeout(messageOutBig, 10500);
function messageOutBig() {
  document.getElementById("ikanaideBig").style.opacity="0";
}

window.setTimeout(messageInHand1, 11000);
function messageInHand1() {
  document.getElementById("hand1").style.opacity="1";
}
window.setTimeout(messageInHand2, 11500);
function messageInHand2() {
  document.getElementById("hand2").style.opacity="1";
}
window.setTimeout(messageInHand3, 12000);
function messageInHand3() {
  document.getElementById("hand3").style.opacity="1";
}
window.setTimeout(messageInHand4, 12300);
function messageInHand4() {
  document.getElementById("hand4").style.opacity="1";
}
window.setTimeout(messageInHand5, 12600);
function messageInHand5() {
  document.getElementById("hand5").style.opacity="1";
}
window.setTimeout(messageInHand6, 12700);
function messageInHand6() {
  document.getElementById("hand6").style.opacity="1";
}
window.setTimeout(messageInHand7, 12800);
function messageInHand7() {
  document.getElementById("hand7").style.opacity="1";
}

window.setTimeout(messageOutHand, 14500);
function messageOutHand() {
  document.getElementById("hand1").style.opacity="0";
  document.getElementById("hand2").style.opacity="0";
  document.getElementById("hand3").style.opacity="0";
  document.getElementById("hand4").style.opacity="0";
  document.getElementById("hand5").style.opacity="0";
  document.getElementById("hand6").style.opacity="0";
  document.getElementById("hand7").style.opacity="0";
}
