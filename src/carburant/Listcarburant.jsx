import Nav from "../Navbar";
import { NavLink } from "react-bootstrap";
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';




function Listcarburant() {
    return ( 
        <div>
            <Nav/>

            <div className="row " >
                <h1  className="row " style={{marginLeft:"25%"}}>Liste de suivi de consomation carburant :</h1>
                <select className="col-9" name="" id="" style={{width:"300px", height:"45px", marginLeft:"40px"}}>
                    <option value="">Véhicule 1</option>
                    <option value="">Véhicule 2</option>
                    <option value="">Véhicule 3</option>
                </select>
                <NavLink to='/Suivicarburant' className="col-2 justify-content-end text-premary">
                    <button class="rounded-pill" style={{border: "none", backgroundColor: "#2691d9", color:"white", marginLeft:"900px", width:"300px", height:"45px"}} >Create</button>
                </NavLink>
            </div>

            <table className="table table-bordered text-bg-secondary " style={{marginTop:"40px"}}>
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Image</th>
                        <th>Date</th>
                        <th>Quantité</th>
                        <th>Montant</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th><NavLink className="text-decoration-none text-dark" to="/Detailcarburant">1</NavLink></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th className="row " style={{marginLeft:"-1px"}}><NavLink to="/Suivicarburant" className="col-6 text-center text-dark text-decoration-none "><FiEdit  />modifier</NavLink><NavLink className="col-6 text-center text-danger text-decoration-none"><MdDelete  />surprimer</NavLink></th>
                    </tr>
                    <tr>
                        <th><NavLink className="text-decoration-none text-dark" to="/Detailcarburant">2</NavLink></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th className="row " style={{marginLeft:"-1px"}}><NavLink to="/Suivicarburant" className="col-6 text-center text-dark text-decoration-none "><FiEdit  />modifier</NavLink><NavLink className="col-6 text-center text-danger text-decoration-none"><MdDelete  />surprimer</NavLink></th>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}

export default Listcarburant;