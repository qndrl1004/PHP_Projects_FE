$(function () {
  let fnGetWinInfo = function () {
    window.scry = $(window).scrollTop();
    window.scrx = $(window).scrollLeft();
    window.winh = $(window).height();
    window.winw = $(window).width();
  };

  fnGetWinInfo();
  $(window)
    .scroll(function () {
      fnGetWinInfo();
    })
    .resize(function () {
      fnGetWinInfo();
    });
}); //ready1
