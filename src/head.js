import React from "react";

function Head(){
    let currentDate=new Date();
let currentHours=currentDate.getHours();
let greeting;
let Cstyle={
  color:""
}
    
if(currentHours<12){
  greeting="Good Morning"
  Cstyle.color="red"
}
else if(currentHours<20){
  greeting="Good Afternoon"
  Cstyle.color="yellow"
}
else{
  greeting="good night"
}
     
  return  (<div><h1>Head</h1>
    
<h1 style={Cstyle}>{greeting}</h1></div>)
}
export default Head;