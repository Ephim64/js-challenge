(function () {
  'use strict';
  document.querySelectorAll('.control input').forEach(c => c.addEventListener('input', handleChange));

  function handleChange(e) {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${e.target.name}`, this.value + suffix);
  }

})();