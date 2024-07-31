import { forwardRef } from "react";

function Button({children, classname, type = "submit", ...props }, ref) {
  return (
    <button className={classname} type={type} {...props} ref={ref}>{children}</button>
    );
}

export default forwardRef(Button);