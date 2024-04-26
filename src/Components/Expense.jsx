import React, { useState } from 'react'
import Expenseitem from './Expenseitem'
import Header from './Header';
import Form from './Form';

const expenses = [
    {
        title:'Taxi',
        price:500,
        id:'1a',
        date:new Date()
    },
    {
        title:'Obed',
        price:500,
        id:'2a',
        date:new Date()
    },
];

const Expense = () => {
  const [form,setForm] = useState(false);
  const [expensesState,setExpensesState] = useState(expenses);
  const save = (data) => {
    setExpensesState(() => {
      return [...expensesState,data];
    });
  };
  const showFormHandler = () => {
    setForm(true);
  };
  const closeFormHandler = () => {
    setForm(false);
  };
  const totalExpense = expensesState.reduce((a,el) => {
    return a + +el.price;
  },0); 
  return (
    <div>
      <Header onShowFormHandler={showFormHandler}/>
      {form === true ? (
        <Form onSave={save} onCloseFormHandler={closeFormHandler}/>
      ) : (
        ""
      )}
      {
     expensesState.map((el) => {
            return(
            <Expenseitem 
            key = {el.id} 
            title = {el.title} 
            price = {el.price} 
            date = {el.date} 
            />
            );
       })}
       <h1>Итого:{totalExpense}</h1>
    </div>
  );
};

export default Expense;
