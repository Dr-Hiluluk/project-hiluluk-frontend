import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBox from "../../components/common/SearchBox/SearchBox";
import useInput from "../../lib/hooks/useInput";

const SearchBoxContainer = () => {
  const [text, setText, onReset] = useInput("");
  const navigation = useNavigate();
  const onSubmit = (e: any) => {
    e.preventDefault();
    let encodedText = text;
    if (text[0] === "#") encodedText = "%23" + text.substring(1);
    if (text) {
      onReset();
      navigation(`/search?word=${encodedText}`);
    }
  };
  return <SearchBox onSubmit={onSubmit} onChangeText={setText} />;
};

export default SearchBoxContainer;
