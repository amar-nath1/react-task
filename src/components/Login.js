import { Button, Card, Form, FormGroup } from "react-bootstrap"
import { useRef,useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { authActions } from "../store/authSlice"

let Login=()=>{
    let [error,setError]=useState({isError:false,errorMsg:null})
    let dispatch=useDispatch()
    let allUsers=useSelector(state=>state.users.usersArr)
    console.log(allUsers)
    let branchRef=useRef()
    let usernameRef=useRef()
    let passRef=useRef()

    let loginSubmitHandler=(e)=>{
        e.preventDefault()
        let validUser= allUsers.filter((user)=>{
            return user.branchId.toString()===branchRef.current.value.toString() && user.userName.toString()===usernameRef.current.value.toString()
        })
        
        if (validUser.length==0){
            setError({isError:true,errorMsg:'user Not Found'})
                
        }
        else if(validUser[0].password.toString()!==passRef.current.value.toString()){
            setError({isError:true,errorMsg:'Incorrect Password'})
        }
        else{
            dispatch(authActions.setIsLoggedIn(true))
            dispatch(authActions.setCurrentUser(validUser[0].userName))
            setError({isError:false,errorMsg:null})
        }

    }

    return (
        <>
        <Card style={{width:'400px'}} className='mt-4'>
      <Form className="p-4" onSubmit={loginSubmitHandler}>
        <FormGroup className="mb-2">
            <Form.Control type="number" placeholder='BranchId' ref={branchRef} required/>
        </FormGroup>

        <FormGroup className="mb-2">
            <Form.Control type="text" placeholder='Username' ref={usernameRef} required/>
        </FormGroup>

      

        <FormGroup className="mb-2">
            <Form.Control type="password" placeholder='Password' ref={passRef} required/>
        </FormGroup>
        
        <Button type='submit' className='w-100'>Login</Button>
        

      </Form>
      </Card>
      {error.isError && <Card className='bg-danger text-white w-50 mt-2'>
      <Card.Header>{error.errorMsg}</Card.Header>
      </Card>}
      </>
    )
}

export default Login