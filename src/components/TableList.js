import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import uniqId from "uniqid";

const TableList = ({el, id}) => {
    // const [value, setValue] = useState({date: "", product: "", expenses: ""})
    // const dispatch = useDispatch()
    //
    // const del = () => {
    //     dispatch({type: "DELETE_EXP_LIST", payload: value})
    //     setValue(null)
    // }
    return (
        <tr>
            <td className="text-white">{id + 1}</td>
            <td className="text-white">{el.date}</td>
            <td className="text-white">{el.product}</td>
            <td className="text-white">{el.expenses}</td>
            <td className="text-center text-white">
                <button className="btn btn-danger">Delete</button>
            </td>
        </tr>
    );
};

export default TableList;