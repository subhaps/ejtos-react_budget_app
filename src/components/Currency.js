
import React, { useState } from 'react';
const Currency = () => {

    const [setCurrency] = useState('');
    return (
        <div className='alert alert-success'>
            Currency:
            <select name="currency" id="currency" style={{ borderRadius: "5px", backgroundColor: "lightgreen" }} onChange={(event) => setCurrency(event.target.value)}>
                <option value="$">$ Dollor</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};
export default Currency;
