let timer = ()=>{
  console.log("Timer")
 let timer2 = "1:00";
 let interval = setInterval(() =>{

 let timer = timer2.split(':');
 //by parsing integer,we avoid all extra string processing
 let minutes = parseInt(timer[0], 10);
 let seconds = parseInt(timer[1], 10);
 --seconds;
 minutes = (seconds < 0) ? --minutes : minutes;
 if (minutes < 0) clearInterval(interval);
 seconds = (seconds < 0) ? 59 : seconds;
 seconds = (seconds < 10) ? '0' + seconds : seconds;
 $('.timer').html(minutes + ':' + seconds);
 timer2 = minutes + ':' + seconds;
}, 1000);
}
   
   