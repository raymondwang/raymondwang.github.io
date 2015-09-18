// Tooltips
if (window.matchMedia('(min-width: 768px)').matches) {
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
if (window.matchMedia('(max-width: 600px)').matches) {
  $('#cover').attr('data-image-src', "images/phone-cover.png");
  $('#cover').parallax({imageSrc: 'images/phone-cover.png'});
} else {
  $('#cover').parallax({imageSrc: 'images/cover.png'});
};

// Portfolio effects
$('.project-container').on({
  'mouseenter mouseleave tap': toggleProjectInfo,
  'click': projectLink,
});

function toggleProjectInfo() {
  if (window.matchMedia('(max-width: 767px)').matches) {
    $info = $(this).find('.front > .project-info');
    if ($info.hasClass('active-project')) {
      $info.animate({opacity: '0', backgroundColor: 'rgba(0, 0, 0, 0)'}, 600).removeClass('active-project');
    } else {
      $info.animate({opacity: '1', backgroundColor: 'rgba(84, 110, 122, 0.9)'}, 600).addClass('active-project');
    }
  }
}

// events on back currently unreliable
function projectLink() {
  if (window.matchMedia('(min-width: 768px)').matches) {
    window.open($(this).attr('href'), '_blank');
  }
}
