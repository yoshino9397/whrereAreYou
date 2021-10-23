var display = function () {
  var div = document.getElementById("buttonClose");
  var state = div.style.display;

  if (state == "none") {
    //とじるの状態//
    div.setAttribute("style", "display:block");
    document.getElementById("buttonOpen").style.opacity = "0";
    document.getElementById("bottom").style.marginTop = "20%";
    document.getElementById("bottom").style.transition=".3s";
    document.getElementById("open").style.opacity="1";
    document.getElementById("open").style.transition=".5s ease-in-out";
    //デバッグ用
    console.log("block");
  } else {
    //ひらくの状態//
    div.setAttribute("style", "display:none");
    document.getElementById("buttonOpen").style.opacity = "1";
    document.getElementById("bottom").style.marginTop = "5%";
    document.getElementById("bottom").style.transition=".5s";
    document.getElementById("open").style.opacity="0";
    document.getElementById("open").style.transition=".25s ease-in-out";
    //デバッグ用
    console.log("none");
  }
};
