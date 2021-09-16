import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "./Home.css";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import Library from "./Library";
import inst from "./inst.png";

function Home() {
  const history = useHistory();

  const handleClick = () => {
    console.log("ButtonClicked for AddRequest");
    history.push("/addrequests");
  };

  return (
    <>
      <div className="home">
        <div className="border">
          <h2 className="home__title">Make a Video Request</h2>

          <AddIcon onClick={handleClick} className="home__Icon" />

          <h4 className="home__subtitle">
            Click the '+' and begin the process
          </h4>
        </div>
        <body className="home__body">
          <img className="home__Img" src={inst} alt="" />
        </body>
      </div>

      {/* <div>
      <footer className="home__foot">
    <img className="img" src={inst} alt="" />
    </footer>
    </div> */}
    </>
  );
}

export default Home;
