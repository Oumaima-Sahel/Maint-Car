import { NavLink } from "react-router-dom";
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import image from "./photo.jpeg"
import Nav from "../Navbar";

function Detailvehicule() {
    return ( 
        <div>
            <Nav />
            <div className="row p-5">
                <h1 className="col-8 ">Detail Vehicule:</h1>
                <NavLink className="text-dark text-decoration-none col-2" to="/Modifiervehicule"><FiEdit  />modifier</NavLink>
                <NavLink className="text-danger text-decoration-none col-2" to="/"><MdDelete  />surprimer</NavLink>
            </div>
            <div className="row text-dark" id="createvehicul">
                <div className="col-3">
                    <img src={image} alt="" />
                </div>
                <div className="col-9 mt-4">
                    <ul>
                        <li>Nom:</li>
                        <li>Imamatricule:</li>
                        <li>Marque:</li>
                        <li>Année de mise en circulation:</li>
                        <li>Modèle:</li>
                        <li>Type de carburant:</li>
                        <li>Consommation moyenne:</li>
                        <li>Kilométrage actule:</li>
                    </ul>
                </div>
            </div>
        </div>
     );
}

export default Detailvehicule;