export interface SerialsParams {
  filter: string;
  filterYear: string;
  filterChannel: string;
  sortDirection: 'asc' | 'desc'| '';
  sortField: string;
  pageIndex: number;
  pageSize: number;
}
