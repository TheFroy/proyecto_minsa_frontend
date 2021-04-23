import {Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Tabla = ({tipo, data}) => {
    return(
        <>
        {tipo == 'paciente' ?
                <>
                    <div className="table-responsive-sm container px-4">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Cedula</th>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Edad</th>
                                        <th>Telefono</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(element => {
                                        return(
                                            <tr >
                                                <td>{element.cedula}</td>
                                                <td>{element.nombre}</td>
                                                <td>{element.apellido}</td>
                                                <td>{element.edad}</td>
                                                <td>{element.telefono}</td>
                                                <td className="text-center"><Link to={`/pacientes/${element.id}`}>Ver mas</Link></td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                    </div>
                </>
                :
                <h1>hi</h1>
            }
        </>
    )
}

export default Tabla