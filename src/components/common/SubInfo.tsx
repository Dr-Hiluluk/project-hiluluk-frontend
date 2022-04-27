import React from "react";
import { Link } from "react-router-dom";
import "./common.scss";

interface subInfoProps {
  nickname: string;
  createdAt: any;
}

const SubInfo = ({ nickname, createdAt }: subInfoProps) => {
  return (
    <div className="sub-info_block">
      <span>
        <b>
          <Link to={`/@${nickname}`}>{nickname}</Link>
        </b>
      </span>
      <span>{new Date(createdAt).toLocaleDateString()}</span>
    </div>
  );
};

export default SubInfo;
