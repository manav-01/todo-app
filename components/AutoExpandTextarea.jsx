import React, { useEffect, useRef, forwardRef } from "react";

const AutoExpandTextarea = forwardRef(
  ({ value, onChange, className, ...props }, ref) => {
    const textareaRef = useRef(null); // Local ref for the textarea

    useEffect(() => {
      // Function to adjust the textarea height
      const adjustTextareaHeight = () => {
        if (textareaRef.current) {
        //   textareaRef.current.style.height = "auto"; // Reset height to auto
          textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set height to scrollHeight
          textareaRef.current.style.resize = `${textareaRef.current.scrollHeight}px`; // Set height to scrollHeight
        }
      };

      adjustTextareaHeight(); // Call function on value change or initial render
    }, [value, onChange]);

    // console.log(textareaRef.current.style.height);
    // console.log(textareaRef.current.scrollHeight);
    return (
      <textarea
        ref={(el) => {
          textareaRef.current = el; // Assign the local ref
          if (typeof ref === "function")
            ref(el); // Assign the forwarded ref if it's a function
          else if (ref) ref.current = el; // Assign the forwarded ref if it's an object
        }}
        value={value}
        onChange={onChange}
        rows="1"
        className={`auto-expand-textarea ${className}`}
        style={{
          overflow: "hidden", // Prevent scrollbars
          resize: "none", // Disable manual resizing
        }}
        placeholder="Write a description..."
        {...props}
      />
    );
  }
);

export default AutoExpandTextarea;
