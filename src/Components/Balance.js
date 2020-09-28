import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
export const Balance = () => {

    const { transactions } = useContext(GlobalContext);
    // get the array with amount values
    const amount = transactions.map(transaction => transaction.amount);
    // get sum total
    const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
    // get to decimal value (.00) by using toFixed
    

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    )
}

