import axios from 'axios'

export const GET_BOARD_REQUEST = 'GET_BOARD_REQUEST';
export const GET_BOARD_SUCCESS = 'GET_BOARD_SUCCESS';
export const GET_BOARD_FAIL = 'GET_BOARD_FAIL';

export function getBoard(boardId) {
  return dispatch => {
    dispatch({
      type: GET_BOARD_REQUEST,
      payload: boardId,
    });

    axios.get('http://localhost:3001/api/v1/boards/1')
      .then(response => console.log(response))
  }
}
