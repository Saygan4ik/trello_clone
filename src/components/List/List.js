import React from 'react'
import Card from '../Card/Card'
import ListTitle from './ListTitle'

class List extends React.Component {
  handleTitleChange = (newTitle) => {
    if (this.props.title !== newTitle) {
      // request to server - change title

      return console.log("request to server - change title");
    }
    console.log("title not changed");
  };

  render() {
    console.log("render List");
    const { title, cards } = this.props;

    return (
      <div className={"list"}>
        <ListTitle title={title} onTitleChange={this.handleTitleChange} />
        <div className={"list-cards"}>{ cards.map(card => <Card key={card.id} data={card} />) }</div>
      </div>
    );
  }
}

export default List;
