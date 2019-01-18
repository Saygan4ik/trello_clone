import {
  GET_BOARD_REQUEST,
  GET_BOARD_SUCCESS,
  GET_BOARD_FAIL
} from "../actions/BoardActions";

const initialState = {
  board_id: '',
  name: '',
  lists: [],
  isFetching: false,
  error: '',
};

export function boardReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOARD_REQUEST:
      return { ...state, board_id: action.payload, isFetching: true, error: '' };
    case GET_BOARD_SUCCESS:
      return { ...state, board: action.payload, isFetching: false, error: '' };
    case GET_BOARD_FAIL:
      return { ...state, error: action.payload.message, isFetching: false };
    default:
      return state
  }
}
