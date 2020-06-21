import React from 'react';
import './App.css';

function TransForm() {

    return (
        <div>
            <h3>Add New Transaction</h3>
            <hr />

            <form className="transaction-form">
                <label>
                    Enter Description <br />
                    <input type="text" placeholder="Enter Text..." required />
                </label>
                <br />
                <label>
                    Amount <br /> (nagetive - expense, positive + income)
                <br />
                    <input type="number" placeholder="Enter Amount..." required />
                </label>
                <br />
                <input type="submit" value="Add Transaction" className="btn"/>
            </form>
        </div>
    );
}

export default TransForm;