import React from "react";
import { defaultThumbnail, editIcon } from "../../static/svg";
import { Button } from "../common/Button/Button";
import { RatioImage } from "../common/RatioImage";
import "./SettingUser.scss";

export interface SettingUserProps {
  user: {
    id: number;
    name: string;
    nickname: string;
    thumbnail?: string;
    description?: string;
  } | null;
  onChangeThumbnail: (e: any) => any;
  uploadLoading: boolean;
  image: string | null;
  descEdit: boolean;
  content?: string;
  onChangeEdit: any;
  onChangeContent: any;
  onConfirm: any;
  onCancle: () => any;
  onDeleteUser: () => any;
}

const SettingUser: React.FC<SettingUserProps> = ({
  user,
  onChangeThumbnail,
  uploadLoading,
  image,
  descEdit,
  content,
  onChangeEdit,
  onChangeContent,
  onConfirm,
  onCancle,
  onDeleteUser,
}) => {
  return (
    <div className="setting-user_block">
      <div className="setting-user_profile">
        <div className="setting-user_info">
          <span className="nickname">{user?.nickname}</span>
          <div className="description_wrapper">
            {descEdit ? (
              <textarea value={content} onChange={onChangeContent} />
            ) : (
              <div className="icon_wrapper">
                <span className="description">{user?.description}</span>
                <img
                  alt="description edit"
                  src={editIcon}
                  onClick={onChangeEdit}
                />
              </div>
            )}
            {descEdit && (
              <div className="confirm-dismiss_wrapper">
                <span className="confirm" onClick={onConfirm}>
                  저장
                </span>
                <span className="dismiss" onClick={onCancle}>
                  취소
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="thumbnail_wrapper" onClick={onChangeThumbnail}>
          {uploadLoading && image ? (
            <RatioImage
              alt="userThumbnail"
              src={image}
              widthRatio={1}
              heightRatio={1}
            />
          ) : (
            <RatioImage
              alt="userThumbnail"
              src={user?.thumbnail || defaultThumbnail}
              widthRatio={1}
              heightRatio={1}
            />
          )}
        </div>
      </div>
      <div className="setting-user_setting">
        <div className="setting_wrapper">
          <span className="setting_nav">비빌번호 변경</span>
          <Button teal>비빌번호 변경</Button>
        </div>
        <div className="setting_wrapper">
          <span className="setting_nav">회원탈퇴</span>
          <Button red onClick={onDeleteUser}>
            회원탈퇴
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingUser;
