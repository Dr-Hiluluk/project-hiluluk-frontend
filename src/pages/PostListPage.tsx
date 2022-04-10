import React from "react";
import { Link } from "react-router-dom";
import "../components/common/common.scss";
import LogoDrHiluluk from "../static/svg/LogoDrHiluluk.svg";
import sample_logo_heart from "../static/svg/sample_logo_heart.svg";
import search_icon from "../static/svg/search_icon.svg";
import { IoIosSearch } from "react-icons/io";

const PostListPage = () => {
  return (
    <div>
      <Link to="/login">
        <div className="div icon-area">
          <div className="div icon-centering">
            <IoIosSearch className="img icon-coloring" />
          </div>
          <div className="div icon-centering">
            <img
              className="img icon-coloring"
              src={search_icon}
              alt="search-icon"
            />
          </div>
          <div className="div icon-centering">
            <img
              className="img icon-coloring"
              src={sample_logo_heart}
              alt="heart-icon"
            />
          </div>
          <div className="div icon-centering">
            <img
              className="img icon-coloring"
              src={LogoDrHiluluk}
              alt="logo-icon"
            />
          </div>
        </div>
      </Link>
      <div className="div color">Home1</div>
      <div className="div color">Home2</div>
    </div>
  );
};

export default PostListPage;
