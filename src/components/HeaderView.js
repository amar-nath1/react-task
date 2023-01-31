import { Button, Container } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { authActions } from "../store/authSlice"

let HeaderView=()=>{
    let dispatch=useDispatch()
    let currentUser=useSelector(state=>state.auth.currentUser)
    let logoutHandler=()=>{
        dispatch(authActions.setIsLoggedIn(false))
    }
    return (
        <Container className="d-flex justify-content-between m-4">
            <div><h3>{currentUser}</h3></div>
            <div><Button onClick={logoutHandler}>Logout</Button></div>
        </Container>
    )
}

export default HeaderView