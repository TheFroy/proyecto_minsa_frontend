import Navbar from "../navbar/Navbar"
import pacientesHandler from '../../handlers/pacientes'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Button from "../login/Button"
import Tabla from "../Table"
import InfoPacientes from "./InfoPacientes"
const Pacientes = () => {

const [data,setData] = useState(null)

const getData = async () =>{
    const dataPacientes = await pacientesHandler.getAll()
    setData(dataPacientes)
}
    useEffect(() => {
        getData()
    },[])
    
    if(data !== null){
        return(
            <>
                <Navbar />
                <Router>
                    <Route exact path="/pacientes">
                        <div className="container px-4">
                            <div className="row">
                                <div className="col-md-8 col-sm-12 container">
                                    <h1 className="display-4 ">Pacientes</h1>
                                </div>
            
                                <div className="col-md-4 col-sm-12">
                                    <Button text="Agregar paciente" tipo="btn-success" />
                                </div>    
                            </div>
                        </div>
                        <Tabla tipo="paciente" data={data}/>
                    </Route>
                    <Route exact path="/pacientes/:id">
                        <InfoPacientes />
                    </Route>
                </Router>
            </>
        )
    }
    else{
        return(
            <div className="container mx-auto mt-5">
                <h1 className="text-center"> Cargando... </h1>
            </div>
        )
    }
}

export default Pacientes