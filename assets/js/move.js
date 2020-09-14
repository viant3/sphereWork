$(".move-area").mousemove(function(event) {
    var eye = $(".ball");
    var x = (eye.offset().left) + (eye.width() );
    var y = (eye.offset().top) + (eye.height() );
    var rad = Math.atan2(event.pageX - x, event.pageY - y);
    var rot = (rad * (180 / Math.PI) * -1) + 180;
    eye.css({
      '-webkit-transform': 'rotate(' + rot + 'deg)',
      '-moz-transform': 'rotate(' + rot + 'deg)',
      '-ms-transform': 'rotate(' + rot + 'deg)',
      'transform': 'rotate(' + rot + 'deg)'
    });
  });

  jQuery(document).ready(function(){
    jQuery('#hideshow').on('click', function(event) {        
        jQuery('#content').toggle('show');
    });
})