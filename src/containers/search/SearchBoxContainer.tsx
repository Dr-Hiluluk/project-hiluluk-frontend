import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBox from "../../components/common/SearchBox/SearchBox";
import useInput from "../../lib/hooks/useInput";

const SearchBoxContainer = () => {
  const [text, setText, onReset] = useInput("");
  const navigation = useNavigate();
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (text) {
      onReset();
      navigation(`/search?word=${text}`);
    }
  };
  return <SearchBox onSubmit={onSubmit} onChangeText={setText} />;
};

export default SearchBoxContainer;
