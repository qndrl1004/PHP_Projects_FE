$(function(){
  $('.mbtn').click(function(){
    $(this).toggleClass('active')
    $('.gnb-sm').stop().fadeToggle()
    $('.gnb-video')[0].play()
  })
})//ready