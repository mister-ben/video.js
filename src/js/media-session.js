import window from 'global/window';

const ms = window.navigator.mediaSession;

const mediaSession = function() {
  ms.setActionHandler('play', this.play);
  ms.setActionHandler('pause', this.pause);
  ms.setActionHandler('stop', () => {
    this.pause();
    this.ended(true);
  });
  ms.setActionHandler('seekbackward', () => {
    this.currentTime(this.currentTime() - 10);
  });
  ms.setActionHandler('seekforward', () => {
    this.currentTime(this.currentTime() + 10);
  });
  ms.setActionHandler('seekto', s => {
    this.currentTime(s);
  });

  this.on('playing', () => {
    ms.metadata = new window.MediaMetadata(this.getMedia());
  });
};

export default mediaSession;
