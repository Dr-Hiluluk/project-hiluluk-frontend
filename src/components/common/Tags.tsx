import React from "react";
import { Link } from "react-router-dom";
import "./common.scss";

const Tags = ({ tags }: any) => {
  return (
    <div className="tags_block">
      {tags.map((tag: any, index: number) => (
        <Link key={index} to={`/?tag=${tag.content}`}>
          <div className="tag">#{tag.content}</div>
        </Link>
      ))}
    </div>
  );
};

export default Tags;
