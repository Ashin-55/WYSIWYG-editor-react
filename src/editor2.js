import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Editor2() {
  const [value, setValue] = useState("");
  const editorClick = (val) => {
    setValue(val);
  };

  const customToolbar = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];
  useEffect(() => {
    console.log("loding");
  }, []);
  return (
    <>
      <h4>ReactQuill editor</h4>
      <div style={{ height: "100px", width: "800px" }}>
        <ReactQuill theme="snow" style={{ height: "100px" }} value={value} onChange={editorClick} modules={{ toolbar: customToolbar }} />;
      </div>
    </>
  );
}
