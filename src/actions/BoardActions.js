import axios from 'axios'

export const GET_BOARD_REQUEST = 'GET_BOARD_REQUEST';
export const GET_BOARD_SUCCESS = 'GET_BOARD_SUCCESS';
export const GET_BOARD_FAIL = 'GET_BOARD_FAIL';

export const getBoard = (boardId) => dispatch => {
  dispatch({
    type: GET_BOARD_REQUEST,
  });

  axios.get(`http://localhost:3001/api/v1/boards/${boardId}`)
    .then(response => {
      dispatch({
        type: GET_BOARD_SUCCESS,
        payload: response.data.board,
      })
    })
    .catch(error => {
        dispatch({
          type: GET_BOARD_FAIL,
          payload: error.response.data,
        })
      }
    )
};
