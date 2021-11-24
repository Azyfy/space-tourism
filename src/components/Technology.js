import "./Technology.scss"
import { useState } from "react"

function Technology({ technology }) {

    const [ tech, setTech] = useState(technology[0])

    function pickTech(techno) {
        setTech(technology.find( t => t.name === techno ) )
    }

    return (
      <div className="Technology">
        <h1> <span> 03 </span> SPACE LAUNCH 101 </h1>

        <div>
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
                    <p> { tech.name } </p>
                    <p> { tech.description } </p>
                </div>

            </div>
        </div>

      </div>
    );
  }
  
  export default Technology;