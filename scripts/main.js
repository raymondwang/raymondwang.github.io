// Tooltips
$('[data-toggle="tooltip"]').tooltip();

// Navigation
function relocate(e, nav, speed) {
  e.preventDefault();
  var hash = nav || null, distance = 0, offset = 80, scrollSpeed = speed || 400;

  if (hash) {
    distance = $(hash).offset().top - offset;
  }

  $('html, body').animate({
    scrollTop: distance
  }, scrollSpeed, 'linear', function() {
    window.location.hash = hash || '';
  });
};

$(".nav li a[href^='#']").on('click tap', function(e) {
  relocate(e, this.hash);
});

$('.fa-chevron-down').on('click tap', function(e) {
  relocate(e, '#profile', 600);
});

$('.fa-chevron-up').on('click tap', function(e) {
  relocate(e);
  // history.pushState("", document.title, window.location.pathname);
});

// Cover parallax
if (window.matchMedia('(max-width: 600px)').matches) {
  $('#cover').attr('data-image-src', "images/phone-cover.png");
  $('#cover').parallax({imageSrc: 'images/phone-cover.png'});
} else {
  $('#cover').parallax({imageSrc: 'images/cover.png'});
};

// Project links: WIP
$('.project-container').on('click tap', function() {
  // if (window.matchMedia('(max-width: 767px)').matches) {
    window.open($(this).attr('href'), '_blank');
  // }
});

// $('.project-title').on('click', function() {
//   window.open($(this).attr('href'), '_blank');
// });

// $('.project-title').mouseenter(function() {
//   $(this).addClass('project-title-active');
// });
//
// $('.project-title').mouseleave(function() {
//   $(this).removeClass('project-title-active');
// });
