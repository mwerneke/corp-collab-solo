import React from "react";
import "./SideBarRow.css";

function SideBarRow({ selected, Icon, title, link }) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      {/* <Button color = "primary"  size= "medium" startIcon= 
           {<Icon/>}>{title}</Button>
            */}
      {/* <Button onClick={link} >    */}
      <Icon className="sidebarRow__icon" />
      <h2 onClick={link} className="sidebarRow__title">
        {title}
      </h2>

      {/* </Button> */}
    </div>
  );
}

export default SideBarRow;
