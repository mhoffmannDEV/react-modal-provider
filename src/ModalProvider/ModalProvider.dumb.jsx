import React from 'react';


class ModalProvider extends React.Component {
  render() {
    const { modals: { modalComponent: ModalComponent, isOpen, toggleOpen } } = this.props;

    return (
      <>
        <div>{this.props.children}</div>
      {(isOpen && ModalComponent) && (
        <div {...{/*TODO: modal styles here*/}}>
          <button type="button" onClick={() => toggleOpen()}>X</button>
          <ModalComponent />
        </div>
      )}
      </>
    );
  }
}


export default ModalProvider
