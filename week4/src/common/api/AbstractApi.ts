import { AnyStyledComponent } from 'styled-components';

type PossibleQueryType = number | string;

interface QueryType {
  [key: string]: PossibleQueryType;
}

export interface metaType {
  is_end?: boolean;
  pageable_count?: number;
  same_name?: {
    keyword?: string;
    region?: string[];
    selected_region?: string;
  };
  total_count: number;
}
export interface CommonResponse {
  status?: number;
}

export abstract class AbstractApi {
  protected constructor() {}

  protected static buildQuery(obj: QueryType): string {
    return Object.entries(obj)
      .reduce((query, [key, value]) => {
        return `${query + encodeURI(key)}=${encodeURI(String(value))}&`;
      }, '?')
      .slice(0, -1);
  }

  protected static buildPath(...args: string[]): string {
    return args.reduce((path, arg) => {
      return `${path}/${arg}`;
    }, '');
  }
}
