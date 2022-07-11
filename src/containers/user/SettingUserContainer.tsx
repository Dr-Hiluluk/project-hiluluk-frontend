import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AskModal from "../../components/common/AskModal/AskModal";
import SettingUser from "../../components/user/SettingUser";
import UserApi from "../../lib/api/user";
import useBooleanToggle from "../../lib/hooks/useBooleanToggle";
import { useCFUpload } from "../../lib/hooks/useCFUpload";
import useInput from "../../lib/hooks/useInput";
import useUpload from "../../lib/hooks/useUpload";
import { useUserId } from "../../lib/hooks/useUser";
import { ReducerType } from "../../modules";
import { updateUserProfile, check } from "../../modules/user";

const SettingUserContainer = () => {
  const { user, userError } = useSelector(({ user }: ReducerType) => ({
    user: user.user,
    userError: user.userError,
  }));
  const [uploadLoading, setUploadLoading] = useState(false);
  const [imageBlobUrl, setImageBlobUrl] = useState<string | null>(null);
  const [modal, setModal] = useBooleanToggle(false);
  const [content, setContent, onReset] = useInput(user?.description || "");
  const [descEdit, setDescEdit] = useBooleanToggle(false);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const userId = useUserId();
  const [upload] = useUpload();
  const [CFUpload] = useCFUpload();

  const onChangeThumbnail = async () => {
    if (userId !== user?.id) return;
    const file = await upload();
    if (!file || !userId) return;
    setImageBlobUrl(URL.createObjectURL(file));
    setUploadLoading(true);
    const image = await CFUpload(file, { type: "profile", refId: userId });
    setUploadLoading(false);
    if (!image) return;
    dispatch(updateUserProfile({ userId, thumbnail: image }));
  };

  const onConfirm = () => {
    if (userId !== user?.id) return;
    dispatch(updateUserProfile({ userId, description: content }));
    setDescEdit();
  };

  const onCancle = () => {
    onReset(user?.description || "");
    setDescEdit();
  };

  const onCancelModal = () => {
    setModal();
  };

  const onDeleteUser = async () => {
    if (userId) {
      await UserApi.deleteUser({ userId: userId });
      sessionStorage.removeItem("user");
      dispatch(check());
      navigation("/");
    }
  };

  useEffect(() => {
    if (user) {
      onReset(user.description);
    }
    if (userError) {
      console.error(userError);
    }
  }, [onReset, user, userError]);

  return (
    <>
      <SettingUser
        user={user}
        onChangeThumbnail={onChangeThumbnail}
        uploadLoading={uploadLoading}
        image={imageBlobUrl}
        descEdit={descEdit}
        content={content}
        onChangeEdit={setDescEdit}
        onChangeContent={setContent}
        onConfirm={onConfirm}
        onCancle={onCancle}
        onDeleteUser={setModal}
      />
      <AskModal
        visible={modal}
        title="회원 탈퇴"
        description={`탈퇴시 작성하신 콘텐츠는 모두 삭제되며  복구가 불가합니다.\n그래도 탈퇴 하시겠습니까?`}
        confirmText="탈퇴 하기"
        onConfirm={onDeleteUser}
        onCancel={onCancelModal}
        color="red"
      />
    </>
  );
};

export default SettingUserContainer;
