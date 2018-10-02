$('#arrow-up').on('click', function() {
  const top = $('#header').position().top;

  $('html, body').animate(
    {
      scrollTop: top
    },
    900
  );
});

$('#to-services').on('click', function() {
  const services = $('#usluge').position().top;

  $('html, body').animate(
    {
      scrollTop: services
    },
    900
  );
});