
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
 
    const [setBudget] = useState(budget);

    return (
        <div className='alert alert-secondary'>
            Budget: £
            <input
                required='required'
                type='number'
                id='budget'
                value={budget}
                onChange={(event) => setBudget(event.target.value)}
               >
            </input>

        </div>
    );
};
export default Budget;
