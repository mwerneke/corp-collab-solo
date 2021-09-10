import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "./Home.css";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";


function Home() {
  const history = useHistory();

  const handleClick = () => {
    console.log("ButtonClicked for AddRequest");
    history.push("/addrequests");
  };

  return (
    <div className="home">
      <h2 className="title">Make a Video Request</h2>

      <AddIcon onClick={handleClick} className="home__Icon" />

      <h4 className="subtitle">Click the '+' and begin the process</h4>
    </div>
  );
}

export default Home;
