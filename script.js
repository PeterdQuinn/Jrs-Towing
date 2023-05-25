$(document).ready(function() {
    $('.read-more').click(function(e) {
      e.preventDefault();
      $(this).toggleClass('collapsed');
      $(this).prev('.paragraph').toggleClass('collapsed');
    });
  });
  