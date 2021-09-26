import React, { useRef, useState } from 'react'
import { addOrder } from '../apiCallsForDB/api'
import { useHistory } from 'react-router'

const initialState = {
    "id": "",
    "customer_name": " ",
    "customer_email": "",
    "product": "",
    "quantity": ''
  }

const AddNewOrder = () => {
    const history = useHistory();
    const ref = useRef(null)
    const refClose = useRef(null)
    const [order, setorder] = useState(initialState);
    const {customer_name ,customer_email , product,quantity} = order;

    const onChange = (e) => {
        
        setorder({ ...order, [e.target.name]: e.target.value })
        console.log(order);
    }
    const AddingOrderInDB =async ()=>{
        await addOrder(order)
        refClose.current.click();
        history.push('./allOrders')
    }

    return (
        <>
            <button ref={ref} type="button" className="btn btn-dark " data-bs-toggle="modal" data-bs-target="#exampleModal">
                New Order
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Order</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="customer_name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="customer_name" name="customer_name" aria-describedby="emailHelp" value={order.customer_name} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="customer_email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="customer_email" name="customer_email" aria-describedby="emailHelp" value={order.customer_email} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="product" className="form-label">Product</label>
                                    <input type="text" className="form-control" id="product" name="product" value={order.product} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="quantity" className="form-label">Quantity</label>
                                    <input type="text" className="form-control" id="quantity" name="quantity" value={order.quantity} onChange={onChange} />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button  type="button" onClick={AddingOrderInDB} className="btn btn-primary">Add Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNewOrder
