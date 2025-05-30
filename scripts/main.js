const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");
const myImageHeading = document.querySelector("h3");
myButton.addEventListener("click",()=>{
  setUserName();
});

function setUserName(){
  const userName = prompt("Enter your Name:");
  if(!userName){
    setUserName();
  }
  else{
    localStorage.setItem("name",userName);
    myHeading.textContent = `Welcome, ${userName}`;
  }
}

if(!localStorage.getItem("name")){
  setUserName();
}
else{
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome, ${storedName}`;
}

const myImg = document.querySelector("img");

myImg.addEventListener("click",() => {
  const mySrc = myImg.getAttribute("src");
  if(mySrc === "Images/luffy.jpeg"){
    myImageHeading.textContent = `When became as an emperor`;
    myImg.setAttribute("src","Images/luffy1.jpg");
  }
  else{
    myImageHeading.textContent = "When luffy as a Pirate!";
    myImg.setAttribute("src","Images/luffy.jpeg");
  }
});
