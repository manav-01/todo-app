import React, { useEffect, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, defaultValue = "" }) {
  const editorRef = useRef(null); // Ref to access the TinyMCE editor instance

  useEffect(() => {
    if (editorRef.current) {
      // Set editor content if defaultValue changes
      editorRef.current.setContent(defaultValue);
    }
  }, [defaultValue]); // Run this effect when defaultValue changes

  return (
    <div className="w-full">
      <Controller
        name={name || "description"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey={`${process.env.NEXT_PUBLIC_TINYMCE_API_KEY}`}
            initialValue={defaultValue}
            onInit={(evt, editor) => (editorRef.current = editor)}
            init={{
              height: 350,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
              content_style:
                "body { font-family:Inter,Arial,sans-serif; font-size:16px }",
            }}
            onEditorChange={(content) => onChange(content)}
          />
        )}
      />
    </div>
  );
}
