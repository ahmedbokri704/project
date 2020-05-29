import React from 'react'
import Axios from 'axios'
import {connect} from "react-redux"
import  {listUsers} from "../../Actions/action"

function SharedPost(props) {
    React.useEffect(() => {
        async function getUsers() {
            const response = await Axios.get(" http://localhost:7000/api/users");
            props.listUsers(response.data)
        }

        getUsers();

    },)

    return (
        <div>
            {props.users.map (e => e.tasks.map(e=>e.text) )}
        </div>
    )
}
const mapstateToProps = state =>({
   users : state.listUsers 
})
export default connect(mapstateToProps,{listUsers})(SharedPost)
