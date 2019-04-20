import React from 'react';


const ItemListIndex = ({items}) =>{
    const total= items.reduce((initialValue, item)=>{
        return initialValue+(item.quantity*item.amount);
    },0)
    return(
        <div>
            <table>
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {items.map(({name,quantity,amount},index)=>(
                    <tr key={`items-${index}`}>
                    <td>{name}</td>
                    <td>{quantity}</td>
                    <td>{amount}</td>
                </tr>
                ))}
                <tr>
                    <td colSpan="2">Total</td>
                    <td>{total}</td>
                </tr>
            </tbody>
            </table> 
        </div>
    )
}


export default ItemListIndex;   