import React from 'react'

class Card extends React.Component {
  state = {
    title: this.props.data.title,
    text: this.props.data.text,
    comments: ""
  };

  render() {
    const { title, text } = this.state;
    return (
      <div className={"card"}>
        <div className={"card-title"}>{title}</div>
        <div className={"card-text"}>{text}</div>
      </div>
    );
  }
}

export default Card;
