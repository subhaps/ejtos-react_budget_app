
import React from 'react';
const Currency = () => {

    return (
        <div className='alert alert-success'>
            <select name="currency" id="currency" style="border-radius: 15px;
 background-color: red;">
                <option value="dollor">$ Dollor</option>
                <option value="pound">£ Pound</option>
                <option value="euro">€ Euro</option>
                <option value="rupee">₹ Rupee</option>
            </select>
        </div>
    );
};
export default Currency;
