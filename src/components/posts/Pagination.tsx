import qs from "qs";
import React from "react";
import { Button } from "../common/Button/Button";
import "./Pagination.scss";

interface paginationProps {
  page: number;
  lastPage?: number;
  nickname: string | undefined;
  tag: any;
}

const buildLink = ({ nickname, tag, page }: paginationProps) => {
  const query = qs.stringify({ tag, page });
  return nickname ? `/@${nickname}?${query}` : `/?${query}`;
};

const Pagination = ({ page, lastPage, nickname, tag }: paginationProps) => {
  return (
    <div className="pagination_area">
      <div className="pagination_block">
        <Button
          disabled={page === 1}
          teal
          to={
            page === 1
              ? undefined
              : buildLink({ nickname, tag, page: Number(page) - 1 })
          }
        >
          이전
        </Button>
        <div className="pagination_page-number">{page}</div>
        <Button
          disabled={page === lastPage}
          teal
          to={
            page === lastPage
              ? undefined
              : buildLink({ nickname, tag, page: Number(page) + 1 })
          }
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
