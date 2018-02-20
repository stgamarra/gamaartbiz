$( document ).ready(function() {
  var video = document.getElementById('video'); video.addEventListener('click',function(){ video.play(); },false);
   $('#nav-btn').on( "click", function() {
      $('#nav-icon').removeClass('fa-bars').fadeOut();
      $('#nav-icon').addClass('fa-times').fadeIn();
    });
});




