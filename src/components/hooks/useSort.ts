import * as React from "react";
import { compareObjectsByKey } from "../util";
import { SortDirection, ItemKey, SortOption } from "./types";

export interface SortProps<T> {
  data: T[];
  onSortChange(data: T[]): void;
  sortOptions: any[];
}

export function useSort<T>({ data, onSortChange, sortOptions }: SortProps<T>) {
  // Local state
  const [sortDirection, setSortDirection] =
    React.useState<SortDirection>("asc");
  const initialSortKey = sortOptions[0].value as ItemKey<T>;
  const [sortKey, setSortKey] = React.useState<ItemKey<T>>(initialSortKey);

  // Execute the sort and callback when local state
  // or supplied props have changed.
  React.useEffect(() => {
    // Create a copy before sorting, as the original array is frozen in strict mode.
    const sortedData = [...data];
    if (sortedData?.length) {
      sortedData.sort(compareObjectsByKey(sortKey, sortDirection === "asc"));

      if (onSortChange) {
        onSortChange(sortedData);
      }
    }
  }, [data, onSortChange, sortDirection, sortKey]);

  const handleSortKeyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortKey = event.target.value as ItemKey<T>;
    if (sortKey !== newSortKey) {
      setSortKey(newSortKey);
    }
  };

  const handleKeyChange = (selectedOption: SortOption<T> | null) => {
    const newSortKey = selectedOption?.value;
    if (newSortKey && sortKey !== newSortKey) {
      setSortKey(newSortKey);
    }
  };

  /**
   * Handle changes to the sort direction.
   */
  const handleDirectionToggle = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  return {
    handleDirectionToggle,
    handleKeyChange,
    handleSortKeyChange,
    sortDirection,
    sortKey,
  };
}
