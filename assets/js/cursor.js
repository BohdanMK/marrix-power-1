
console.log('1231231');

$(document).ready(function(){

  var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if(windowWidth > 991) {
    $("body").on("mousemove", function (n) {
      a.css({'left' : n.clientX + "px" });
      a.css({'top' : n.clientY + "px" });
      b.css({'left' : n.clientX + "px" });
      b.css({'top' : n.clientY + "px" });
      c.css({'left' : n.clientX + "px" });
      c.css({'top' : n.clientY + "px" });
    });

    var a = $("#cursor"),
        b = $("#cursor2"),
        c = $("#cursor3");

    function n(t) {
      b.addClass("hover");
      c.addClass("hover");
    }

    function s(t) {
      b.removeClass("hover");
      c.removeClass("hover");
    }

    s();

    $("a").on('mouseover', n );
    $("a").on('mouseout', s );
    $("button").on('mouseover', n );
    $("button").on('mouseout', s );
  }



})


