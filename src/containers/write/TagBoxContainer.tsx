import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReducerType } from "../../modules";
import { changeField } from "../../modules/write";

import TagBox from "../../components/common/TagBox/TagBox";

const TagBoxContainer = () => {
  const dispatch = useDispatch();
  const { tags } = useSelector(({ write }: ReducerType) => ({
    tags: write.tags,
  }));
  const onChangeTags = (nextTags: string[]) => {
    dispatch(changeField({ key: "tags", value: nextTags }));
  };
  return <TagBox tags={tags} onChangeTags={onChangeTags} />;
};

export default TagBoxContainer;
