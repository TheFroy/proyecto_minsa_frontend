import axios from 'axios'
import errorHandler from './errors'
const loginHandler = {}

loginHandler.login = async (ced, pwd) => {
    const params = new URLSearchParams()
    params.append('cedula', ced)
    params.append('password', pwd)

    try {
        const res = await axios.post("http://localhost:5000/usuarios/login",params,{
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
            },
        })
        return res.data

    } catch (error) {
        errorHandler.axiosError(error)
    }
}

export default loginHandler