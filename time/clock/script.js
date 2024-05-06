function updateTime() {


    //////// GET CURRENT DATE AND TIME ////////
    
    let today = new Date();
    console.log(today);
    
    
    //////// ACCESS SPECIFIC COMPONENTS ////////
    
    
    
    //// DATE ////
    
    // GET CURRENT MONTH
    let thisMonth = today.getMonth();
    console.log(thisMonth);
    
    
    
    // HOW DO WE SHOW THE NAME OF THE MONTH?
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    console.log(months[thisMonth]);
    
    
    // GET CURRENT DATE (DAY)
    let thisDate = today.getDate();
    console.log(thisDate);
    
    
    // GET CURRENT DAY OF WEEK
    let thisWeekday = today.getDay();
    console.log(thisWeekday);
    
    // HOW DO WE SHOW THE NAME OF THE DAY?
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    console.log(days[thisWeekday]);
    
    
    // GET CURRENT YEAR
    let thisYear = today.getFullYear();
    console.log(thisYear);
    
    
    // ADD TO INNER HTML
    let dateElem = document.getElementById("dateHere");
    
    dateElem.innerHTML = months[thisMonth] + " " + thisDate + ", " + thisYear;
    
    
    //// TIME ////
    
    // GET CURRENT HOUR
    let thisHour = today.getHours();
    console.log(thisHour);
    
    // GET CURRENT MINUTE
    let thisMinute = today.getMinutes();
    console.log(thisMinute);
    
    // GET CURRENT SECOND
    let thisSecond = today.getSeconds();
    console.log(thisSecond);
      
    // CONDITIONALS
    if(thisSecond < 10) {
      thisSecond = "0" + thisSecond;
    }
      
    if(thisMinute < 10) {
      thisMinute = "0" + thisMinute;
    }
      
    if(thisHour < 10) {
      thisHour = "0" + thisHour;
    }
      
    if(thisHour > 12) {
      thisHour = thisHour - 12;
    }
    

    
    // if(thisSecond % 10) {
    //   document.body.style.backgroundColor = "pink";
    // } else {
    //   document.body.style.backgroundColor = "green";
    // }
    
    
    // ADD TO INNER HTML
    let timeElem = document.getElementById("timeHere");
    timeElem.innerHTML = thisHour + ":" + thisMinute + ":" + thisSecond;
      
    }
    
    setInterval(updateTime, 1000);
    
    
    function changeShape() {
    
    let shapeElem = document.getElementById("myShape");
    
    shapeElem.style.width = Math.random() * 500 + "px";
    shapeElem.style.height = Math.random() * 500 + "px";
      
    }
    
    setInterval(changeShape, 1000);
    
    