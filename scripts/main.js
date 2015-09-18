// Mobile detection
var isMobile = {
  Android: function() { return navigator.userAgent.match(/Android/i); },
  BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); },
  iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
  Opera: function() { return navigator.userAgent.match(/Opera Mini/i); },
  Windows: function() { return navigator.userAgent.match(/IEMobile/i); },
  any: function() {
    return ( isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows() );
  }
};

// Tooltips
if (isMobile.any()) {
  $('[data-toggle="tooltip"]').tooltip();
}

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
});

// Cover parallax
if (isMobile.any()) {
  $('#cover').attr('data-image-src', "images/phone-cover.png");
  $('#cover').parallax({imageSrc: 'images/phone-cover.png'});
} else {
  $('#cover').parallax({imageSrc: 'images/cover.png'});
};

// Portfolio effects
$('.front > .project-info').on({
  'tap': toggleProjectInfo,
  'mouseenter': showProjectInfo,
  'mouseleave': hideProjectInfo
});

// $('.project-container').on('click', projectLink);

function toggleProjectInfo() {
  if (isMobile.any()) {
    if ($(this).hasClass('active-project')) {
      $(this).animate({opacity: '0', backgroundColor: 'rgba(0, 0, 0, 0)'}).removeClass('active-project');
    } else {
      $(this).animate({opacity: '1', backgroundColor: 'rgba(84, 110, 122, 0.85)'}).addClass('active-project');
    }
  }
}

// separated from toggle in order to check screen width each time, rather than on init
function showProjectInfo() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    $(this).animate({opacity: '1', backgroundColor: 'rgba(84, 110, 122, 0.85)'});
  }
}

function hideProjectInfo() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    $(this).animate({opacity: '0', backgroundColor: 'rgba(0, 0, 0, 0)'});
  }
}

// -webkit-transform sometimes makes the link on the back unreliable; continue testing
// function projectLink() {
//   if (window.matchMedia('(min-width: 768px)').matches) {
//     window.open($(this).attr('href'), '_blank');
//   }
// }
