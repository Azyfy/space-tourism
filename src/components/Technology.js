import "./Technology.scss"
import { useState } from "react"

function Technology({ technology }) {

    const [ tech, setTech] = useState(technology[0])

    function pickTech(techno) {
        setTech(technology.find( t => t.name === techno ) )
    }

    function styleTechnologyNav(e) {

        document.querySelectorAll(".nav").forEach(e => {
            e.style.backgroundColor = "transparent"
            e.style.color = "white"
          })
          e.target.style.backgroundColor = "white"
          e.target.style.color = "black"

    }

    return (
      <div className="Technology" style={{ backgroundImage: "url(./assets/technology/background-technology-mobile.jpg)" }} >

        <h5> <span className="nm-s" > 03 </span> SPACE LAUNCH 101 </h5>

        <div className="tech-cont" >
            <div>
                <img className="img-landscape" src={ tech.images.landscape } alt={tech.name} />
                <img className="img-portrait" src={ tech.images.portrait } alt={tech.name} />
            </div>

            <div className="tech-inner-cont" > 
                <div className="tech-nav" >
                    {
                        technology.map( (t, index) => {
                            return (
                                <div key={t.name} className="nav" onClick={ (e) => { pickTech(t.name); styleTechnologyNav(e) } } >
                                    { index + 1 }
                                </div>
                            )
                        })
                    }
                </div>

                <div className="tech-descr" >
                    <p> THE TERMINOLOGY... </p>
                    <h3> { tech.name.toUpperCase() } </h3>
                    <p className="text" > { tech.description } </p>
                </div>

            </div>
        </div>

      </div>
    );
  }
  
  export default Technology;