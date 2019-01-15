var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var interval

function printTime() {
printMinutes()
printSeconds()
}

function printMinutes() {
    minDec.innerText = chronometer.minutes[0]
    minUni.innerText = chronometer.minutes[1]
}

function printSeconds() {
    secDec.innerText = chronometer.seconds[0]
    secUni.innerText = chronometer.seconds[1]
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
    chronometer.stopClick()
    clearInterval(interval)
}

function setSplitBtn() {

}

function setStartBtn() {
    chronometer.startClick()
    interval=setInterval(function(){
        printTime()
    },100)
   
}

function setResetBtn() {
    chronometer.resetClick()
    minDec.innerText='0'
    minUni.innerText='0'
    secDec.innerText='0'
    secUni.innerText='0'
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.className == 'btn start'){
        btnLeft.className = 'btn stop' //le estamos cambiando la clase a este boton
        btnLeft.innerText = 'STOP'
        btnRight.className = 'btn split'
        btnRight.innerText = 'SPLIT'
        setStartBtn()
    }
    else{
        btnLeft.className = 'btn start'
        btnLeft.innerText = 'START'
        btnRight.className = 'btn reset'
        btnRight.innerText = 'RESET'
       setStopBtn()
       }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnLeft.className == 'btn start'){
        setResetBtn()
    }
    else{
        //split
       }
});
