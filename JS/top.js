///////-------------------------ライト点滅--------------------///////////////
function start() {
      setTimeout(function () {
        $("#ash").fadeOut(100, function () {
          $(this).fadeIn(100);
        });
      }, 5000);
      setTimeout(function () {
        $("#ash").fadeOut(100, function () {
          $(this).fadeIn(100);
        });
      }, 1000);
      setTimeout(function () {
        $("#ash").fadeOut(100, function () {
          $(this).fadeIn(100);
        });
      }, 1200);
      setTimeout(function () {
        $("#ash").fadeOut(100, function () {
          $(this).fadeIn(100);
        });
        start();
      }, 4000);
    }
    start();
///////////-----------------------------------------------------//////