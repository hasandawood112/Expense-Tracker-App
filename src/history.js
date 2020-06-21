import React, {useContext} from 'react';
import './App.css';
import {TransactionContext} from './transContext';

function History() {

    let {transaction}= useContext(TransactionContext)

    return (
        <div>
            <h3>History</h3>
            <hr />
            <ul className="transaction-list">
                {transaction.map((transObj, ind) => {
                    return (
                        <li key={ind}>
                            <span>{transObj.desc}</span>
                            <span>{transObj.amount}</span>
                        </li>)
                })}
            </ul>
        </div>
    );
}

export default History;