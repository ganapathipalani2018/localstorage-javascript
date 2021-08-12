// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Local Storage</h1>`;

var inputKey = document.getElementById("inputKey");
var inputVal = document.getElementById("inputVal");
var enterBtn = document.getElementById("enterBtn");
var isOutput = document.getElementById("isOutput");

enterBtn.onclick = function(){
  const key = inputKey.value;
  const value = inputVal.value;
  

  if(key && value){
    localStorage.setItem(key, value);
    location.reload();
  }
};
  
for(let i = 1; i<localStorage.length; i++){
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);

  isOutput.innerHTML += `${i}. ${key}: ${value}<br/>`;
  
}
 