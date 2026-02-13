import { Query } from 'src/shared/domain/repositories/search-params';

type ResultProps<E = any> = {
  items: E[];
  currentPage: number;
  perPage: number;
  total: number;
  sort: string | null;
  sortDir: string | null;
  queries?: Query[];
};

export class SearchResult<E> {
  private readonly _items: E[];
  private readonly _total: number;
  private readonly _lastPage: number;
  private readonly _currentPage: number;
  private readonly _perPage: number;
  private readonly _sort: string | null;
  private readonly _sortDir: string | null;
  private readonly _queries?: Query[];

  constructor(props: ResultProps) {
    this._items = props.items;
    this._currentPage = props.currentPage;
    this._perPage = props.perPage;
    this._total = props.total;
    this._lastPage = Math.floor(this._total / this._perPage);
    this._sort = props.sort ?? null;
    this._sortDir = props.sortDir ?? null;
    this._queries = props.queries ?? [];
  }
}
