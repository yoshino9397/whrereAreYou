var display = function () {
  var div = document.getElementById("buttonClose");
  var state = div.style.display;

  if (state == "none") {
    div.setAttribute("style", "display:block");
    document.getElementById("buttonOpen").style.opacity = "0";
    //デバッグ用
    console.log("block");
  } else {
    div.setAttribute("style", "display:none");
    document.getElementById("buttonOpen").style.opacity = "1";
    //デバッグ用
    console.log("none");
  }
};
