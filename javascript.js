$(document).ready(function() {
  var n = "#nav", no = "nav-open";
  $("#nav-menu").click(function(){
    if ($(n).hasClass(no)) {
      $(n).animate({height:0}, 300);

      // remove the nasty styling link that will mess up anything else the user tries to do
      setTimeout(function(){
        $(n).removeClass(no).removeAttr('style');
      },320);

    } else {

      var newHeight = $(n).css('height', 'auto').height();

      $(n).height(0).animate({height:newHeight}, 300);
      setTimeout(function(){
        $(n).addClass(no).removeAttr('style');
      },320);
    }
  });
});
