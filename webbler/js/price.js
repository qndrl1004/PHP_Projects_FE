$(function () {
  var priceArr = [
    {
      option: { name: 'Starter', desc: '간략한 홍보 사이트 제작이라면' },
      price: '200만원',
      details: {
        '5개': '페이지 내외',
        '25개': '페이지 내외',
        '22개': '콘텐츠 블럭 디자인',
        '반응형': '모바일 최적화',
        '제작기간': '20일 이내',
      },
    },

    {
      option: { name: 'Starter', desc: '간략한 홍보 사이트 제작이라면' },
      price: '200만원',
      details: {
        '5개': '페이지 내외',
        '25개': '페이지 내외',
        '23개': '콘텐츠 블럭 디자인',
        '반응형': '모바일 최적화',
        '제작기간': '20일 이내',
      },
    },

    {
      option: { name: 'Starter', desc: '간략한 홍보 사이트 제작이라면' },
      price: '200만원',
      details: {
        '5개': '페이지 내외',
        '25개': '페이지 내외',
        '24개': '콘텐츠 블럭 디자인',
        '반응형': '모바일 최적화',
        '제작기간': '20일 이내',
      },
    },
  ]//priceArr

  priceArr.forEach(v => {
    $('.price-table').append(`
      <li>
        <p class="option">
          <em>${v.option.name}</em>
          <span>${v.option.desc}</span>
        </p>
        <p class="price">
          <b>${v.price}</b>
          <span>부터</span>
        </p>
        <div></div>
        <p>
          <a href="./contact.php">문의하기</a>
        </p>
      </li>
    `)

    for (key in v.details) {
      $('.price-table li:last-child div').append(`
        <p>
          <i>${key}</i>
          <span>${v.details[key]}</span>
        </p>
      `)
    }//for in  

  })//forEach

  var isStartMotion = true
  var rafId
  var scrollMotion = function () {
    if (!isStartMotion) return
    isStartMotion = false
    rafId = requestAnimationFrame(function () {
      //code start
      var t = $('.title-img').offset().top
      if(scry >= t - winh * .6) $('.title-img img').addClass('active')
      else $('.title-img img').removeClass('active')
      $('.price-table p').each(function(){
        var t = $(this).offset().top
        if(scry >= t - winh ) $(this).addClass('active')
        else $(this).removeClass('active')
      })//each
      //code end 
      isStartMotion = true
    })//requestAnimationFrame
  }//scrollMotion
  scrollMotion()
  $(window).scroll(function () {
    scrollMotion()
  }).resize(function () {
    scrollMotion()
  })
})//ready

/* 
var obj ={
  name : '홍길동',
  age : '24',
  gender : '남'
}

for(key in obj){
  console.log(key, obj[key])
}
 */