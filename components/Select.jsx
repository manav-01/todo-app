import React, { forwardRef } from 'react'

function Select({name, classname, id, options, ...props},ref) {
   function capitalizeFirstWord(name) {
     const firstWord = name.split(" ")[0];
     return (
       firstWord.charAt(0).toUpperCase() + firstWord.slice(1).toLowerCase()
     );
   }

  return (
    <select
      name={name}
      id={id}
      className={`bg-transparent ${classname}`}
      {...props}
      ref={ref}
    >
      <option value="">Not Selected</option>
      {options &&
        options.map((option) => (
          <option value={option} key={option}>
            {capitalizeFirstWord(option)}
          </option>
        ))}
    </select>
  );
}

export default forwardRef(Select);