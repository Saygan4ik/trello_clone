import React from 'react'

class BoardTitle extends React.Component {
  handleTitleChange = (e) => {
    this.setState({
      title: e.currentTarget.value
    })
  };

  handleTitleBlur = (e) => {
    this.props.onTitleChange(e.currentTarget.value)
  };

  render () {
    console.log("render ListTitle");
    const { title } = this.state;

    return (
      <textarea className={"list-title"} value={title} onChange={this.handleTitleChange} onBlur={this.handleTitleBlur} />
    )
  }
}

export default ListTitle;