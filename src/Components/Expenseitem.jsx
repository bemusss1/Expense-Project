import React from 'react'
import {Date} from './Date'

const Expenseitem = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <span>{props.price}</span>
      <Date date = {props.date}/>
    </div>
  )
}

export default Expenseitem
