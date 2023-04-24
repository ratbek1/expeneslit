import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ExpensesTable from "./ExpensesTable";

const ExpensesList = () => {
    const {expList} = useSelector(state => state)

    const [value, setValue] = useState({date: "", product: "", expenses: ""})

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value})
        console.log(value)
    }

    const def = (e) => {
        e.preventDefault()
        dispatch({type:"CREATE_EXP_LIST", payload:value})
        setValue({date: "", product: "", expenses: ""})
    }

    return (
        <>
            <form onSubmit={def} className="d-flex justify-content-center">
                <input value={value.date} name="date" onChange={handleChange} type="date" className="rounded-2"/>
                <input value={value.product} name="product" onChange={handleChange} type="text" className="mx-4 rounded-2"/>
                <input value={value.expenses} name="expenses" onChange={handleChange} type="number" className="rounded-2"/>
                <button className="btn btn-warning mx-4 text-white" >Заплатить</button>
            </form>
            {expList.length === 0 ? null : <ExpensesTable/>}
        </>
    );
};

export default ExpensesList;