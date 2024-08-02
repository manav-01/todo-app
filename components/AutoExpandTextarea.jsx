import React, { useEffect, useRef, forwardRef } from "react";

const AutoExpandTextarea = forwardRef(
  ({ value, onChange, className, ...props }, ref) => {
    const textareaRef = useRef(null);

    const handleChange = (event) => {
      onChange(event);
      adjustTextareaHeight(event.target);
    };

    const adjustTextareaHeight = (textarea) => {
      textarea.style.height = "auto"; // Reset the height
      textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to the scroll height
    };

    useEffect(() => {
      if (textareaRef.current) {
        adjustTextareaHeight(textareaRef.current);
      }
    }, [value]);

    return (
      <textarea
        ref={(el) => {
          textareaRef.current = el;
          if (typeof ref === "function") {
            ref(el);
          } else if (ref) {
            ref.current = el;
          }
        }}
        value={value}
        onChange={handleChange}
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
