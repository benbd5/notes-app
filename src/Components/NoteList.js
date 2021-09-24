import React from 'react';
import Note from './Note';
import './Note.css'

class NoteList extends React.Component{
  render() {
    if(!this.props.notes || this.props.notes.length < 1){
      return(
        <p>Aucune note</p>
      )
    }
    return(
      <div className='test'>
        {this.props.notes.map((notes)=>{
          return <Note key={notes._id} notes={notes}/>
        })}
      </div>
    )
  }
}

export default NoteList;