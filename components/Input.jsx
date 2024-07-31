import { forwardRef, useId } from "react";
export default forwardRef(function  Input({lebel,classname,type="text",placeholder, ...props},ref){
    const id = useId()
    return (<>
    
    {lebel && <lebel className="mb-2" htmlFor={id} >{lebel}</lebel>}
    <input type = {type} className= {` ${classname} `} placeholder={placeholder || ""} {...props} ref={ref} />
    </>)
   
});