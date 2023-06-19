import React from 'react'

const Phonebook = (props) => {
  return (
    <div>{props.names} :- {props.num}</div>
  )
}

export default Phonebook