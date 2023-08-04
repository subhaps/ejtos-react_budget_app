
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, currency } = useContext(AppContext);
 
    const [setBudget] = useState('');
   
    return (
        <div className='alert alert-secondary'>
            Budget: {currency}
            <input
                required='required'
                type='number'
                id='budget'
                value={budget}
                style={{ size: 5}}
                onChange={(event) => setBudget(event.target.value)}
               >
            </input>

        </div>
    );
};
export default Budget;
