import React from 'react'

class ListTitle extends React.Component {
  state = {
    title: this.props.title
  };

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