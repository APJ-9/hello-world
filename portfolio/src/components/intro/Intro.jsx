import React ,{useEffect,useRef} from 'react'
import './Intro.css'
import { init } from 'ityped'

function Intro() {
    const textRef = useRef()
    useEffect(() => {
        // console.log(textRef)
        init(textRef.current,
             { showCursor: true, 
                backDelay:1500,
                backSpeed:60,
                strings: ['Photographer','Developer' ] })

      return () => {
        
      }
    }, [])
    
  return (
    <div className='intro' id='intro'>
        <div className="left">
            <div className="imgContainer">
                <img src="assets/man.png" alt="" />
            </div>
        </div>
        <div className="right">
            <div className="wrapper">
                <h2>Hi There, I'm</h2>
                <h1>Akhil P Jose</h1>
                <h3> Freelance <span ref={textRef}> </span></h3>
            </div>
            <a href="#portfolio">
                <img src="assets/down.png" alt="" />
            </a>
        </div>

    </div>
  )
}

export default Intro