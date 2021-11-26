import "./Destination.scss"
import { useState } from "react"

function Destination({ destinations }) {
  
    const [ destination, setDestination] = useState(destinations[0])

    function pickDestination (dest) {
      setDestination(destinations.find( d => d.name === dest ) )
    }

    return (
      <div className="Destination" style={{ backgroundImage: "url(./assets/destination/background-destination-mobile.jpg)" }} >
        
        <h5> <span class="nm-s" > 01 </span> PICK YOUR DESTINATION </h5>

        <div className="dest-cont" >
          <img src={`${ destination.images.png }`} alt={ destination.name } />

          <div className="dest-inside-cont" >
            <nav className="dest-nav" >
              {destinations.map( dest => {
                return(
                  <div key={ dest.name } onClick={ () => {pickDestination(dest.name)} } >
                    { dest.name.toUpperCase() }
                  </div>
                )
              } )}
            </nav>
              
              <div className="dest-descr" >
                <h2> { destination.name.toUpperCase() } </h2>

                <p className="text" > { destination.description } </p>
              </div>

              <div className="avg-est" >
                <div>
                  <p> AVG. DISTANCE </p>
                  <p> { destination.distance.toUpperCase() } </p>
                </div>

                <div>
                  <p> EST. TRAVEL TIME </p>
                  <p> { destination.travel.toUpperCase() } </p>
                </div>
              </div>

          </div>
        </div>

      </div>
    );
  }
  
  export default Destination;