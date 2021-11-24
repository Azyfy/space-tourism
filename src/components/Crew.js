import "./Crew.scss"
import { useState } from "react"

function Crew({ crew }) {

    const [ member, setMember] = useState(crew[0])

    function pickMember(memb) {
        setMember(crew.find( m => m.name === memb ) )
    }

    return (
      <div className="Crew">
        <h1> <span> 02 </span> MEET YOUR CREW </h1>
        
        <div>
            <div>
                <img src={member.images.png} alt={member.name} />
            </div>
            <div>
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
                    <p> { member.role } </p>
                    <p> { member.name } </p>
                    <p> { member.bio } </p>
                </div>
            </div>
        </div>

      </div>
    );
  }
  
  export default Crew;