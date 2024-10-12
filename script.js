var glide = new Glide('#slides', {
  type: 'carousel',
  perView: 1,
  focusAt: 'center',
});

glide.on('run.before', function(event) {
  // Pause all videos before the slide transition starts
  var videos = document.querySelectorAll('.glide__slide video');
  videos.forEach((video) => {
    video.pause();
  });
});

glide.on('run.after', function() {
  // Get the active slide after the transition
  var activeSlide = document.querySelector('.glide__slide--active');
  var video = activeSlide.querySelector('video');

  // If there's a video in the active slide, attempt to play it
  if (video) {
    video.play().catch(error => {
      console.error('Error trying to play the video: ', error);
    });
  }
});

// Mount the carousel
glide.mount();
