import React from 'react';
import ChoicesForm from '../components/ChoicesForm';
import ChoicesList from '../components/ChoicesList';

class ChoicesContainer extends React.Component {
  render() {
    return (
      <div>
        <ChoicesForm account={this.props.account}/>
        <ChoicesList choices={this.props.account && this.props.account.choices}/>
      </div>
    )
  }
}

export default ChoicesContainer
