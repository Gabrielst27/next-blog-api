import { EOperators } from 'src/shared/domain/enums/db-operators.enum';

type QueryProps = {
  field: string;
  value: string;
  operator: EOperators;
};

export class Query {
  constructor(public readonly props: QueryProps) {}
}

export type SearchProps = {
  queries: QueryProps[];
  page: number;
  perPage: number;
  sort: string;
  sortDir: 'asc' | 'desc';
};

export class SearchParams {
  private readonly _queries: Query[];
  private readonly _page: number;
  private readonly _perPage: number;
  private readonly _sort: string;
  private readonly _sortDir: 'asc' | 'desc';

  constructor(searchProps: SearchProps) {
    const queries: Query[] = [];
    for (const queryProps of searchProps.queries) {
      const query = new Query(queryProps);
      queries.push(query);
    }
    this._queries = queries;
    this._page = searchProps.page || 0;
    this._perPage = searchProps.perPage || 15;
    this._sort = searchProps.sort || 'createdAt';
    this._sortDir = searchProps.sortDir || 'desc';
  }
}
