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
      {/* <Link to="/"> */}
      {/* </Link> */}
      <div className="div icon-total">
        <div className="div icon-area">
          <div className="div wrapper">
            <div className="div content">
              <IoIosSearch className="icon color" />
            </div>
          </div>
        </div>
        <div className="div icon-area">
          <div className="div wrapper">
            <div className="div content">
              <img
                className="img icon"
                src={search_icon}
                alt="search-icon"
                //height={user_height}
              />
            </div>
          </div>
        </div>
        <div className="div icon-area">
          <div className="div wrapper">
            <div className="div content">
              <img
                className="img icon"
                src={sample_logo_heart}
                alt="heart-icon"
                //height={user_height}
              />
            </div>
          </div>
        </div>
        <div className="div icon-area">
          <div className="div wrapper">
            <div className="div content">
              <img
                className="img icon"
                src={LogoDrHiluluk}
                alt="home-icon"
                //height={user_height}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="div color">Home1</div>
      <div className="div color">Home2</div>
    </div>
  );
};

export default PostListPage;
