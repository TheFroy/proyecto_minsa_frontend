import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import Login from './components/login/Login';
import Pacientes from './components/pacientes/Pacientes';

function App() {
  return (
    <>
      <Router>
        <Redirect exact from="/" to="/login"/>
        {sessionStorage.getItem('logged') === true ? <Redirect from="/login" to='/pacientes'/> : <Redirect from="/pacientes" to='/login' />}
        <Route exact path="/login" component={Login} />
        <Route path="/pacientes"  component={Pacientes}/>
      </Router>
    </>
  );
}

export default App;
