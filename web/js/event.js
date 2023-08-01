$(function () {
  $(".gnb>ul>li").mouseenter(function () {
    $(this).children("ul").stop().slideDown(200);
  });

  $(".gnb>ul>li").mouseleave(function () {
    $(this).children("ul").stop().slideUp(200);
  });
}); //ready
