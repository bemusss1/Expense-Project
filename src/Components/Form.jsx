import React, { useState } from 'react'
import styled from 'styled-components'

const Form = (props) => {

    const [title,setTitle] = useState("")
    const [price,setPrice] = useState("")
    const titleHandler = (event) => {
      setTitle(event.target.value)
    }

    const priceHandler =(e) => {
       setPrice(e.target.value)
    }
    const addHandler = () => {
      const exp = {
        title: title,
        price:price,
        id: Math.random(),
        date: new Date(),
      }
      props.onSave(exp)
      setTitle("")
      setPrice("")
    }
  return (
    <Formm>
      <div>
        <input value={title} onChange={titleHandler} type="text" />
        <input value={price} onChange={priceHandler} type="text" />
      </div>
      <div>
        <button onClick={addHandler}>Add</button>
        <button onClick={props.onCloseFormHandler}>Close</button>
      </div>
    </Formm>
  )
}

export default Form


const Formm = styled.form`
  border: 1px solid;
  display: flex;
  width: 400px;
  height: 100px;
`
