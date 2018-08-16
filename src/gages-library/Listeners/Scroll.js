var ListenerClass = require('./ListenerClass');

class Scroll extends ListenerClass {
  load() {
    window.addEventListener(
      'scroll',
      function(e) {
        this.executeFuncs(window.scrollY);
      }.bind(this)
    );
  }
}

module.exports = Scroll;
