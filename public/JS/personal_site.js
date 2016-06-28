$('.left').hover(
  function () {
    $('.site-wrapper-inner').css('background-image',
    '-webkit-gradient(linear, left bottom, left top, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(78%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 0.65))), url(pictures/left-mask.png), url(pictures/background_updated.png)'
  )
  setTimeout(function() {
    $('.left').append('<h1>Back-End</h1>');
  }, 1000)
  $('#left-brain-svg').removeAttr('hidden')
  }, function () {
    $('.site-wrapper-inner').css('background-image',
    '-webkit-gradient(linear, left bottom, left top, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(78%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 0.65))), url(pictures/background_updated.png)'
)
$('.left').find( "h1:last" ).remove();
$('#left-brain-svg').prop('hidden', true);
}
);


$('.right').hover(
  function () {
    console.log('hi')
    $('.site-wrapper-inner').css('background-image',
    '-webkit-gradient(linear, left bottom, left top, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(78%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 0.65))), url(pictures/right-mask.png), url(pictures/background_updated.png)'
    )
    setTimeout(function() {
      $('.right').append('<h1>Front-End</h1>');
    }, 1000)
  }, function () {
    $('.site-wrapper-inner').css('background-image',
    '-webkit-gradient(linear, left bottom, left top, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(78%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 0.65))), url(pictures/background_updated.png)'
    )
    $('.right').find( "h1:last" ).remove()
}
);
