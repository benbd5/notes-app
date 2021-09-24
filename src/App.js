import React from 'react';
import './App.css';
import FAB from './Components/FAB';
import NoteList from './Components/NoteList';
import { getNotes } from './services/api'
import Modal from 'react-modal';
import NoteModal from './Components/NoteModal';

Modal.setAppElement('#root');

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      notes: [],
      isModalOpen: false
    }
  }

  openModal = () => {
    this.setState({isModalOpen: true})
  }

  closeModal = () => {
    this.setState({isModalOpen: false})
  }

  componentDidMount(){
    this.getData();
  }

  getData = async () => {
    const notes = await getNotes()
    this.setState({notes});
  }

    render(){
      return (
        <div className="App">
          <NoteModal isModalOpen={this.state.isModalOpen} closeModal={this.closeModal}/>
          <NoteList notes={this.state.notes}/>
          <FAB openModal={this.openModal}/>
      </div>
    );
  }
}

export default App;
