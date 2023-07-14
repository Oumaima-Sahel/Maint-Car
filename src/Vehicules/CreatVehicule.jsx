import Nav from "../Navbar";
import image from "./photo.jpeg";
import { NavLink } from "react-router-dom";


function CreatVehicule() {
    return ( 
        <div>
            <Nav />
            <form  id="createvehicul" className="row ">
                <div className="row m-4" >
                    <div className="col-3">
                        <img src={image}/><br />
                        <input type="file" id="imgs" style={{marginTop:"40px"}} className="inp" />
                        <label htmlfor="image" typeof="file" style={{border:"none", display:"none",backgroundColor:"#115380",height:"36px",width:"50%",marginTop:"40px",borderRadius:"30px",color:"white"}}></label>
                    </div>
                    <div className="col-9 row container" id="form2">

                        <div className="col-lg-6 input-data">
                            <input className="input-text col-6 w-100 mb-4 " type="text" />
                            <label className="">Nom*</label>
                        </div>

                        <div className="col-lg-6 input-data">
                            <input className="input-text col-6 w-100 mb-4 " type="number" />
                            <label className="">Immatricule *</label>
                        </div><br />

                        <div className="col-lg-6 input-data">
                            <select className="input-text col-6 w-100 mb-4 " value={''}></select>
                            <label className="">Marque *</label>
                        </div>

                        <div className="col-lg-6 input-data">
                            <select className="input-text col-6 w-100 mb-4 " value={''}></select>
                            <label className="">Modéle *</label>
                        </div>

                        <div className="col-lg-6 input-data">
                            <input className="input-text col-6 w-100 mb-4 " type="text"/>
                            <label className="">Type carburan *</label>
                        </div>

                        <div className="col-lg-6 input-data">
                            <input className="input-text col-6 w-100 mb-4 text-white" type="date" />
                            <label className="">Année de maise en circulation *</label>
                        </div><br />

                        <div className="col-lg-6 input-data">
                            <input className="input-text col-6 w-100 mb-4 " type="number" />
                            <label className="">Consommation moyénne * (Dhr)</label>
                        </div>

                        <div className="col-lg-6 input-data">
                            <input className="input-text col-6 w-100 mb-4 " type="number" />
                            <label className="">Kilometrage actuél *(Km)</label>
                        </div><br />
                        <div className="col-12 row justify-content-end input-data">
                            <NavLink to="/Listevehicule"><input className="submit-btn" type="submit" value="Crée" /></NavLink>
                        </div>
                    </div>
                </div>
            </form>
        </div>
     );
}

export default CreatVehicule;