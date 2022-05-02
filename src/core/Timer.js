export default class Timer {
    startTime = null

    start() {
        this.startTime = performance.now()
    }

    time() {
        return parseFloat(((performance.now() - this.startTime) / 1000).toFixed(2))
    }
}