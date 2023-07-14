import React from "react";
import { NavLink } from "react-router-dom";


function Singup() {

    return ( 
        <div>
            <h1 id="titre">MaintCar</h1>
            <div id="body" className="center border">
                <h3 id="conix">
                    <NavLink className="nav" to='/login'>Login</NavLink>
                    <NavLink className="nav" to='/'>Sign Up</NavLink>
                </h3>
                <form action="formSingup" method="post" id="center">
                    <div className="txt-field">
                        <input type="text" required/>    
                        <label htmlFor="">Nom et Prénom</label>
                        <span></span>
                    </div>
                    <div className="txt-field">
                        <input type="email" required/>
                        <label htmlFor="">E-mail</label>
                        <span></span>
                    </div>
                    <div className="txt-field">
                        <input type="password" required/>
                        <label htmlFor="">le mot de passe</label>
                        <span></span> 
                    </div>
                    <NavLink to='/CreatVehicule'><input type="submit" className="submit" value="Singup" /></NavLink>
                    <div className="login_link">
                        t have a ccount! <a href="login">Login</a>
                    </div>     
                </form>
            </div>
        </div>
     );
}

export default Singup;