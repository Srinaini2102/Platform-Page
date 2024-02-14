import React from 'react'
import Typewriter from "typewriter-effect";
export default function ConsoleComponent() {
  return (
    <>
    <div className="App">
            <div className='tw1'><Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Have you ever faced a rural challenge so profound that its solution could revolutionize lives?")
                        
                        
                        .start();
                } }
            /></div>
            <div className='tw2'><Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(15000)
                        .typeString("Share the Challenge and await innovative solutions.")
                        
                        .start();
                }}
            /></div>
            <div className='tw3'><Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(25000)
                        
                        .typeString(" Be a ChangeMaker !!")
                        .start();
                }}
            /></div>
        </div>
        
    </>
  )
}
