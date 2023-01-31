
import { Container } from 'react-bootstrap';
import './App.css';
import UserForm from './components/UserForm';
import { useSelector } from 'react-redux';
import Login from './components/Login';

import HeaderView from './components/HeaderView'

function App() {
  let isLoggedIn = useSelector(state=>state.auth.isLoggedIn)
  
  return (
    <Container >
      {isLoggedIn && <HeaderView></HeaderView>}
     {isLoggedIn && <UserForm/>}
     {!isLoggedIn && <Login/>}
    </Container>
  );
}

export default App;
