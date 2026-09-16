'use strict';
// Keep a single demo playing while readers compare experiments.
document.querySelectorAll('video').forEach(video => {
  video.addEventListener('play', () => {
    document.querySelectorAll('video').forEach(other => {
      if (other !== video) other.pause();
    });
  });
});
