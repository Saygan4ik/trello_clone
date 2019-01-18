import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import List from '../List/List'
import AddList from '../List/AddList'

class Board extends React.Component {
  state = {
    name: '',
    lists: [],
    isFetching: false
  };

  componentDidMount() {
    this.setState({ isFetching: true });

    fetch('http://localhost:3001/api/v1/boards/1')
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({ isFetching: false, name: data.board.name, lists: data.board.lists })
      })
  }

  // handleAddList = (listTitle) => {
  //   let id = Date.now();
  //   let newList = {
  //     id: id,
  //     title: listTitle,
  //     cards: []
  //   };
  //
  //   let newLists = this.state.lists;
  //   newLists.push(newList);
  //   this.setState({
  //     lists: newLists
  //   })
  // };

  // render() {
  //   const { lists, isLoading } = this.state;
  //   return (
  //     <div className={"board"}>
  //       { isLoading && <div>Loading</div> }
  //       { lists.map(list => <List key={list.id} data={list}/>) }
  //       <AddList onListAdd={this.handleAddList} />
  //     </div>
  //   )
  // }

  render() {
    console.log(this.state);
    const { name, lists } = this.state;
    let boardTemplate;
    if (this.state.isFetching) {
      boardTemplate = <div>Loading</div>
    }
    else {
      boardTemplate = <div>{name}</div>
    }


    return (
      boardTemplate
    )
  }
}

const mapStateToProps = store => {
  return {
    name: store.board.name,
    lists: store.board.lists,
  }
};

export default connect(mapStateToProps)(Board);
