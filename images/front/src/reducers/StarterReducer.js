import {
  STARTER_FETCH_LIST,
  STARTER_FETCH_LIST_SUCCESS,
  STARTER_FETCH_LIST_FAILED
} from './../actions/StarterActions';

const initialState = {
  list: [],
  detail: {},
  created: {},
  loading: false
};

export function StarterReducer(state = initialState, action) {
  switch (action.type) {
    case STARTER_FETCH_LIST:
      return {
        ...state,
        loading: true
      };
    case STARTER_FETCH_LIST_SUCCESS:
      return {
        ...state,
        list: action.data,
        loading: false
      };
    case STARTER_FETCH_LIST_FAILED:
      return {
        ...state,
        list: [],
        loading: false
      };

    default:
      return state;
  }
}
