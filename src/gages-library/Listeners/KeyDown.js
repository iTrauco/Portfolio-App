var ListenerClass = require('./ListenerClass');

class KeyDown extends ListenerClass {
  load() {
    window.addEventListener(
      'keydown',
      function(e) {
        this.executeFuncs(e.keyCode);
      }.bind(this)
    );
  }
}

module.exports = KeyDown;
