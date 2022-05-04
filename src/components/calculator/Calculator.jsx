import { React } from "react";
import { useState, useEffect } from "react";



function Calculator() {

    const [count, setCount] = useState(0);
    const conditions = [
        {
            perfectWindDirectionSurf : "W",
            facingDirection : "E",
            windDirection : "W",
            swellPeriod : 5,
            windSpeed : 2,
            swellHeight : 2
        }
    ]


  function incrementCount() {
    let counter = 0
    
    if (conditions[0].windDirection === conditions[0].perfectWindDirectionSurf) {
        counter +=2;
    }  
    if (conditions[0].swellPeriod > 8) {
        counter +=1;
       
    }  
    if (conditions[0].windSpeed < 5) {
        counter +=1;

    }  
    if (conditions[0].swellHeight > 1 && conditions[0].swellHeight< 3) {
        counter +=1;

    } else {
        console.log(conditions)
    }
    setCount(counter)
    
  }
  console.log(count)
  useEffect(() => {incrementCount()
},[])}



 /* function decrementCount() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount(0); */
  
export default Calculator;
