import "./Destination.scss"
import { useState } from "react"

function Destination({ destinations }) {
  
    const [ destination, setDestination] = useState(destinations[0])

    function pickDestination (dest) {
      setDestination(destinations.find( d => d.name === dest ) )
    }

    return (
      <div className="Destination">
        
        <h1> <span> 01 </span> PICK YOUR DESTINATION </h1>

        <div>
          <img src={`${ destination.images.png }`} alt={ destination.name } />

          <div>
            <nav className="dest-nav" >
              {destinations.map( dest => {
                return(
                  <div key={ dest.name } onClick={ () => {pickDestination(dest.name)} } >
                    { dest.name }
                  </div>
                )
              } )}
            </nav>
              
              <div class="dest-descr" >
                <h2> { destination.name } </h2>

                <p> { destination.description } </p>
              </div>

              <div>
                <div>
                  <p> AVG. DISTANCE </p>
                  <p> { destination.distance } </p>
                </div>

                <div>
                  <p> EST. TRAVEL TIME </p>
                  <p> { destination.travel } </p>
                </div>
              </div>

          </div>
        </div>

      </div>
    );
  }
  
  export default Destination;