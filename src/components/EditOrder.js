import React from 'react'
import { useEffect, useHistory, useState } from 'react'
import { getOrders } from '../apiCallsForDB/api'
import { Link, useParams } from 'react-router-dom'
import { addOrder, editOrder } from '../apiCallsForDB/api'
const initialState = {
    "id": "",
    "customer_name": " ",
    "customer_email": "",
    "product": "",
    "quantity": ''
}
const EditOrder = () => {
    // let history = useHistory();
    const [order, setorder] = useState(initialState);
    const { customer_name, customer_email, product, quantity } = order;
    const { id } = useParams();

    useEffect(() => {
        loadingData();
    }, [])

    const loadingData = async () => {
        const response = await getOrders(id);
        setorder(response.data);
    }
    const editOrderInDB = async () => {
        await editOrder(id,order)
        console.log("pushing the data")
        
    }

    const onChange = (e) => {
        setorder({ ...order, [e.target.name]: e.target.value })
        console.log(order);
    }

    return (
        <div>
            <div className="modal-body">
                <form className="my-3">
                    <div className="mb-3">
                        <h2 className="text-center">Update Your Order</h2>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="customer_name" className="form-label">Name</label>
                        <input type="text" value={customer_name} className="form-control" id="customer_name" name="customer_name" aria-describedby="emailHelp" onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="customer_email" className="form-label">Email</label>
                        <input type="email" value={customer_email} className="form-control" id="customer_email" name="customer_email" aria-describedby="emailHelp" onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="product" className="form-label">Product</label>
                        <input type="text" value={product} className="form-control" id="product" name="product" onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="quantity" className="form-label">Quantity</label>
                        <input type="text" value={quantity} className="form-control" id="quantity" name="quantity" onChange={onChange} />
                    </div>

                </form>
            </div>
            <div className="modal-footer">

                <button type="button" onClick={editOrderInDB} className="btn btn-primary" component={Link} to={`/edit/:${order.id}`}>Update Order</button>
            </div>
        </div>
    )
}

export default EditOrder;
