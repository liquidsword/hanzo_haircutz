import React from 'react';
import {connect} from 'react-redux';
import {addAccount} from '../actions/addAccount';

class AccountForm extends React.Component {

  state = {name: '', choice: ''}

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addAccount(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input type='text' placeholder='Name' value={this.state.name} name="name" onChange ={this.handleChange}/><br/>
          <label>Choice: </label>
          <input type='text' placeholder='style choice' value={this.state.choice} name="choice" onChange ={this.handleChange}/><br/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default connect(null, {addAccount})(AccountForm)
