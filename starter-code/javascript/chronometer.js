//Constructor
function Chronometer() {
    this.currentTime=0
    this.intervalId=0
    this.minutes=0
    this.seconds=0
}

Chronometer.prototype.startClick = function () {
    this.intervalId=setInterval(function(){
        this.currentTime++
        this.setTime()
    }.bind(this),100) //con bind(this) hacemos que la funciòn que esta adentro
};

Chronometer.prototype.setMinutes = function () {
  return this.minutes=Math.floor(this.currentTime/60)
};

Chronometer.prototype.setSeconds = function () {
  return this.seconds=this.currentTime % 60
};

Chronometer.prototype.twoDigitsNumber = function (val) {
  if (val<10){
    return '0'+val
  }
  else{
      return ''+val
  }
};

Chronometer.prototype.setTime = function () {
    this.seconds=this.twoDigitsNumber(this.setSeconds())
    this.minutes=this.twoDigitsNumber(this.setMinutes())
    console.log(this.minutes+":"+this.seconds)
};

Chronometer.prototype.setMilliseconds = function () {

};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId)
};

Chronometer.prototype.resetClick = function () {
    this.currentTime=0
};

Chronometer.prototype.splitClick = function () {

};
