var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var flag = false; // its act like a guard to check timer is on or off


function start() {
    flag = true;
    stopwatch();


}

function stop() {
    flag = false;


}

function reset() {
    flag = false;

    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";

}

function stopwatch() {
    if (flag == true) {
        count = count + 1;
        setTimeout('stopwatch()', 10);


        if (count == 60) {
            count = 0;
            sec = sec + 1;

        }
    }

    if (sec == 60) {
        min = min + 1;
        sec = 0;

    }
    if (min == 60) {
        hr = hr + 1;
        min = 0;
        sec = 0;

    }
    var hrs = hr;
    var mins = min;
    var secs = sec;
    if (hr < 10) {
        hrs = "0" + hr;

    }
    if (min < 10) {
        mins = "0" + min;

    }
    if (sec < 10) {
        secs = "0" + sec;

    }
    document.getElementById("hr").innerHTML = hrs;
    document.getElementById("min").innerHTML = mins;
    document.getElementById("sec").innerHTML = secs;
    document.getElementById("count").innerHTML = count;

}