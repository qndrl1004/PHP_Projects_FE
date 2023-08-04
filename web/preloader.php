<script>
    $('body').css({'overflow':'hidden'})
    //body,window는 ready이벤트와 상관없다.
    $(window).load(function () {
       $('.preloader').fadeOut() 
       $('body').css({'overflow':'auto'})
    })
</script>
<div class="preloader">
    <div class="loader"></div>
        
</div>