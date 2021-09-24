import React from 'react';
import './FAB.css'

class FAB extends React.Component {
 
  render() {
    return(
      <div className='fab-container' onClick={() => this.props.openModal()}>
        +
      </div>
    )
  }
}

export default FAB;
