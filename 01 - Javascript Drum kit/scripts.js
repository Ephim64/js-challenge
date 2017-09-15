(function () {
  'use strict';
  var playingClassName = 'playing';
  var keysContainer = document.querySelector('div.keys');
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('keyup', handleKeyUp)

  function handleKeyDown(e) {
    var keyCode = e.keyCode;
    var drum = keysContainer.querySelector('[data-key="' + keyCode + '"]');
    if (drum) {
      drum.classList.toggle(playingClassName);
    }
  }

  function handleKeyUp(e) {
    var keyCode = e.keyCode;
    var drum = keysContainer.querySelector('[data-key="' + keyCode + '"]');
    if (drum) {
      drum.classList.toggle(playingClassName);
    }
  }

})()