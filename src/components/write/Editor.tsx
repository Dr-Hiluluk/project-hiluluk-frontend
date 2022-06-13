import React, { ChangeEvent, useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.bubble.css";
import "quill/dist/quill.snow.css";
import "../write/Editor.scss";
interface editorType {
  onChangeField: any;
  title: string;
  body: string;
  onUpload: any;
  image: string | null;
}

const Editor = ({
  onChangeField,
  title,
  body,
  onUpload,
  image,
}: editorType) => {
  const quillInstance = useRef<any>(null);
  const quillElement = useRef<any>(null);

  const addImageToEditor = (image: string) => {
    const quill = quillInstance.current;
    if (!quill) return;
    quill.focus();
    const range = quill.getSelection();
    if (!range) return;
    const Image = Quill.import("formats/image");
    Image.sanitize = (image: any) => image;
    quill.insertEmbed(range.index, "image", image);
    quill.insertText(range.index + 2, "");
    quill.setSelection(range.index + 2, 0);
    quill.focus();
  };
  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "snow",
      placeholder: "내용을 입력하세요...",
      modules: {
        toolbar: {
          container: [
            [{ header: "1" }, { header: "2" }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }, { color: [] }],
            ["blockquote", "code-block", "link", "image"],
          ],
          handlers: { image: onUpload },
        },
      },
    });
    const quill = quillInstance.current;
    quill.setContents(null);
    quill.on("text-change", (delta: any, oldDelta: any, source: any) => {
      onChangeField({ key: "body", value: quill.root.innerHTML });
    });
  }, [onChangeField, onUpload]);

  useEffect(() => {
    if (image) {
      addImageToEditor(image);
    }
  }, [image]);

  const mounted = useRef(false);
  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    quillInstance.current.root.innerHTML = body;
  }, [body]);

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
