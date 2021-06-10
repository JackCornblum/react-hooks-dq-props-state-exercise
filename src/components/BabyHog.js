import React from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";
import {useState} from "react"

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog({name, hobby, eyecolor}) {
  const [weight, setWeight] = useState(20)

  function handleChangeWeight(e) {
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
  let newWeight = weight

    console.log(e)
    if (e.target.name === "+") {
      newWeight += 10
      
    } else {
      if(newWeight > 0){

        newWeight -= 10
      }
    }
    
    setWeight(newWeight)

  }

  let pigPic;

  if (eyecolor === "blue") {
    pigPic = BlueBaby
  } else if (eyecolor === "glowing") {
    pigPic = GlowingBaby
  } else if (eyecolor === "sun"){
    pigPic = SunBaby
  } else {
    pigPic = normalBaby
  }

  return (
    <li className="hogbabies">
      <h1>{name}</h1>
      <h3>Weight: {weight}</h3>
      <h3>Hobby: {hobby}</h3>
      <h4>Eye Color: {eyecolor}</h4>

      <button onClick={handleChangeWeight} name="+">Increase Weight</button>
      <button onClick={handleChangeWeight} name="-">Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={pigPic}
          style={{ height: "200px" }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
