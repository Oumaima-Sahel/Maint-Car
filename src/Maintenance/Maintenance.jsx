import Nav from "../Navbar";
import { NavLink } from "react-router-dom";
import { MdDelete } from 'react-icons/md';


function Maintenance() {
    return ( 
        <div className="">
            <Nav/>
            <form action="" className="container row" id="createvehicul">
                <div className="col-lg-6 input-data">
                    <input className="input-text col-6 w-100 mb-4 " type="text" />
                    <label className="">Nom</label>
                </div>
                <div className="col-lg-6 input-data">
                    <input className="input-text col-6 w-100 mb-4 " type="text" />
                    <label className="">Type carburant</label>
                </div>
                <div className="col-lg-6 input-data">
                    <input className="input-text col-6 w-100 mb-4 " type="number" />
                    <label className="">Date d'opération</label>
                </div>
                <div className="col-lg-6 input-data">
                    <input className="input-text col-6 w-100 mb-4 " type="number" />
                    <label className="">Kilometrage actuél (Km)</label>
                </div>
                <div className="col-lg-12 input-data">
                    <input className="input-text col-6 w-100 mb-4 " type="number" />
                    <label className="">Frais (Dhs)</label>
                </div>
            </form>
            <div className=""  id="createvehicul">
                <input type="file" className=""/>
                <NavLink className="text-danger text-decoration-none" to="/"><MdDelete  />surprimer</NavLink>
            </div>
            <div className="row justify-content-end input-data" style={{marginLeft:"75%"}}>
                <NavLink to="/ListMaintenance" ><input className="justify-content-end submit-btn" type="submit" value="Crée" /></NavLink>
            </div>
        </div>
     );
}

export default Maintenance;