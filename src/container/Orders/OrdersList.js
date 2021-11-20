import React, { useEffect, useState } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import './OrdersList.css'

const OrdersList = () => {
    const [vegItem, setVegItem] = useState([]);
    const [nonVegItem, setNonVegItem] = useState([]);
    const [veg, setVeg] = useState(false);
    const [nonveg, setNonveg] = useState(false);

    useEffect(() => {
        fetch("http://localhost/reactphp/veg.php")
        .then(res => res.json())
        .then(
            (result) => {
                setVegItem(result);
            }
        )
    }, [])

    useEffect(() => {
        fetch("http://localhost/reactphp/nonveg.php")
        .then(res => res.json())
        .then(
            (result) => {
                setNonVegItem(result);
            }
        )
    }, [])

    function showVeg() {
        setVeg(true);
        setNonveg(false);
    } 

    function showNonVeg() {
        setNonveg(true);
        setVeg(false);
    }
    return (
        <Auxiliary>
            <h2 style={{color: '#703b09', textAlign: 'center', margin: 'auto'}}>Is your order veg or non-veg ?</h2>
            <div className="main">
                <div id="veg" onClick={() => showVeg()}>
                    Veg Order
                </div>
                <div id="non-veg" onClick={() => showNonVeg()}>
                    Non-Veg Order
                </div>
            </div>
            <div className="main-content">
                {veg ? 
                <div className="veg-table" style={{textAlign: 'center'}}>  
                <div style={{overflowX: 'auto'}}>
                    <table className="veg-order-table">
                        <tbody>
                            <tr style={{backgroundColor: '#47b812'}} >
                                <th>Name</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Zip-Code</th>
                                <th>Onion</th>
                                <th>Tomato</th>
                                <th>Lettuce</th>
                                <th>VegPatty</th>
                                <th>Cheese</th>
                                <th>Price</th>
                                <th>Payment Method</th>
                                <th>Date</th>
                                <th>Order Status</th>
                            </tr>
                            {
                                vegItem.map( (data) => (
                                    <tr key={data.Id}>
                                        <td>{data.name}</td>
                                        <td>{data.address}</td>
                                        <td>{data.email}</td>
                                        <td>{data.number}</td>
                                        <td>{data.zipcode}</td>
                                        <td>{data.onion}</td>
                                        <td>{data.tomato}</td>
                                        <td>{data.lettuce}</td>
                                        <td>{data.vegpatties}</td>
                                        <td>{data.cheese}</td>
                                        <td>{data.price}</td>
                                        <td>{data.payment}</td>
                                        <td>{data.date}</td>
                                        <td>{data.status === 'inactive' ? data.status = 'Pending' :data.status = 'Delivered' }</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div> : ''}
            {nonveg ? 
            <div className="nonveg-table" style={{textAlign: 'center'}}>
            <div style={{overflowX: 'auto'}}>
                <table className="nonveg-order-table">
                    <tbody>
                        <tr style={{backgroundColor: '#c33a02'}}>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Zip-Code</th>
                                <th>Bacon</th>
                                <th>Salad</th>
                                <th>Chicken</th>
                                <th>Beef</th>
                                <th>Cheese</th>
                                <th>Price</th>
                                <th>Payment Method</th>
                                <th>Date</th>
                                <th>Order Status</th>
                        </tr>
                        {
                            nonVegItem.map( (nondata) => (
                                <tr key={nondata.Id}>
                                    <td>{nondata.name}</td>
                                    <td>{nondata.address}</td>
                                    <td>{nondata.email}</td>
                                    <td>{nondata.number}</td>
                                    <td>{nondata.zipcode}</td>
                                    <td>{nondata.bacon}</td>
                                    <td>{nondata.salad}</td>
                                    <td>{nondata.chicken}</td>
                                    <td>{nondata.beef}</td>
                                    <td>{nondata.cheese}</td>
                                    <td>{nondata.price}</td>
                                    <td>{nondata.payment}</td>
                                    <td>{nondata.date}</td>
                                    <td>{nondata.status === 'inactive' ? nondata.status = 'Pending' : nondata.status = 'Delivered'}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                    </table>
                </div>
            </div> : ''}
            </div>
        </Auxiliary>
    )
}

export default OrdersList;
