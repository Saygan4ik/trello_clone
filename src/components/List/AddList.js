import React from 'react'

class AddList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    }
  }

  handleTitleChange = (e) => {
    this.setState({
      title: e.currentTarget.value
    })
  };

  handleClick = (e) => {
    e.preventDefault();
    this.props.onListAdd(this.state.title)
  };
  
  render () {
    const { title } = this.state;

    return (
      <form className={'add-list-form'}>
        <input
          className={'add-list'}
          placeholder={'Add new list'}
          value={title}
          onChange={this.handleTitleChange}
        />
        <input
          type='submit'
          onClick={this.handleClick}
        />
      </form>
    ) 
  }
}

export default AddList;