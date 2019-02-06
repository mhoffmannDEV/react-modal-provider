import React from 'react';

import ExampleModalContent from '../ExampleModalContent/ExampleModalContent.smart'


class Main extends React.Component {
  render() {
    return (
      <>
        <div>Main component</div>
        <button type="button" onClick={() => {
          this.props.setModal(ExampleModalContent)
        }}>show modal</button>
      </>
    );
  }
}

export default Main
