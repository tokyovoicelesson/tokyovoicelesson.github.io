document.addEventListener('DOMContentLoaded', function () {
  var side_footer = document.querySelector('footer');
  var year = new Date().getFullYear();
  side_footer.innerHTML = "";
  var main = document.querySelector('main');
  var mfc = "©"+year+" J-POP karaoke";
  var main_footer = "<div class='main_custom_footer'>" + mfc + "</div>";
  main.innerHTML += main_footer;
});
