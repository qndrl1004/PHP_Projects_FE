$(function () {
  let rolling = document.querySelector(".rolling").cloneNode(true);
  document.querySelector(".rolling_container").append(rolling);
  // $(".rolling").clone().append(".rolling_container");

  //swiper
  const swiper = new Swiper(".home_visual", {
    //autoplay:false,
    autoplay: { delay: 1000 },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".pagination",
      type: "bullets",
      clickable: true,
    },

    slidesPerView: 1,
    slidesPerGroup: 1,
  });

  //motion
  let isStartMotion = true;
  let rfaId1;
  let fnScrollMotion = function () {
    if (!isStartMotion) return;
    isStartMotion = false;
    rfaId1 = requestAnimationFrame(function () {
      $(`.feature figure`).each(function () {
        let t = $(this).offset().top;
        if (scry >= t - winh * 0.8) {
          $(this).addClass("active");
        } else {
          $(this).removeClass("active");
        }
      });

      let t = $(`.feature figure div`).offset().top;
      let h = $(`.feature figure div`).innerHeight();
      let meta = 0 + (scry - (t - winh * 0.5 + h * 0.5)) * 0.1;
      if (meta > 10) meta = 10;
      if (meta < -10) meta = -10;
      $(`.feature figure div img`).css({
        transform: `scale(1.3) translateY(${meta}%)`,
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
