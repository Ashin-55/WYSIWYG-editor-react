import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function Editor1() {
  const [value, setValue] = useState("<p>This is the initial content of the editor.</p>");
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
      setValue(editorRef.current.getContent());
    }
  };
  return (
    <>
      <div style={{ width: "800px ", padding: "10px" }}>
        <h4>TINY MCE editor</h4>
        <Editor
          apiKey="eusbo0bxj4wuotu447kvqx1qx0x5ipf1cgze3rztbsxcyu7a"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue={value}
          init={{
            height: 200,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | " +
              "bold italic backcolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
        <button onClick={log}>Log editor content</button>
      </div>
    </>
  );
}
