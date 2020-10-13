export const STARTER_FETCH_LIST = 'STARTER_FETCH_LIST';
export const STARTER_FETCH_LIST_SUCCESS = 'STARTER_FETCH_LIST_SUCCESS';
export const STARTER_FETCH_LIST_FAILED = 'STARTER_FETCH_LIST_FAILED';

export function StarterFetchList(data, headers) {
  return {
    type: STARTER_FETCH_LIST,
    data,
    headers
  };
}
