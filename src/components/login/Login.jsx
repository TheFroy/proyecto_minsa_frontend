import Button from "./Button"
import Input from "./Input"
import loginHandler from '../../handlers/login'
import {useHistory} from 'react-router-dom'
import { useState } from "react"
import './login.css'
const Login = () => {
    const history = useHistory()
    const [data, setData] = useState({ced:"", pwd: ""})
    const [estado, setEstado] = useState("Ingresar")

    const submitHandler = async () => {
        if(data.ced !== "" && data.pwd !== ""){
            const resp = await loginHandler.login(data.ced,data.pwd)
            setEstado("Cargando...")
            if(resp){
                sessionStorage.setItem('logged', true)
                history.push('/pacientes')
            }
            else{
                setEstado("Ingresar")
                alert('Credenciales incorrectos')
            }
        }
        else{
            alert("Ingresa tus credenciales")
        }
    }
    return (
        <>
            <div className="login-container mx-auto container col-sm-9 col-lg-6 " >
                <div className="border shadow rounded py-2 px-4">
                    <h1 className="text-center mt-4">Iniciar sesion</h1>
                    <h5 className="text-center">Minsa COVID</h5>
                    <Input type="text" texto="Ingresa tu cedula" getText={e => setData({...data, ced: e.target.value})} />
                    <Input type="password" texto="Ingresa tu contraseña" getText={e => setData({...data, pwd: e.target.value})} />
                    <Button text={estado} tipo="btn-primary" login={submitHandler}/>
                </div>
            </div>
        </>
    )
}

export default Login 