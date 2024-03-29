import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UserProfile from "../../components/user/UserProfile";
import { useCFUpload } from "../../lib/hooks/useCFUpload";
import useUpload from "../../lib/hooks/useUpload";
import useUser, { useUserId } from "../../lib/hooks/useUser";
import { ReducerType } from "../../modules";
import { readPostList } from "../../modules/postList";
import { getUserProfile, updateUserProfile } from "../../modules/user";

const UserProfileContainer = () => {
  const { userProfile, userProfileError, loading } = useSelector(
    ({ user, postList, loading }: ReducerType) => ({
      userProfile: user.userProfile,
      userProfileError: user.userProfileError,
      loading: loading["postList/READ_POST_LIST_BY_USER"],
      postList: postList.postList,
      postListError: postList.postListError,
    }),
  );
  const [categoryId, setCategoryId] = useState(null);
  const [categoryPostList, setCategoryPostList] = useState(userProfile?.posts);
  const dispatch = useDispatch();
  const { nickname } = useParams();
  const userId = useUserId();
  const [upload] = useUpload();
  const [CFUpload] = useCFUpload();
  const [imageBlobUrl, setImageBlobUrl] = React.useState<string | null>(null);
  const [uploadLoading, setUploadLoading] = useState(false);
  const user = useUser();
  const isMine = nickname === user?.nickname;

  const onChangeThumbnail = useCallback(async () => {
    if (userId !== userProfile?.id) return;
    const file = await upload();
    if (!file || !userId) return;
    setUploadLoading(true);
    setImageBlobUrl(URL.createObjectURL(file));
    const image = await CFUpload(file, { type: "profile", refId: userId });
    setUploadLoading(false);
    if (!image) return;
    dispatch(updateUserProfile({ userId, thumbnail: image }));
  }, [CFUpload, dispatch, upload, userId, userProfile?.id]);

  useEffect(() => {
    if (nickname) {
      dispatch(getUserProfile(nickname));
    }
  }, [dispatch, nickname]);

  useEffect(() => {
    if (userProfile) {
      dispatch(readPostList({ nickname: nickname, page: 1, tag: "" }));
      setCategoryPostList(userProfile.posts);
    }
  }, [dispatch, nickname, userProfile]);

  useEffect(() => {
    if (isMine && categoryId === -1) {
      const tempPostList = userProfile?.posts.filter(
        (post: any) => post.is_temp === true,
      );
      setCategoryPostList(tempPostList);
    } else if (categoryId !== null) {
      const postListByCategory = userProfile?.posts.filter(
        (post: any) => post.categoryId === categoryId && post.is_temp !== true,
      );
      setCategoryPostList(postListByCategory);
    } else {
      const postList = userProfile?.posts.filter(
        (post: any) => post.is_temp !== true,
      );
      setCategoryPostList(postList);
    }
  }, [categoryId, userProfile, isMine]);

  // 나중에 skeleton UI 형태로 보이기
  if (!userProfile || userProfileError) return null;

  return (
    <UserProfile
      categoryId={categoryId}
      user={userProfile}
      loading={loading}
      postList={categoryPostList}
      postListError={userProfileError}
      onChangeCategory={setCategoryId}
      onChangeThumbnail={onChangeThumbnail}
    />
  );
};

export default UserProfileContainer;
