export default class Timer {
  startTime = null;

  static start() {
    this.startTime = performance.now();
    
    // TODO improve at some time :)
    if(!document.getElementById('game-timer')) {
      const el = document.createElement('div')
      el.id = 'game-timer'
      el.style.fontWeight = 'bold'
      document.body.appendChild(el)
      setInterval(() => {
        el.innerHTML = parseFloat(((performance.now() - this.startTime) / 1000).toFixed(2)) + 's';
      }, 100)
    }
    
  }

  static time() {
    return parseFloat(((performance.now() - this.startTime) / 1000).toFixed(2));
  }
}
