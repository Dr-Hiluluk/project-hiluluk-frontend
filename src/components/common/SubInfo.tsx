import React from "react";
import { Link } from "react-router-dom";
import "./common.scss";

interface subInfoProps {
  nickname: string;
  createdAt: any;
  marginTop?: string;
}

const SubInfo = ({ nickname, createdAt, marginTop = "" }: subInfoProps) => {
  return (
    <div className={`sub-info_block ${marginTop}`}>
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
