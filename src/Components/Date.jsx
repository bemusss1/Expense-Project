import React from 'react'

export const Date = (props) => {
    const year = props.date.getFullYear()
    const month = props.date.getMonth()+1
    const dey = props.date.getDate()
  return (
    <div>
        <span>{year}</span>
        <span>{month}</span>
        <span>{dey}</span>
    </div>
  )
}

export default Date
