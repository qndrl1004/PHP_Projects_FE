$(function () {
  let isStartMotion = true;
  let rfaId1;
  let fnScrollMotion = function () {
    if (!isStartMotion) return;
    isStartMotion = false;
    rfaId1 = requestAnimationFrame(function () {
      $(".biz_intro > p").each(function () {
        let t = $(this).offset().top;
        if (scry >= t - winh * 0.8) {
          $(this).addClass("active");
        } else {
          $(this).removeClass("active");
        }
      });

      $(".biz_intro figure").each(function () {
        let t = $(this).offset().top;
        let h = $(this).innerHeight();
        let meta = 1 + Math.abs(scry - (t - winh * 0.5 + h * 0.5)) * -0.0005;
        $(this).css({ transform: `scale(${meta})`, opacity: meta });
      });
      isStartMotion = true;
    });
  };

  fnScrollMotion();
  $(window)
    .scroll(function () {
      fnScrollMotion();
    })
    .resize(function () {
      fnScrollMotion();
    });
}); //ready1
