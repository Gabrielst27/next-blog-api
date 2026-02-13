export type PagedOutput<Output = any> = {
  items: Output[];
  total: number;
  currentPage: number;
  perPage: number;
  lastPage: number;
};

export class PagedOutputMapper {
  static toOutput<Output>(result, items: Output[]): PagedOutput {
    return {
      items,
      total: result.total,
      currentPage: result.currentPage,
      perPage: result.perPage,
      lastPage: result.lastPage,
    };
  }
}
