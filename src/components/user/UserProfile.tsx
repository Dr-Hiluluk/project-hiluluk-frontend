import React, { memo } from "react";
import MemoCalendarContainer from "../../containers/memo/MemoCalendarContainer";
import { defaultThumbnail } from "../../static/svg";
import { RatioImage } from "../common/RatioImage";
import PostList from "../posts/PostList";
import "./UserProfile.scss";

interface UserProfileProps {
  user: any;
  postList: any;
  postListError: any;
  loading: any;
  onChangeThumbnail: () => any;
}

const UserProfile: React.FC<UserProfileProps> = ({
  user,
  postList,
  postListError,
  loading,
  onChangeThumbnail,
}) => {
  const array = [
    "전신",
    "머리",
    "얼굴",
    "목",
    "가슴/등",
    "복부",
    "비뇨기",
    "팔과 손",
    "다리와 발",
    "뼈/근육",
    "피부",
  ];

  return (
    <div className="user-profile_block">
      <div className="user-profile_left">
        <div className="user-profile_user-info">
          <div className="thumbnail_wrapper" onClick={onChangeThumbnail}>
            <RatioImage
              alt="userThumbnail"
              src={user?.thumbnail || defaultThumbnail}
              widthRatio={1}
              heightRatio={1}
            />
          </div>
          <span className="nickname">{user?.nickname}</span>
          <span className="description">{user?.description}</span>
        </div>
        <div className="user-profile_category">
          <span>카테고리</span>
          <ul>
            {array.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="user-profile_right">
        <div className="user-profile_right-top">
          <MemoCalendarContainer />
        </div>
        <div className="user-profile_right-bottom">
          <div className="user-profile_post">
            <PostList
              postList={postList}
              postListError={postListError}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(UserProfile);
