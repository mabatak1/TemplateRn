export default class Timer {
  timer: any;
  constructor() {}

  debounce(func: () => void, timeOut: number) {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(func, timeOut);
  }
}
