import React from 'react'
import { useEffect, useState } from 'react'
import { getOrders } from '../apiCallsForDB/api'
import { deleteOrder } from '../apiCallsForDB/api'
import { Link } from 'react-router-dom'

const Orders = () => {

    const [order, setorder] = useState([])

    const allOrders = async () => {
        const response = await getOrders();
        console.log(response.data);
        setorder(response.data)
    }

    useEffect(() => {
        allOrders();
    }, [])

    const deleteOrders = async (id) => {
        await deleteOrder(id);
        allOrders();

    }
    return (
        <table class="table table-hover">
            <thead style={{ "background": "black", "color": "white" }}>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Product</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>

                {
                    order.map((curElem, ind) => {
                        return (
                            <tr key={ind}>
                                <td className="colhover1">{curElem.id}</td>
                                <td className="colhover2">{curElem.customer_name}</td>
                                <td className="colhover3">{curElem.customer_email}</td>
                                <td className="colhover5">{curElem.quantity}</td>
                                <td className="colhover4">{curElem.product}</td>
                                <td><a className="btn btn-light" href={`/edit/${curElem.id}`} role="button" component={Link} to={`/edit/${curElem.id}`}><i className="fas fa-edit mx-3"></i></a></td>
                                <td><a className="btn btn-light" role="button" onClick={() => deleteOrders(curElem.id)}><i className="fas fa-trash mx-3" ></i></a></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Orders
