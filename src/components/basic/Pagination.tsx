import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

type Prop = {
  currentPage: number;
  totalPages: number;
  onPageChange: any;
};
const Pagination = ({ currentPage, totalPages, onPageChange }: Prop) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const visiblePageCount = 3; // Number of visible page numbers before and after the current page

    // Determine the range of page numbers to display
    let startPage = Math.max(1, currentPage - visiblePageCount);
    let endPage = Math.min(totalPages, currentPage + visiblePageCount);

    if (startPage > 1) {
      pageNumbers.push(
        <span
          key={1}
          onClick={() => onPageChange(1)}
          className="p-0.5 md:p-2 text-sm md:text-base cursor-pointer"
        >
          1
        </span>
      );
      if (startPage > 2) {
        pageNumbers.push(
          <span className="p-0.5 md:p-2 text-sm md:text-base" key="ellipsis1">
            ...
          </span>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      const isActive = i === currentPage;
      pageNumbers.push(
        <span
          key={i}
          onClick={() => onPageChange(i)}
          className={`cursor-pointer text-sm md:text-base ${
            isActive
              ? " bg-moon-light py-2 md:py-3 px-1.5 mx-0.5 md:px-2 text-night font-bold"
              : " p-0.5 px-1 md:p-2"
          }`}
        >
          {i}
        </span>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(
          <span className="p-0.5 md:p-2 text-sm md:text-base" key="ellipsis2">
            ...
          </span>
        );
      }
      pageNumbers.push(
        <span
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className="md:p-2 p-0.5 text-sm md:text-base cursor-pointer"
        >
          {totalPages}
        </span>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center m-1 md:m-5 bg-gray-800 text-white px-2 md:px-5 py-1 md:py-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="mr-2 flex items-center p-2 hover:bg-light-primary hover:text-dark bg-gray-500 disabled:opacity-50"
      >
        <BsChevronLeft className="h-4 w-4" />
      </button>

      {renderPageNumbers()}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="ml-2 flex items-center p-2 hover:bg-light-primary hover:text-dark bg-gray-500 disabled:opacity-50"
      >
        <BsChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Pagination;
