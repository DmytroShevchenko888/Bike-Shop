import React from "react";

import { getImageUrl } from "../../helpers/getImageUrl";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hook";
import { fetchAllBicycles } from "../../redux/thunks";

interface PaginationProps {
  countPerPage: number;
  totalBicycles: number;
  page: number;
  setPage: any;
}

const Pagination: React.FC<PaginationProps> = ({
  countPerPage,
  totalBicycles,
  page,
  setPage,
}) => {
  const totalPages = Math.ceil(totalBicycles / countPerPage);

  const dispatch = useAppDispatch();

  const showCurrentPage = async (page: number) => {
    await dispatch(fetchAllBicycles({}));
    setPage(page);
  };

  const handlePreviousPage = () => {
    setPage((page: number) => {
      if (page === 1) return page;
      return page - 1;
    });
  };
  const handleNextPage = () => {
    setPage((page: number) => {
      if (page === totalPages) return page;
      return page + 1;
    });
  };

  return (
    <footer className="pagination">
      <button disabled={totalPages === 1}>
        <img
          src={getImageUrl("home", "pagination-left.svg")}
          alt="left"
          onClick={handlePreviousPage}
        />
      </button>
      <ul>
        {/* fill array from 1 page to totalPages */}
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (item) => (
            <li className={page === item ? "active" : ""} key={item}>
              <Link to="" onClick={() => showCurrentPage(item)}>
                {item}
              </Link>
            </li>
          )
        )}
      </ul>
      <button>
        <img
          src={getImageUrl("home", "pagination-right.svg")}
          alt="right"
          onClick={handleNextPage}
        />
      </button>
    </footer>
  );
};

export default Pagination;
