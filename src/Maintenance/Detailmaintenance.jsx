import Nav from "../Navbar";
import { NavLink } from "react-bootstrap";
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import image from "../photo.jpeg";



function Detailmaintenance() {
    return ( 
        <div>
            <Nav/>

            <div className="row">
                <h1 className="col-6 " style={{marginLeft:"20px"}} >Detail Véhivule :</h1>
                <div className="col-6 row">
                    <NavLink to="/Maintenance" className="col-6 text-center text-dark text-decoration-none "><FiEdit  />modifier</NavLink><NavLink className="col-6 text-center text-danger text-decoration-none"><MdDelete  />surprimer</NavLink>
                </div>
            </div>
            <div className="row" id="createvehicul">
                <div className="col-3"><img src={image} alt="" /></div>
                <div className="col-9">
                    <ul>
                        <li className="m-3">Nom :</li>
                        <li className="m-3">Frais :</li>
                        <li className="m-3">Date d'opértion :</li>
                        <li className="m-3">Type carburant :</li>
                        <li className="m-3">Kilométrge actuel :</li>
                        <li className="m-3">Document :</li>
                    </ul>
                </div>
            </div>
        </div>
     );
}

export default Detailmaintenance;