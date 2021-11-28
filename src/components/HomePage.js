import "./HomePage.scss"

import {
  Link
} from "react-router-dom";

function HomePage() {

  function styleNav() {
    document.querySelectorAll(".nav-tab").forEach(e => {
      e.style.borderBottom = "none"
    })
    document.getElementById(`destination-nav`).style.borderBottom = "3px solid white"
  }

    return (
      <div className="HomePage"  >
        
        <header>
            <p> SO, YOU WANT TO TRAVEL TO </p>
            <h1> SPACE </h1>
            <p className="text" > Let’s face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we’ll give you a truly out of this world experience! </p>
        </header>

        <div>
          <Link to="/destination" onClick={styleNav} > <button> EXPLORE </button> </Link>
        </div>

      </div>
    );
  }
  
  export default HomePage;