(function () {
  'use strict';
  var playingClassName = 'playing';
  var keysContainer = document.querySelector('div.keys');
  window.addEventListener('keydown', handleKeyDown);
  const keys = keysContainer.querySelectorAll('.key')
  keys.forEach(k => k.addEventListener('transitionend', handleTransitionend));

  function handleKeyDown(e) {
    const drum = keysContainer.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (drum && audio) {
      drum.classList.add(playingClassName);
      audio.currentTime = 0;
      audio.play();
    }
  }

  function handleTransitionend(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove(playingClassName);
  }

})()