$('.left').hover(
  function () {
    console.log('hi')
    $('.site-wrapper-inner').css('background-image',
    '-webkit-gradient(linear, left bottom, left top, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(78%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 0.65))), url(pictures/left-mask.png), url(pictures/background_updated.png)'
  )
  }, function () {
    $('.site-wrapper-inner').css('background-image',
    '-webkit-gradient(linear, left bottom, left top, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(78%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 0.65))), url(pictures/background_updated.png)'
)
}
);


$('.right').hover(
  function () {
    console.log('hi')
    $('.site-wrapper-inner').css('background-image',
    '-webkit-gradient(linear, left bottom, left top, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(78%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 0.65))), url(pictures/right-mask.png), url(pictures/background_updated.png)'
  )
  }, function () {
    $('.site-wrapper-inner').css('background-image',
    '-webkit-gradient(linear, left bottom, left top, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(78%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 0.65))), url(pictures/background_updated.png)'
)
}
);
