import React, { useState } from 'react';
import { useDispatchCart, useCart}  from './ContextReducer';

export default function Ccard(props) {
    const dispatch = useDispatchCart(); // Ensure useDispatchCart is working correctly
    const data = useCart(); // Access cart data from the context
    const options = props.options;
    const priceOptions = Object.keys(options);

    const [qty, setQty] = useState(1);
    const [size, setSize] = useState(" ");

    const handleAddToCart = async () => {
        await dispatch({
            type: "ADD",
            id: props.foodItem._id,
            name: props.foodItem.name,
            price: props.finalPrice,
            qty: qty,
            size: size
        });
        console.log(data); // Check cart data
    };

    return (
        <div>
            <div>
                <div className="card mt-4" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                    <div className="card-body">
                        <h5 className="card-title">{props.foodItem.name}</h5>
                        <p className="card-text">Welcome to Kitchen.</p>
                        <div className='container w-100'>
                            <select className='m-2 h-100 bg-success' onChange={(e) => setQty(e.target.value)}>
                                {Array.from(Array(6), (e, i) => (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                ))}
                            </select>

                            <select className='m-2 h-100 bg-success rounded' onChange={(e) => setSize(e.target.value)}>
                                {priceOptions.map((data) => (
                                    <option key={data} value={data}>{data}</option>
                                ))}
                            </select>
                            <div className='d-inline h-100 fs-5'></div>
                            Total Price
                        </div>
                    </div>
                    <hr />
                    <button className={'btn btn-success justify-center ms-2'} onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
