import React, { Component } from 'react';
import './App.css';

import Content from './Content/Content.smart'
import ModalProvider from './ModalProvider/ModalProvider.smart'


class App extends Component {
  // FIXME: this goes to ModalWrapper -> ModalWrapper replaces ModalProvider here ModalProvider goes to ModalWrapper
  state={
    modalComponent: null,
    isOpen: false,
    setModal: (component) => {
      this.setState({ modalComponent: component })
    },
    toggleOpen: () => {
      this.setState({ isOpen: !this.state.isOpen })
    }
  }

  render() {
    return (
      <div className="App">
        <ModalProvider modals={this.state}>
          <Content />
        </ModalProvider>
      </div>
    );
  }
}

export default App;
