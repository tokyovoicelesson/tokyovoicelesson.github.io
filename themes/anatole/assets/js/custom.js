document.addEventListener('DOMContentLoaded', function () {
  var side_footer = document.querySelector('footer');
  var year = new Date().getFullYear();
  side_footer.innerHTML = "";
  var main = document.querySelector('main');
  var mfc = "©"+year+" J-POP karaoke";
  var main_footer = "<div class='main_custom_footer'>" + mfc + "</div>";
  main.innerHTML += main_footer;


  var mail_addr = 'contact@tokyovoicelessons.com'
  var subject = 'Schedule A Lesson'

  const date = new Date();
  date.setDate(date.getDate() + 7);

  let month = (1 + date.getMonth()).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");
  var day_str = month + "/" + day + "/" + year;

  var body = 'Dear Reina-sensei:\n\n I would like to schedule a lesson for '+ day_str + ' . '

  var mailhref = `mailto:${mail_addr}?subject=${subject}&body=${body}`

  var private = document.querySelector('#pemail');
  var g2 = document.querySelector('#g2email');
  var g3 = document.querySelector('#g3email');
  
  private.href = mailhref + 'I want a private lesson.'
  g2.href = mailhref + 'I want a group lesson for 2.'
  g3.href = mailhref + 'I want a group lesson for 3 or more.'


});
