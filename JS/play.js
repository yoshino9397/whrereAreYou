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

// function imgchangeGaiyo() {
//   document.getElementById("gaiyo").style.backgroundImage =
//     "url('../IMAGE/arasujiAfter.png')";
//   document.getElementById("nikki").style.backgroundImage =
//     "url(../IMAGE/nikkiBefore.png)";
//   document.getElementById("nikkiHide").style.opacity = "0";
//   document.getElementById("arasujiHide").style.opacity = "1";
// }

// function imgchangeSei() {
//   document.getElementById("sei").style.backgroundImage =
//     "url(../IMAGE/nikkiAfter.png)";
//   document.getElementById("arasuji").style.backgroundImage =
//     "url(../IMAGE/arasujiBefore.png)";
//   document.getElementById("arasujiHide").style.opacity = "0";
//   document.getElementById("nikkiHide").style.opacity = "1";
// }

