import React from 'react';
import {connect} from 'react-redux';
import {addChoice} from '../actions/addChoice';

class ChoicesForm extends React.Component {

  state = {
    name:'Fade',
    description:''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addChoice(this.state, this.props.account.id)
    this.setState({
      name:'Fade',
      description:''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
            <select name="name" value={this.state.name} onChange={this.handleChange}>
              <option>Fade</option>
              <option>Afro</option>
              <option>Buzz Cut</option>
              <option>Dreadlocks</option>
              <option>Twists</option>
              <option>Corn Rows</option>
              <option>Baldie</option>
              <option>Flat-top</option>
              <option>Mohawk</option>
              <option>Caesar</option>
            </select>
            <label>Description:</label>
            <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
            <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default connect(null, {addChoice})(ChoicesForm)
