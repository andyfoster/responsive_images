$(document).ready(function() {
  var n = "#nav", no = "nav-open";
  $("#nav-menu").click(function(){
    if ($(n).hasClass(no)) {
      $(n).removeClass(no);
    } else {
      // $(n).addClass(no);
      var newHeight = $(n).css('height', 'auto').height();
      $(n).height(0).animate({height:newHeight}, 300);
    }
  });
});
