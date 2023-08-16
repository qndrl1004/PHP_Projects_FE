$(function () {
  //section1
  var isStartMotion = true;
  var rafId;
  var scrollMotion = function () {
    if (!isStartMotion) return;
    isStartMotion = false;
    rafId = requestAnimationFrame(function () {
      //code start
      var t = $("section.home-feature").offset().top;
      if (scry >= t - winh * 0.5) {
        $("section.home-visual .textbox, body").removeClass("active");
      } else {
        $("section.home-visual .textbox, body").addClass("active");
      }
      //code end
      isStartMotion = true;
    }); //requestAnimationFrame
  }; //scrollMotion

  scrollMotion();
  $(window)
    .scroll(function () {
      scrollMotion();
    })
    .resize(function () {
      scrollMotion();
    }); //window event
}); //ready

$(function () {
  //section2
  c1 = 0;
  t1 = 0;
  c2 = 0;
  t2 = 0;
  setInterval(function () {
    c1 += (t1 - c1) * 0.2;
    c2 += (t2 - c2) * 0.2;
    $(".count1").text(`${Math.round(c1)}+`);
    $(".count2").text(`${Math.round(c2)}+`);
  }, 50);

  var isStartMotion = true;
  var rafId;
  var scrollMotion = function () {
    if (!isStartMotion) return;
    isStartMotion = false;
    rafId = requestAnimationFrame(function () {
      //code start
      var t = $(".counter").offset().top;
      if (scry > t - winh * 0.9) {
        t1 = 200;
        t2 = 100;
      } else {
        t1 = 0;
        t2 = 0;
      }
      //code end
      isStartMotion = true;
    }); //requestAnimationFrame
  }; //scrollMotion
  scrollMotion();
  $(window)
    .scroll(function () {
      scrollMotion();
    })
    .resize(function () {
      scrollMotion();
    });
}); //ready

$(function () {
  //section-service
  const swiper = new Swiper(".service-carousel", {
    autoplay: false,
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
  });
}); //ready

$(function () {
  //home-works
  let data = [
    { id: 1, title: "엠피알 브레인", img: "site1.jpg" },
    { id: 2, title: "수퍼 게이트", img: "site2.jpg" },
    { id: 3, title: "디자인 하우스", img: "site3.jpg" },
    { id: 4, title: "서울리빙 디자인", img: "site4.jpg" },
    { id: 5, title: "서울 디자인 페스티벌", img: "site5.jpg" },
    { id: 6, title: "리트빅", img: "site6.jpg" },
  ];
  document.querySelector(".home-works .section-summary").insertAdjacentHTML(
    "afterend",
    `
    <ul>

    </ul>
  `
  );
  data.forEach((v) => {
    document.querySelector(".home-works ul").insertAdjacentHTML(
      "beforeend",
      `
    <li>
      <a href="">
        <figure>
         <img src="./img/home/${v.img}" alt="">
          <i class="fas fa-arrow-right"></i>
        </figure>
        <h3>${v.title}</h3>
      </a>
    </li>
    `
    );
  });
  $(window).load(function () {
    $(".home-works ul").masonry({ itemSelector: ".home-works ul li" });
  });
}); //ready

$(function () {
  var imgs = [
    {
      title: "1. 담당 PM이 도와드릴거예요.",
      desc: "원활한 소통을 위해담당 PM이 배정됩니다. 의뢰인은 사이트 제작에 필요한 디테일한 디자인 또는 개발 요청사항을 담당 PM과 편리하게 상의할 수 있습니다.",
      img: "process1.png",
    },
    {
      title: "2. 사이트의 목적을 알려주세요.",
      desc: "회사나 브랜드 소개 사이트, 상품 판매 온라인 스토어, 프로모션 사이트와 같이 사이트 유형에 따라 맞춤 설계 플랫폼을 제안드릴거예요.",
      img: "process2.png",
    },
    {
      title: "3. 사이트 기획안을 확인해주세요.",
      desc: "사이트 유형에 따라 제작 플랫폼이 선정되면 의뢰인으로부터 제공받은 기초자료를 토대로 사이트의 화면 설계에 대한 기획안 또는 시안을 공유드립니다.",
      img: "process3.png",
    },
    {
      title: "4. 사이트 화면을 개발합니다.",
      desc: "유형별 제작 플랫폼의 개발 환경을 설정하고, 기획안에 따라 각각의 웹페이지를 코딩하고 개발합니다. 물론 의뢰인은 진행상황을 확인할 수 있습니다.",
      img: "process4.png",
    },
    {
      title: "5. 완성된 사이트를 확인합니다.",
      desc: "기획안에 충실한 개발이 완료되면 의뢰인은 완성된 사이트를 확인하게 됩니다. 추가 수정보완 사항을 검토하고, 사이트 운영에 대한 교육을 제공합니다.",
      img: "process5.png",
    },
  ];

  imgs.forEach((v) => {
    $(".home-process .swiper-wrapper").append(`
    <div class="swiper-slide">
    <img src="./img/home/${v.img}" alt="">
    <h3>${v.title}</h3>
    <p>${v.desc}</p>
    </div>
    `);
  });

  const swiper = new Swiper(".home-process .carousel", {
    autoplay: false,
    loop: false,
    pagination: {
      el: ".indicator",
      type: "bullets",
      clickable: true,
    },

    slidesPerView: 1,
    slidesPerGroup: 1,
    breakpoints: {
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
  });
});
