import React from 'react'
import Board from '../components/Board/Board'

class App extends React.Component {
  render() {
    return (
      <div className={"app"}>
        <Board
          boardId="1"
        />
      </div>
    );
  }
}

export default App
