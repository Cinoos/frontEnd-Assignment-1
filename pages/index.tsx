import React, { useState } from "react";
import Navbar from "./navbar";
import Question from "./question"


const QUESTIONS = 
[
    {
        question: "The leaves of trees change color due to the loss of what pigment",
        option: ["Water","Chlorophyll","Chromatin","Photosythnesis"],
        answer: 1
    },

    {
        question: "Spikes on a cactus serve what purpose?",
        option: ["To let oxygen in","To let oxygen out","To suck in water","Defense"],
        answer: 3
    },

    {
        question: "A fern's fronds are ",
        option: ["Roots","Dead leaves","Leaves","Used for decoration"],
        answer: 2
    },

    {
        question: "What supports the weight of kelp?",
        option: ["The air","The ocean","The wind","The animals"],
        answer: 1
    },

    {
        question: "What is the benefit of hydroponics?",
        option: ["Doubles the crop yield","Makes the plants greener","Reduces the use of fertilizer","Enables crops to grow in areas with poor soil."],
        answer: 3
    },

    {
        question: "All plants are ?",
        option: ["Autotrophs","Heterotrophs","Unicellular","Nonliving"],
        answer: 0
    },
]

export default function Home() {
  const [button,setButton] = useState()

  return (
    <div>
      <Navbar/>
      <h1 style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', textAlign:"center",fontSize: '4rem', fontWeight: 'bold',color:"#DBEDF3"}}> Nico's Quizeria</h1>
      <Question questionsList={QUESTIONS}/>
    </div>
  );
}
