var milliseconds=0,seconds=0,minutes=0;
var timer;
var stopwatch=document.querySelector('.stopwatch');
var lapscontainer=document.querySelector('.laps');

function start(){
    if(!timer){
    timer=setInterval(run,10);
    }
}

function run(){
    stopwatch.textContent=gettimer();
    milliseconds++;
    if(milliseconds==100){
        milliseconds=0
        seconds++;
    }if(seconds==60){
        seconds=0
        minutes++;
    }
};
function pause(){
    stoptimer();
}
function reset(){
    stoptimer();
    minutes=0;
    milliseconds=0;
    seconds=0;
    stopwatch.textContent=gettimer();
    
 }
 function stoptimer(){
    clearInterval(timer);
    timer=false;
 }
 function gettimer(){
     return (minutes<10 ? "0" + minutes : minutes)
     +":"+(seconds<10 ? "0" + seconds : seconds)
     +":"+(milliseconds<10 ? "0"+milliseconds : milliseconds);
 }

 function restart(){
     reset();
     start();
 }

function laps(){
    if (timer){
        var li=document.createElement('li');
        li.innerText=gettimer();
        lapscontainer.appendChild(li);

    }
}

function resetlaps(){
    lapscontainer.innerHTML="";
    
}
  