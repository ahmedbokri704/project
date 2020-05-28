import React, {useState, useEffect} from 'react'
import {connect} from "react-redux"
import {listUsers} from "../../Actions/action"
import axios from "axios"
import {Table} from 'react-bootstrap';

function Admin(props) {

    const handleEnable = (id) => {
        axios.put(`http://localhost:7000/api/users/enable/${id}`)

    }
    const handleDisable = (id) => {
        axios.put(`http://localhost:7000/api/users/disable/${id}`);

    }
    useEffect(() => {
        async function getUsers() {
            const response = await axios.get(" http://localhost:7000/api/users");
            props.listUsers(response.data)
        }

        getUsers();

    },)

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Activate/Desactivate</th>
                    </tr>
                </thead>
                <tbody> {
                    props.users.map(e => (
                        <tr>
                            <td> {
                                e.email
                            } </td>
                            <td>

                                <button onClick={
                                        () => {

                                            (!e.activate) ? handleEnable(e._id) : handleDisable(e._id)
                                        }
                                    }
                                    variant="contained"
                                    className="info">
                                    {
                                    (!e.activate) ? <label>Enable</label> : <label>Disable</label>
                                }</button>
                            </td>
                        </tr>
                    ))
                } </tbody>
            </Table>
        </div>
    )
}
const mapStateToProps = state => ({users: state.listUsers})

export default connect(mapStateToProps, {listUsers})(Admin)
