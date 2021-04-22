import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const Header = (params) => {
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand ><Link className="text-dark" to="/pacientes">Minsa COVID-19</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse  id="basic-navbar-nav" className="justify-content-end"> 
                <Nav className="">
                    <Nav.Link><Link className="text-dark" to="/pacientes">Pacientes</Link></Nav.Link>
                    <Nav.Link><Link className="text-dark" to="/sintomas">Sintomas</Link></Nav.Link>
                    <Nav.Link><Link className="text-dark" to="/usuarios">Usuarios</Link></Nav.Link>
                    <Nav.Link><button className="btn btn-danger btn-sm">Cerrar sesion</button></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header