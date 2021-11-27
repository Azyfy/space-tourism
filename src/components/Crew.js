import "./Crew.scss"
import { useState } from "react"

function Crew({ crew }) {

    const [ member, setMember] = useState(crew[0])

    function pickMember(memb) {
        setMember(crew.find( m => m.name === memb ) )
    }

    return (
      <div className="Crew" style={{ backgroundImage: "url(./assets/crew/background-crew-mobile.jpg)" }} >
        <h5> <span className="nm-s" > 02 </span> MEET YOUR CREW </h5>
        
        <div className="crew-cont" >
            <div>
                <img src={member.images.png} alt={member.name} />
            </div>
            <div className="crew-inside-cont" >
                <div className="crew-nav" >
                    {
                        crew.map( m => {
                            return (
                                <div key={m.name} className="dot-nav" onClick={ () => { pickMember(m.name) } } > </div>
                            )
                        })
                    }
                </div>

                <div>
                    <p> { member.role.toUpperCase() } </p>
                    <h3> { member.name.toUpperCase() } </h3>
                    <p className="text" > { member.bio } </p>
                </div>
            </div>
        </div>

      </div>
    );
  }
  
  export default Crew;