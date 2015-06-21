$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
  $('.ryu-ready').show();
  $('.ryu-cool').hide();

})
 .mouseleave(function() {
    $('.ryu-ready').hide();
  $('.ryu-still').show();
  $('.ryu-cool').hide();
})

.mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.ryu-cool').hide();
    $('.ryu-still').hide();
  $('.hadouken').finish().show()
    .animate(
      {'left': '300px'},
  500,
  function() {
    $(this).hide();
    $(this).css('left', '-212px');
  }
  );
    // show hadouken and animate it to the right of the screen
  })
  .mouseup(function() {

    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
    $('.ryu-still').hide();
    $('.ryu-cool').hide();
    // ryu goes back to his ready position

})

  $("body").keydown(function(e) {
    if (e.which == 88) {
    $('.ryu-still').hide();
    $('.ryu-ready').hide();
    $('.ryu-cool').show();
    $('.hadouken').hide();
    $('.ryu-throwing').hide();
}
})

$("body").keyup(function(e) {
  if (e.which == 88) {
    $('.ryu-still').show();
    $('.ryu-ready').hide();
    $('.ryu-cool').hide();
    $('.hadouken').hide();
    $('.ryu-throwing').hide();
  }
  })

});
// sound function
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}