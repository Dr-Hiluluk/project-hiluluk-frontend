import qs from "qs";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../common/Button/Button";
import "./Pagination.scss";

interface paginationProps {
  page: number;
  lastPage?: number;
  nickname?: string;
  tag: any;
  word?: any;
}

const buildLink = ({ nickname, tag, page, word }: paginationProps) => {
  const query = qs.stringify({ tag, word, page });
  return word
    ? `/search?${query}`
    : nickname
    ? `/@${nickname}?${query}`
    : `/?${query}`;
};

const Pagination = ({
  page,
  lastPage,
  nickname,
  tag,
  word,
}: paginationProps) => {
  const pageArr = [page - 2, page - 1, page, page + 1, page + 2];

  return (
    <div className="pagination_area">
      <div className="pagination_block">
        <Button
          disabled={page === 1}
          teal
          to={
            page === 1
              ? undefined
              : buildLink({ nickname, tag, page: Number(page) - 1, word })
          }
        >
          이전
        </Button>
        {pageArr.map(
          (pageItem) =>
            pageItem > 0 &&
            pageItem <= lastPage! && (
              <Link
                key={pageItem}
                className={`pagination_page-number ${
                  pageItem === page && "active"
                }`}
                to={buildLink({ nickname, tag, page: Number(pageItem), word })}
              >
                {pageItem}
              </Link>
            ),
        )}
        <Button
          disabled={page === lastPage}
          teal
          to={buildLink({ nickname, tag, page: Number(page) + 1, word })}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
