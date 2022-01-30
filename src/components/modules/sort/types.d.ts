export interface SortControlProps<T> {
  data: T[];
  onSortChange(data: T[]): void;
  sortOptions: any[];
}
