import React from 'react';
import './App.css';
import Balance from './balance';
import History from './history'
import TransForm from './transForm';

function Child() {

    return (

        <div>
            <div className="heading text-center">
                <h1>Expense Tracker</h1>
            </div>
            <div className="container">
                <Balance />

                <History />

                <TransForm />
            </div>
        </div >
    );
}

export default Child;
