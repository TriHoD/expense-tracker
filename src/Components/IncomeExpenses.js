import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const IncomeExpenses = () => {

    const { transactions } = useContext(GlobalContext);
    const amount = transactions.map(transaction => transaction.amount);

    // Income
    const incomeArray = amount.filter(am => am > 0);
    const income = incomeArray.reduce((acc, item) => (acc += item), 0).toFixed(2);

    // Expense
    const expenseArray = amount.filter(am => am < 0);
    const expense = expenseArray.reduce((acc, item) => (acc + item), 0).toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${Math.abs(expense)}</p>
            </div>
        </div>
    )
}
