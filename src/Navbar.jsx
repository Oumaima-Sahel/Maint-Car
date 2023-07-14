import React from "react";
import { NavLink } from "react-router-dom";
import image from "./logo.png";


function Navbar() {
    const changeLink = ({isActive}) => {
        return isActive ? "active" : "NavLink";
    }
    return ( 
        <div>
            <nav>
                <NavLink><img id="logo" src={image} /></NavLink>
                <NavLink id="link" end to='/CreatVehicule' className={changeLink}>Véhicule</NavLink>
                <NavLink id="link" to='/Maintenance' className={changeLink}>Maintenance</NavLink>
                <NavLink id="link" to='/Suivicarburant' className={changeLink}>Suivi de consommation carburant</NavLink>
                <NavLink id="link" to='' className={changeLink}>Tableau de bord</NavLink>
                <NavLink to='/login'><input type="submit" id="logout" value="Log Out" /></NavLink>
            </nav>
        </div>
     );
}

export default Navbar;