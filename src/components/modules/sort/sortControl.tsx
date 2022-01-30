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
        <div className="flex flex-row items-center w-1/6">
          <select
            id="sort-by"
            name="sort-by"
            onChange={handleSortKeyChange}
            className="mt-1 block w-full pl-3 pr-10 py-1.5 text-xs border-gray-300 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-xs rounded-md"
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
    const directionIcon = sortDirection === "asc" ? "v" : "^";
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
      {renderSortOptionSelect()}
      <span> Order by</span>
      {renderSortDirectionIcon()}
    </>
  );
}
