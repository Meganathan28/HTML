const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");

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