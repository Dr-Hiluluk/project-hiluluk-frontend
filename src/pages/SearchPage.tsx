import React from "react";
import { HeaderContainer } from "../containers/common/HeaderContainer";
import SearchPaginationContainer from "../containers/search/SearchPaginationContainer";
import SearchPostListContainer from "../containers/search/SearchPostListContainer";

const SearchPage = () => {
  return (
    <>
      <HeaderContainer />
      <SearchPostListContainer />
      <SearchPaginationContainer />
    </>
  );
};

export default SearchPage;
