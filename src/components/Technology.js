import "./Technology.scss"
import { useState } from "react"

function Technology({ technology }) {

    const [ tech, setTech] = useState(technology[0])

    function pickTech(techno) {
        setTech(technology.find( t => t.name === techno ) )
    }

    return (
      <div className="Technology" style={{ backgroundImage: "url(./assets/technology/background-technology-mobile.jpg)" }} >

        <h5> <span className="nm-s" > 03 </span> SPACE LAUNCH 101 </h5>

        <div className="tech-cont" >
            <div>
                <img src={ tech.images.landscape } alt={tech.name} />
            </div>

            <div> 
                <div className="tech-nav" >
                    {
                        technology.map( (t, index) => {
                            return (
                                <div key={t.name} className="nav" onClick={ () => { pickTech(t.name) } } >
                                    { index + 1 }
                                </div>
                            )
                        })
                    }
                </div>

                <div>
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