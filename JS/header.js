function header(){
  $.ajax({
      url: '/Users/sam/Desktop/CodeFiles/whrereAreYou/HTML/header.html',
      cache: false,
      async: false,
      dataType: 'html',
      success: function(html){
          document.write(html);
      }
  });
}

//<script>header();</script>