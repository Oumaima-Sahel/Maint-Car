import React from "react";
import "./Style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Singup from "./Singup";
import Login from "./login";
import CreatVehicule from "./Vehicules/CreatVehicule";
import Listevehicule from "./Vehicules/Listevehicule";
import Detailvehicule from "./Vehicules/Detailvehicule";
import Modifiervehicule from "./Vehicules/Modifiervehicule";
import Maintenance from "./Maintenance/Maintenance";
import ListMaintenance from "./Maintenance/ListMaintenance";
import Detailmaintenance from "./Maintenance/Detailmaintenance";
import Suivicarburant from "./carburant/Suivicarburant";
import Listcarburant from "./carburant/Listcarburant";
import Detailcarburant from "./carburant/Detailcarburant";


function App() {
    return ( 
        <BrowserRouter>
            <div className="row">
                
                <Routes>
                    <Route path="/" element={<Singup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/CreatVehicule" element={<CreatVehicule />} />
                    <Route path="/Listevehicule" element={<Listevehicule />} />
                    <Route path="/Detailvehicule" element={<Detailvehicule/>} />
                    <Route path="/Modifiervehicule" element={<Modifiervehicule/>} />
                    <Route path="/Maintenance" element={<Maintenance/>} />
                    <Route path="/ListMaintenance" element={<ListMaintenance/>} /> 
                    <Route path="/Detailmaintenance" element={<Detailmaintenance/>} />
                    <Route path="/Suivicarburant" element={<Suivicarburant/>} />
                    <Route path="/Listcarburant" element={<Listcarburant/>} />
                    <Route path="/Detailcarburant" element={<Detailcarburant/>} />
                </Routes>
            </div>
        </BrowserRouter>

     );
}

export default App;