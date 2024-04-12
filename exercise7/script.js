let myButton= document.getElementById("my-button");
let myText= document.getElementById("my-text");

function generateAnimals(){
  console.log("hello");
  console.log(myText.value);
  
  if (myText.value == "happy"){
    document.body.style.backgroundImage= "url('https://media1.tenor.com/m/ktVXMCXL2LAAAAAd/cat-hug.gif')"
  } else if (myText.value == "sad"){
    document.body.style.backgroundImage= "url('https://media1.tenor.com/m/sWZtJv_6lOYAAAAC/hug-warm-hug.gif')"
  } else{
    document.body.style.backgroundImage= "url('https://media1.tenor.com/m/5i3L0LsTDrYAAAAd/angry-angry-cat.gif')"
  }
  
}