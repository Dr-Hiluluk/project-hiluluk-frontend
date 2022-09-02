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
  categoryId: number | null;
  onChangeCategory: any;
}

export const categoryIndex = [
  { value: 0, label: "전신" },
  { value: 1, label: "머리" },
  { value: 2, label: "정신" },
  { value: 3, label: "얼굴" },
  { value: 4, label: "목" },
  { value: 5, label: "가슴/등" },
  { value: 6, label: "복부" },
  { value: 7, label: "비뇨기" },
  { value: 8, label: "팔과 손" },
  { value: 9, label: "다리와 발" },
  { value: 10, label: "뼈/근육" },
  { value: 11, label: "피부" },
];

const UserProfile: React.FC<UserProfileProps> = ({
  user,
  postList,
  postListError,
  loading,
  categoryId,
  onChangeThumbnail,
  onChangeCategory,
}) => {
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
          <span onClick={() => onChangeCategory(null)}>카테고리</span>
          <ul>
            {categoryIndex.map((item) => (
              <li
                className={`${categoryId === item.value ? "active" : ""}`}
                key={item.value}
                onClick={() => {
                  onChangeCategory(item.value);
                }}
              >
                {item.label}
              </li>
            ))}
            <li
              className={`${categoryId === -1 ? "active" : ""}`}
              onClick={() => {
                onChangeCategory(-1);
              }}
            >
              임시 글
            </li>
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
