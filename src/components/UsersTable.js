import { Table, Button} from "react-bootstrap"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { userActions } from "../store/usersSlice"

let UsersTable=()=>{
    let dispatch=useDispatch()
    let users=useSelector(state=>state.users.usersArr)
    console.log(users)
    let count=0
    let showUsers=users.map((user)=>{
        count++
        let removeHandler=()=>{
            dispatch(userActions.deleteUser(user.userName))
        }
        return (
            <tr key={user.userName}>
                <td>{count}</td>
                <td>{user.branchId}</td>
                <td>{user.userName}</td>
                <td>{`${user.firstName} ${user.middleName} ${user.lastName}`}</td>
                <td>{user.position}</td>
                <td><Button variant='danger' onClick={removeHandler}>X</Button></td>
            </tr>
        )
    })
    return (
        <Table striped bordered>
            <thead>
                <tr>
                    <th>#</th>
                    <th>BranchId</th>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                   {showUsers} 
                </tbody>
        </Table>
    )
}

export default UsersTable