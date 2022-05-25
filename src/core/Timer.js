export default class Timer {
  startTime = null;

  static start() {
    this.startTime = performance.now();
  }

  static time() {
    return parseFloat(((performance.now() - this.startTime) / 1000).toFixed(2));
  }
}
