let data;
$(document).ready(function(){
   
    $.ajax({
        type: 'GET',
        url:'http://localhost:8000/questions',
     success:(data)=>{
          localStorage.setItem("questionsArray",JSON.stringify(data))
          console.log("ajax call")
        },
        
        })
    });
  
 
  