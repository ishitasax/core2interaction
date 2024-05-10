function updateTime(){

  let today = new Date();
  let currentMonth = today.getMonth();
  console.log(currentMonth);
  let months= ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
  console.log(months[currentMonth]);
  
  let currentDate= today.getDate();
  console.log(currentDate);
  
  let currentYear= today.getFullYear();
  console.log(currentYear); 
  
  let date = document.getElementById("date");
  date.innerHTML= months[currentMonth] + " " + currentDate + ", " + currentYear;
  
  //-------------------
  let currentHour= today.getHours();
  console.log(currentHour); 
  
  let currentMinute= today.getMinutes();
  console.log(currentMinute);
  
  let currentSecond= today.getSeconds();
  console.log(currentSecond);
  
  //adding a 0 before for seconds
  if(currentSecond < 10) {
      currentSecond = "0" + currentSecond;
    }
  
  //adding a 0 before for min
  if(currentMinute < 10) {
    currentMinute = "0" + currentMinute;
  }
  
  //adding a 0 before for hour
  if(currentHour < 10) {
    currentHour = "0" + currentHour;
  }
  
  //making it not military time, subtracting hour by 12
  if(currentHour > 12) {
    currentHour = currentHour - 12;
  }
  
  let clock = document.getElementById("clock");
  clock.innerHTML= currentHour + ":" + currentMinute + ":" + currentSecond;
    
    var dateObject = new Date();
  var hours = dateObject.getHours();
  var minutes = dateObject.getMinutes();
  var seconds = dateObject.getSeconds();
  console.log(hours,minutes,seconds);
  
  let finalResult = dateObject.getMinutes() + "%";
  document.querySelectorAll('#data').forEach((element) => {
  element.setAttribute('offset', finalResult);
  });
}