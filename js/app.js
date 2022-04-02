
function changeBackground() {
  console.log("late");
  document.getElementById("hoverPara").style.backgroundColor = "red";
}


const y = document.getElementById("hoverPara");
  y.addEventListener("mouseover", changeBackground);



  function changeBackground() {
  console.log("welcome");
  document.getElementById("plex").style.backgroundColor = "green";
}

const x = document.getElementById("green");
  y.addEventListener("mouseover", changeBackground);

function handleClick(element){
  element.innerHTML = "clicked"
}

//add eventListener  mouseover  target,addEventListener("eventname", "function", true/false)//

const keyboard = document.querySelector('.keyboard');

keyboard.addEventListener('keydown', e =>{
  console.log(e)
  if (e.keyCode === 32){
    alert ('i figured it out' + e.key ), e.preventDefault()
  }
})
  