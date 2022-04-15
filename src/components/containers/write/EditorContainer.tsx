import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReducerType } from "../../../modules";
import { changeField, initialize } from "../../../modules/write";
import Editor from "../../write/Editor";

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { title, body } = useSelector(({ write }: ReducerType) => ({
    title: write.title,
    body: write.body,
  }));

  const onChangeField = useCallback(
    (paylaod) => dispatch(changeField(paylaod)),
    [dispatch],
  );

  // componentDidUnmount 시 초기화
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  return <Editor onChangeField={onChangeField} title={title} body={body} />;
};

export default EditorContainer;
