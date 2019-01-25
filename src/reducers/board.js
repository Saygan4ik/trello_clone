import {
  GET_BOARD_REQUEST,
  GET_BOARD_SUCCESS,
  GET_BOARD_FAIL
} from "../actions/BoardActions";

const initialState = {
  id: '',
  name: '',
  lists: [],
  isFetching: false,
  error: '',
};

export function boardReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOARD_REQUEST:
      return { ...state, isFetching: true };
    case GET_BOARD_SUCCESS:
      return { ...state, ...action.payload, isFetching: false, error: '' };
    case GET_BOARD_FAIL:
      return { ...state, error: action.payload.message, isFetching: false };
    default:
      return state
  }
}
