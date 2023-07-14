import Nav from "../Navbar";
import { NavLink } from "react-bootstrap";
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import image from "../photo.jpeg";



function Detailcarburant() {
    return ( 
        <div>
            <Nav/>

            <div className="row">
                <h1 className="col-6 " style={{marginLeft:"20px"}} >Detail suivi de consomation carburant :</h1>
                <div className="col-6 row">
                    <NavLink to="/Suivicarburant" className="col-6 text-center text-dark text-decoration-none "><FiEdit  />modifier</NavLink><NavLink className="col-6 text-center text-danger text-decoration-none"><MdDelete  />surprimer</NavLink>
                </div>
            </div>
            <div className="row" id="createvehicul">
                <div className="col-3"><img src={image} alt="" /></div>
                <div className="col-9">
                    <ul>
                        <li className="m-5">Date d'opértion :</li>
                        <li className="m-5">Quantité :</li>
                        <li className="m-5">Montant :</li>
                    </ul>
                </div>
            </div>
        </div>
     );
}

export default Detailcarburant;