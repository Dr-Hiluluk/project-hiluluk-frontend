import React from "react";
import { Link } from "react-router-dom";
import "./TagBox/TagBox.scss";

export interface Tag {
  content: string;
}

const Tags = ({ tags }: any) => {
  tags.sort((a: any, b: any) => a.content - b.content);
  return (
    <div>
      {tags.map((tag: Tag, index: number) => (
        <Link key={index} to={`/?tag=${tag.content}`}>
          <div className="tag">{tag.content}</div>
        </Link>
      ))}
    </div>
  );
};

export default Tags;
