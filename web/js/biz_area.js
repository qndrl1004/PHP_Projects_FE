$(function () {
  let isStartMotion = true;
  let rfaId1;
  let fnScrollMotion = function () {
    if (!isStartMotion) return;
    isStartMotion = false;
    rfaId1 = requestAnimationFrame(function () {
      $(".sub_area p, .sub_area figure").each(function () {
        let t = $(this).offset().top;
        if (scry >= t - winh * 0.8) {
          $(this).addClass("active");
        } else {
          $(this).removeClass("active");
        }
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
