import React, { ChangeEvent, useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.bubble.css";
import "quill/dist/quill.snow.css";
import "../write/Editor.scss";

interface editorType {
  onChangeField: any;
  title: string;
  body: string;
}

const Editor = ({ onChangeField, title, body }: editorType) => {
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
            [{ list: "ordered" }, { list: "bullet" }, { color: [] }],
            ["blockquote", "code-block", "link", "image"],
          ],
        },
      },
    });
    const quill = quillInstance.current;
    quill.setContents(null);
    quill.on("text-change", (delta: any, oldDelta: any, source: any) => {
      if (source === "user") {
        onChangeField({ key: "body", value: quill.root.innerHTML });
      }
    });
  }, [onChangeField]);

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeField({ key: "title", value: e.target.value });
  };

  return (
    <div className="editor-block">
      <input
        type="text"
        className="title-input"
        placeholder="제목을 입력하세요."
        onChange={onChangeTitle}
        value={title}
      />
      <div className="quill-wrapper">
        <div ref={quillElement}></div>
      </div>
    </div>
  );
};

export default Editor;
