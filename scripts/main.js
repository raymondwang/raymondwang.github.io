// Tooltips
$('[data-toggle="tooltip"]').tooltip();

// Navbar
$(".nav li a[href^='#']").on('click', function(e) {
  e.preventDefault();
  var hash = this.hash;
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 400, function() {
    window.location.hash = hash;
  });
});

$('.fa-chevron-down').on('click', function() {
  var hash = '#profile';
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 400, function() {
    window.location.hash = hash;
  });
});

$('.fa-chevron-up').on('click', function() {
  $('html, body').animate({
    scrollTop: 0
  }, 400, function() {
    window.location.hash = '';
    // history.pushState("", document.title, window.location.pathname);
  });
});

// Cover parallax
if (window.matchMedia('(max-width: 600px)').matches) {
  $('#cover').attr('data-image-src', "images/phone-cover.png");
  $('#cover').parallax({imageSrc: 'images/phone-cover.png'});
} else {
  $('#cover').parallax({imageSrc: 'images/cover.png'});
};

// Project links: WIP
$('.project').on('click', function() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    window.open($(this).attr('href'), '_blank');
  }
});

$('.project-title').on('click', function() {
  window.open($(this).attr('href'), '_blank');
});

// $('.project-title').mouseenter(function() {
//   $(this).addClass('project-title-active');
// });
//
// $('.project-title').mouseleave(function() {
//   $(this).removeClass('project-title-active');
// });
