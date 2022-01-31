import { useSort } from "../../hooks";
import { SortOption } from "../../hooks/types";
import { SortControlProps } from "./types";

export function SortControl<T>(props: SortControlProps<T>) {
  const { sortOptions } = props;

  // Pass props to the custom sort hook to get sort functionality.
  const { handleDirectionToggle, handleSortKeyChange, sortDirection, sortKey } =
    useSort(props);

  function renderSortOptions({ label, value }: SortOption<T>, index: number) {
    const optionTitle = `Sort by ${label} (${value})`;
    return (
      <option
        key={index}
        label={`${label}`}
        title={optionTitle}
        value={value.toString()}
      />
    );
  }

  function renderSortOptionSelect() {
    return sortOptions?.length ? (
      <>
        <div className="flex flex-row items-center ">
          <select
            id="sort-by"
            name="sort-by"
            onChange={handleSortKeyChange}
            className="mt-1 block w-full pl-3 pr-10 py-1.5 text-xs text-gray-600 border-gray-300 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-xs rounded-md"
          >
            {sortOptions.map(renderSortOptions)}
          </select>
        </div>
      </>
    ) : (
      <span>(No sort options were found)</span>
    );
  }

  function renderSortDirectionIcon() {
    const directionIcon =
      sortDirection === "asc" ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
            />
          </svg>
        </>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
            />
          </svg>
        </>
      );
    const buttonTitle =
      sortDirection === "asc"
        ? `Sort by ${sortKey} in descending order`
        : `Sort by ${sortKey} in ascending order`;
    return (
      <button title={buttonTitle} onClick={handleDirectionToggle}>
        {directionIcon}
      </button>
    );
  }

  return (
    <>
      <div className="flex flex-row m-4 space-x-3">
        <div className="flex flex-col items-start">
          <label className="text-xs font-light text-gray-500">Sort by</label>
          {renderSortOptionSelect()}
        </div>
        {sortKey !== "" ? (
          <>
            <div className="flex flex-col items-start space-y-2">
              <label className="text-xs font-light text-gray-500">Order</label>
              {renderSortDirectionIcon()}
            </div>
          </>
        ) : null}
      </div>
      {/* <span> Order by</span>
       */}
    </>
  );
}
