import axios from 'axios'
import errorHandler from './errors'
const pacientesHandler = {}

pacientesHandler.getAll = async () => {
    try {
        const res = await axios.get("http://3.142.70.11:5000/pacientes/getall",{
            "headers": {
                "content-type": "application/json",
            },
        })
        return res.data

    } catch (error) {
        errorHandler.axiosError(error)
    }
}

pacientesHandler.getOne = async (id) => {
    try {
        const res = await axios.get(`http://3.142.70.11:5000/pacientes/getone/${id}`,{
            "headers": {
                "content-type": "application/json",
            },
        })
        return res.data

    } catch (error) {
        errorHandler.axiosError(error)
    }
}

export default pacientesHandler