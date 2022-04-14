import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.bubble.css";
import "quill/dist/quill.snow.css";
import "../write/Editor.scss";

const Editor = () => {
  const quillInstance = useRef<any>(null);
  const quillElement = useRef<any>(null);
  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "bubble",
      placeholder: "내용을 입력하세요...",
      modules: {
        toolbar: {
          container: [
            [{ header: "1" }, { header: "2" }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["blockquote", "code-block", "link", "image"],
          ],
        },
      },
    });
    quillInstance.current.setContents(null);
  }, []);

  return (
    <div className="editor-block">
      <input
        type="text"
        className="title-input"
        placeholder="제목을 입력하세요."
      />
      <div className="quill-wrapper">
        <div ref={quillElement}></div>
      </div>
    </div>
  );
};

export default Editor;
