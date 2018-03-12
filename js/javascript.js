$( document ).ready(function() {
  $(function () {
    $(document).scroll(function () {
      var $nav = $("#navbar");
	  $nav.toggleClass('scroll', $(this).scrollTop() > $nav.height());
	});
});
});




