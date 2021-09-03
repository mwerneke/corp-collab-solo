import React from 'react'
import './SideBarRow.css'
import Button from '@material-ui/core/Button';

function SideBarRow({selected, Icon,title, link}) {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
           
           {/* <Button color = "primary"  size= "medium" startIcon= 
           {<Icon/>}>{title}</Button>
            */}
            <Button onClick={link} >   
            <Icon className="sidebarRow__icon" />
            <h2 className="sidebarRow__title">{title}</h2>
            
            </Button>
        </div>
    )
}

export default SideBarRow
