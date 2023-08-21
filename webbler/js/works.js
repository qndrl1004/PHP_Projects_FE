$(function(){
  prjArr.forEach(function(v){
    var {id, title, slogun} = v
    title = title.join(' ')
   
    $('.works-content').append(`
      <figure>
        <a href="./detail.php?id=${id}">
          <div>
            <img src="./img/works/site${id}.jpg" alt>
          </div>
          <figcaption>
            <h2>${title}</h2>
            <p>
              <span>${slogun}</span>
              <span>${slogun}</span>
              <span>${slogun}</span>
            </p>
          </figcaption>
        </a>
      </figure>
    `)
  })//forEach

  var isStartMotion = true
  var rafId
  var scrollMotion = function () {
    if(!isStartMotion) return
    isStartMotion = false
    rafId = requestAnimationFrame(function(){
      //code start
      $('.works-content figure').each(function(){
        var t = $(this).offset().top
        var h = $(this).innerHeight()
        var meta = 0 + (scry - (t - winh*.5 + h*.5))*0.05
        if(meta > 11){meta = 11}
        if(meta < -11){meta = -11} 
        $(this).find('img').css({'transform':`scale(1.3) translateY(${meta}%)`})
      })//each  

      var scrRange = $(document).innerHeight() - winh
      var moveRange = winw - $('.bg-text').innerWidth()
      var x = (scry / scrRange) * moveRange
      $('.bg-text').css({'transform':`translateX(${x}px)`})
      //code end 
      isStartMotion = true
    })//requestAnimationFrame
  }//scrollMotion
  scrollMotion()
  $(window).scroll(function(){
    scrollMotion()
  }).resize(function(){
    scrollMotion()
  })//window event

  var cx = 0
  var tx = 0
  var cy = 0
  var ty = 0

  $(window).mousemove(function(e){
    tx = e.clientX - 40
    ty = e.clientY - 40 
  })

  setInterval(function(){
    cx += (tx - cx) * .1
    cy += (ty - cy) * .1
    $('.cursor').css({
      'left': cx,
      'top': cy,
    })
  },20)
  
  $('.works-content figure').mouseenter(function(){
    $('.cursor').css({'transform':'scale(1)'})
  }).mouseleave(function(){
    $('.cursor').css({'transform':'scale(0)'})
  })


})//ready