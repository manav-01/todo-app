// import { forwardRef, useId } from "react";
// export default forwardRef(function  Input({lebel,classname,type="text",placeholder, ...props},ref){
//     const id = useId()
//     return (<>
    
//     {lebel && <lebel className="mb-2" htmlFor={id} >{lebel}</lebel>}
//     <input type = {type} className= {` ${classname} `} placeholder={placeholder || ""} {...props} ref={ref} />
//     </>)
   
// });

import { forwardRef, useId } from "react";

const Input = forwardRef(function Input(
  { label, classname, type = "text", placeholder, value = "", ...props },
  ref
) {
  const id = useId();
  return (
    <>
      {label && (
        <label className="mb-2" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={` ${classname} `}
        placeholder={placeholder || ""}
        value={value}
        {...props}
        ref={ref}
      />
    </>
  );
});

export default Input;
