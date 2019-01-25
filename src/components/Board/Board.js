import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { getBoard } from '../../actions/BoardActions'

class Board extends React.Component {
  componentDidMount() {
    this.props.getBoard(this.props.boardId)
  }

  renderBoard = () => {
    const { name, isFetching, error } = this.props;

    if (error) {
      return (
        <div>{ error }</div>
      )
    }

    if (isFetching) {
      return (
        <div>Loading</div>
      )
    }
    else {
      return (
        <div className="board">
          <BoardTitle />
          <BoardLists />
        </div>
      )
    }
  };

  render() {
    return this.renderBoard()
  }
}

const mapStateToProps = store => {
  return {
    name: store.board.name,
    lists: store.board.lists,
    isFetching: store.board.isFetching,
    error: store.board.error,
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getBoard,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Board);
