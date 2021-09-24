import React from 'react';
import './Note.css';

let Draggable = require('react-draggable');

class Note extends React.Component{
  render(){
    if(!this.props.notes){
      return (
        <p>Pas de données</p>
      )
    }
    return (
      <Draggable>
        <div className='cardNote'>
          <h2 className='titleNote'>{this.props.notes.title}</h2>
          <p className='contentNote'>{this.props.notes.content}</p>
          <a className='favorite'><img  src={'./ressources/heart-thin.svg'} /></a>
        </div>
      </Draggable>
    )
  }
}

export default Note;