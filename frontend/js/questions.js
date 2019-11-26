let timer = ()=>{
  console.log("here")
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
   
   let data;
    function displayquestions(data){
     return data=JSON.parse(localStorage.getItem("questionsArray"));
      }

      let d=displayquestions(data);

  $(document).ready(()=>{
       $('#nxticon').click();
       timer()
      });
  let i=0;
  let j=0;
  $("#nxticon").click( ()=>{
        console.log("forward"+i);
        console.log(d[0]["General science"]) 
        if(i<10) {
        document.getElementById("question").innerHTML=d[0]["General science"][i]["question"];
        document.getElementById("option1").innerHTML=d[0]["General science"][i]["1"];
        document.getElementById("option2").innerHTML=d[0]["General science"][i]["2"];
        document.getElementById("option3").innerHTML=d[0]["General science"][i]["3"];
        document.getElementById("option4").innerHTML=d[0]["General science"][i]["4"];
        i++;
        j=i-1;
        }
        } );

  $("#backicon").click( ()=>{
    console.log("backward"+j);
        if(j>0) { 
          j-- 
          i--
        document.getElementById("question").innerHTML=d[0]["General science"][j]["question"];
        document.getElementById("option1").innerHTML=d[0]["General science"][j]["1"];
        document.getElementById("option2").innerHTML=d[0]["General science"][j]["2"];
        document.getElementById("option3").innerHTML=d[0]["General science"][j]["3"];
        document.getElementById("option4").innerHTML=d[0]["General science"][j]["4"];
        }
        } );
        let selectedOptionArray=[];
        console.log(selectedOptionArray);
        let originalAnswerArray=[];
        console.log(originalAnswerArray);
        // let result=0;
        function compareValue(idx) {
              let answer = d[0]["General science"][i-1]["ans"];
              originalAnswerArray[i-1]=answer;
              let  selectedOption1= $("#option"+idx).text();
              console.log(selectedOption1);
              selectedOptionArray[i-1]=selectedOption1;
              resultValue()
              console.log(result.reduce(add));
        }
 let result=[];
    