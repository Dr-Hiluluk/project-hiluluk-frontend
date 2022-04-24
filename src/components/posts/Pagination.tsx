import qs, { ParsedQs } from "qs";
import React from "react";
import { Button } from "../common/Button/Button";
import "./Pagination.scss";

interface paginationProps {
  page: string | number | string[] | ParsedQs | ParsedQs[];
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
    <div className="pagination_block">
      <Button
        disabled={page == 1}
        cyan="cyan"
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
        disabled={page == lastPage}
        cyan="cyan"
        to={
          page === lastPage
            ? undefined
            : buildLink({ nickname, tag, page: Number(page) + 1 })
        }
      >
        다음
      </Button>
    </div>
  );
};

export default Pagination;
