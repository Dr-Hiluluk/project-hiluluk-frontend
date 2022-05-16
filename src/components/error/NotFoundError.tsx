import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import useNotFound from "../../lib/hooks/useNotFound";
import { undrawPageNotFound } from "../../static/svg";
import ErrorScreenTemplate from "./ErrorScreenTemplate";
import { usePrevious } from "react-use";

export const NotFoundError = () => {
  const navigation = useNavigate();
  const { reset } = useNotFound();
  const location = useLocation();

  const prevPathname = usePrevious(location.pathname);

  useEffect(() => {
    if (prevPathname && prevPathname !== location.pathname) {
      reset();
    }
  }, [location.pathname, prevPathname, reset]);

  return (
    <>
      <Helmet>
        <title>404 - Dr.hiluluk</title>
        // meta 추가 하기
      </Helmet>
      <ErrorScreenTemplate
        image={undrawPageNotFound}
        message="텅! 비었습니다."
        buttonText="홈으로"
        onButtonClick={() => {
          navigation("/");
          reset();
        }}
      />
    </>
  );
};
