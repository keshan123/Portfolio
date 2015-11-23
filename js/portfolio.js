$(document).ready(function(){
var bubble = function (event){

  var $b = $('<div/>').addClass('bubble');
  $b.css({
    left:event.clientX,
    top:event.clientY

  })
  $('body').append($b);

  setTimeout(function(){
    $b.fadeOut();
  }, 1400);
};

$(window).on('mouseover', bubble);

});