import Input from '../login/Input'
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";
import RadioButton from '../RadioButton'
import pacientesHandler from '../../handlers/pacientes'
import Button from '../login/Button'
import { useEffect, useState } from 'react';
import Cargando from '../Cargando';

const InfoPacientes = () => {
    const [paciente, setPacientes] = useState(null)
    const {id} = useParams()

    const getPaciente = async (id) => {
        const dataPacientes = await pacientesHandler.getOne(id)
        setPacientes(dataPacientes)
    }

    useEffect(() => {
        getPaciente(id)
    },[])

    if(paciente !== null){
        return(
            <div className="container my-5 p-4 shadow rounded">
                <h1>Informacion de paciente</h1>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <Input texto="Cedula" type="text" valor={paciente[0].cedula}/>
                        <Input texto="Nombre" type="text" valor={paciente[0].nombre}/>
                        <Input texto="Apellido" type="text" valor={paciente[0].apellido}/>
                        <Input texto="Edad" type="number" valor={paciente[0].edad}/>
                        <Input texto="Telefono" type="text" valor={paciente[0].telefono}/>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <Input texto="Fecha de nacimiento" type="date" valor={paciente[0].fecha_nacimiento}/>
                        <RadioButton texto="Asegurado" bool={paciente[0].asegurado} />
                        <RadioButton texto="Medicamento entregado" bool={paciente[0].medicamento_entregado} />
                        <RadioButton texto="Comida entregada" bool={paciente[0].comida_entregada} />
                        <label htmlFor="">Antecedentes</label>
                        <textarea class="form-control" rows="3">{paciente[0].antecedentes}</textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <Button text="Actualizar" tipo="btn-primary" />
                    </div>
                    <div className="col-6">
                        <Link to="/pacientes"><Button text="Volver"  tipo="btn-danger" /></Link>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return <Cargando />
    }

}

export default InfoPacientes