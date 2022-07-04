document.addEventListener('DOMContentLoaded', function () {
  var side_footer = document.querySelector('footer');
  var year = new Date().getFullYear();
  side_footer.innerHTML = "TEMPLATE "+year;
  var main = document.querySelector('main');
  var main_footer = "<div class='main_custom_footer'>MY MAIN FOOTER DIV CONTENT</div>";
  main.innerHTML += main_footer;
});
