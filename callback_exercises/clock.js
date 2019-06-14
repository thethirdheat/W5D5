class Clock {
  constructor() {
    this.date = new Date();
    this.hour = this.date.getHours();
    this.minute = this.date.getMinutes();
    this.second = this.date.getSeconds();
  }
  
  /*
  // just for .bind();
  printTime() {
    this.second += 1;

    if(this.second===60){
      this.minute+=1;
      this.second=0;
    }
    if (this.minute === 60) {
      this.hour += 1;
      this.minute = 0;
    }
    if (this.hour === 24) {
      this.hour =0;
      this.minute=0;
      this.second =0;
    }

    let currentTime= `${this.hour}:${this.minute}:${this.second}`;

    console.log(currentTime);
  }
  */
  
  _tick() {
    console.log('we are in tick');
    
    const time = ()=>{
      this.second += 1;
      
      if (this.second === 60) {
        this.minute += 1;
        this.second = 0;
      }
      if (this.minute === 60) {
        this.hour += 1;
        this.minute = 0;
      } if (this.hour === 24) {
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
      }
      
      let currentTime = `${this.hour}:${this.minute}:${this.second}`;
      
      console.log(currentTime);
    };
    // use below with printTime() function
    // const time = this.printTime.bind(this);
    
    setInterval(time, 1000);
  }
}

const clock = new Clock();
clock._tick();

