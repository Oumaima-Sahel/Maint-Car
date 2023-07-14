import Nav from "../Navbar";
import { NavLink } from "react-router-dom";
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';


function Listevehicule() {
    return ( 
        <div className="">
            <Nav />
            <div className="row  p-5">
                <h1 className="col-9">Liste de Vehicules</h1>
                <NavLink to="/CreatVehicule" className="col-2 justify-content-end text-premary">
                    <button class="rounded-pill" style={{border: "none", backgroundColor: "#2691d9", color:"white"}} >Nouvelle Vehicule</button>
                </NavLink>
            </div>

            <div className="col-12 p-4 w-auto ml-5">
                <table className="table table-bordered text-bg-secondary ">
                    <thead>
                        <tr>
                            <th>#ID</th>
                            <th>Nom</th>
                            <th>Image</th>
                            <th>Immatricule</th>
                            <th>Marque</th>
                            <th>Modéle</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th><NavLink className="text-decoration-none text-dark" to="/detailvehicule">1</NavLink></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th className=""><NavLink className="text-dark text-decoration-none p-5"><FiEdit  />modifier</NavLink><NavLink className="text-danger text-decoration-none"><MdDelete  />surprimer</NavLink></th>
                        </tr>
                        <tr>
                            <th><NavLink className="text-decoration-none text-dark" to="/detailvehicule">1</NavLink></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th className=""><NavLink className="text-dark text-decoration-none p-5"><FiEdit  />modifier</NavLink><NavLink className="text-danger text-decoration-none"><MdDelete  />surprimer</NavLink></th>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
     );
}

export default Listevehicule;