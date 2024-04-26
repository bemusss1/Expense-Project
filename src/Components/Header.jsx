import React from 'react'
import styled from "styled-components"

const Header = (props) => {
  return (
    <Headerr>
      <h1>LOGO</h1>
      <Button onClick={props.onShowFormHandler}>ADD PRODUCTS</Button>
    </Headerr>
  )
}

export default Header


const Headerr = styled.div`
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: blue;
`
const Button = styled.button`
  border-radius: 8px;
  padding: 5px 20px;
  font-size: 12 px;
  background-color: gray;
  color: aqua;
`