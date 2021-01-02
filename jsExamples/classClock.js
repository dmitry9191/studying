class Clock {

    constructor({template}) { // создается функция с именем Clock, constructor определяет код этой функции  
        this.template = template; 
    }
    render() {  // constructor(), render(), start() и stop() являются методами класса, которые сохраняются в Clock.prototype
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000); // стрелочная функция позволяет брать контекст из Clock
    }
  
  }

class ExtendedClock extends Clock {
    constructor(options) {
      super(options);
      this.precision = options.precision || 1000;
    }
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), this.precision);
    }
  }
  
  let newClock = new ExtendedClock({template: 'h:m:s', precision: 5000});
  newClock.start();
