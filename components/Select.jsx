import React, { forwardRef } from 'react'

function Select({name, classname, id, options, ...props},ref) {
  return (
   <select name={name} id={id} className={`bg-transparent ${classname}`} {...props} ref={ref}>
            <option value="">Not Selected</option>
            {options && options.map(option => <option value={option} key={option}>{option}</option> )}
    </select>
  )
}

export default forwardRef(Select);