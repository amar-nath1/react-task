import { Button, Card, Form, FormGroup } from "react-bootstrap"
import UsersTable from "./UsersTable"
import { useRef } from "react"
import { useDispatch } from "react-redux"
import { userActions } from "../store/usersSlice"

let UserForm=()=>{
    let dispatch=useDispatch()
    let branchRef=useRef()
    let usernameRef=useRef()
    let fnameRef=useRef()
    let mnameRef=useRef()
    let lnameRef=useRef()
    let posRef=useRef()
    let passRef=useRef()


    let submitHandler=(e)=>{
        e.preventDefault()
        let userObj={
            branchId: branchRef.current.value,
            userName: usernameRef.current.value,
            password: passRef.current.value,
            firstName: fnameRef.current.value,
            middleName: mnameRef.current.value,
            lastName: lnameRef.current.value,
            position: posRef.current.value,
            }

            dispatch(userActions.addUser(userObj))
    }

    return (
        <>
        <div className="d-flex justify-content-xl-between">
        
        <Card style={{width:'400px'}} className='me-4'>
      <Form className="p-4" onSubmit={submitHandler}>
        <FormGroup className="mb-2">
            <Form.Control type="number" placeholder='BranchId' ref={branchRef} required/>
        </FormGroup>

        <FormGroup className="mb-2">
            <Form.Control type="text" placeholder='Username' ref={usernameRef} required/>
        </FormGroup>

        <FormGroup className="mb-2">
            <Form.Control type="text" placeholder='First Name' ref={fnameRef} required/>
        </FormGroup>

        <FormGroup className="mb-2">
            <Form.Control type="text" placeholder='Middle Name' ref={mnameRef}/>
        </FormGroup>

        <FormGroup className="mb-2">
            <Form.Control type="text" placeholder='Last Name' ref={lnameRef} required/>
        </FormGroup>

        <FormGroup className="mb-2">
            <Form.Control type="text" placeholder='Position' ref={posRef} required/>
        </FormGroup>

        <FormGroup className="mb-2">
            <Form.Control type="password" placeholder='Password' ref={passRef} required/>
        </FormGroup>
        <Button type='reset' variant="secondary" className='me-3'>Reset</Button>
        <Button type='submit'>Add User</Button>
        

      </Form>
      </Card>
      
      <div className="flex-fill">
      <UsersTable/>
      </div>
      </div>
      </>
    )
}

export default UserForm