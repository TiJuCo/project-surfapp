import React, { useContext } from "react";
import { useState, useEffect } from "react";
import ApiContext from "../../contexts/ApiContext";



function Calculator() {

    const {seaInfo, beachesInfo} = useContext(ApiContext);
    const [count, setCount] = useState(0);

    

    console.log(seaInfo)
  /*  const conditions = [
        {
            perfectWindDirectionSurf : "W",
            facingDirection : "E",
            windDirection : "W",
            swellPeriod : 5,
            windSpeed : 2,
            swellHeight : 2
        }
    ] */

    

  const incrementCount = () => {
      

console.log(count)
useEffect(() => {incrementCount()},[])

}


 /* function decrementCount() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount(0); */
  
export default Calculator;


 /*(state) => {
    state = [...state, counter];
    return state;

}*/