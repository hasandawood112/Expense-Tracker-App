import React from 'react';
import './App.css';

function Balance() {
    return (
        <div>
            <h3 className="text-center">Your Balance <br /> <span className="balance">$260</span></h3>

            <div className="expense-container">
                <h3 >INCOME
        <br />
                    <span className="income"> $260</span>
                </h3>
                <h3>EXPENSE
        <br />
                    <span className="expense"> $260 </span>
                </h3>
            </div>
        </div>
    );
}

export default Balance;

