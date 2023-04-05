const start = document.getElementById('start');
const end = document.getElementById('end');
const reset = document.getElementById('reset');

var hour = 0, minute = 0, second = 0, count = 0;

start.addEventListener('click',function(){
    time = true;
    stopWatch();
});

end.addEventListener('click',function(){
    time = false;
});

reset.addEventListener('click',function(){
    time = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00h";
    document.getElementById('min').innerHTML = "00p";
    document.getElementById('sec').innerHTML = "00s";
    document.getElementById('count').innerHTML = "00";
});

function stopWatch(){
    if(time){
        count++;
        if(count == 99){
            second++;
            count = 0;
        }
        if(second == 60){
            minute++;
            second = 0;
        }
        if(minute == 60){
            hour++;
            minute == 0;
            second == 0;
            count == 0;
        }

        let hrString = hour;
        let minuteString = minute;
        let secString = second;
        let countString = count;

        if(hour < 10)
            hrString = "0" + hrString + "h";
        if(minute < 10)
            minuteString = "0" + minuteString + "p";
        if(second < 10)
            secString = "0" + secString + "s";
        if(count < 10)
            countString = "0" + countString;

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minuteString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;
        setTimeout(stopWatch,10);
    }
}