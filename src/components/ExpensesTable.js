import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {Table} from "react-bootstrap";
import TableList from "./TableList";
import uniqId from 'uniqid';

const ExpensesTable = () => {
    const {expList} = useSelector(state => state)


    return (
        <Table striped bordered hover className="text-white my-5">
            <thead>
            <tr>
                <th>#</th>
                <th>Date</th>
                <th>Product</th>
                <th>Price</th>
                <th className="text-center">X</th>
            </tr>
            </thead>
            <tbody>
            {
                expList.map((el, idx) => (
                    <TableList el={el} id={idx}/>
                ))
            }
            </tbody>
        </Table>
    );
};

export default ExpensesTable;