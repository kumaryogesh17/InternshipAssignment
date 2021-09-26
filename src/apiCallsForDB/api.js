import axios from "axios";

const url = 'http://127.0.0.1:3003/orders';

export const getOrders = async(id)=>{
    id = id || ''
    return await axios.get(`${url}/${id}`);
}

export const addOrder = async(order)=>{
    return await axios.post(url,order);
}

export  const deleteOrder = async(id)=>{
    return await axios.delete(`${url}/${id}`);
}

export  const editOrder = async(id,order)=>{
    return await axios.put(`${url}/${id}`,order);
}