$(function () {
  let isStartMotion = true;
  let rfaId1;
  let fnScrollMotion = function () {
    if (!isStartMotion) return;
    isStartMotion = false;
    rfaId1 = requestAnimationFrame(function () {
      $(".greet_section > *").each(function () {
        let t = $(this).offset().top;
        if (scry >= t - winh * 0.8) {
          $(this).addClass("active");
        } else {
          $(this).removeClass("active");
        }
      });
      // img---------------------------------
      let t = $(".greet_section figure").offset().top;
      let h = $(".greet_section figure").innerHeight();
      let meta = 0 + (scry - (t - winh * 0.5 + h * 0.5)) * 0.2;
      if (meta < -15) {
        meta = -15;
      }
      if (meta > 15) {
        meta = 15;
      }
      $(".greet_section figure img").css({
        transform: `scale(1.4) translateY(${meta}%)`,
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
