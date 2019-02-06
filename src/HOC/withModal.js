import React from 'react'
import PropTypes from 'prop-types'
import { compose, withContext } from 'recompose'


const withModal = (Component) => {
  class ComponentWithModal extends React.Component {
    render() {
      // fixme: why modals.modals ?!
      const { modals: { setModal, toggleOpen, isOpen } } = this.context.modals

      return(
        <>
          <Component {...this.props} setModal={(Component) => {
            if (!isOpen) {
              setModal(Component)
              toggleOpen()
            }
          }}/>
        </>
      )
    }
  }

  // fixme: this is legacy context https://reactjs.org/docs/legacy-context.html
  ComponentWithModal.contextTypes = {
    modals: PropTypes.object
  }

  return ComponentWithModal
}


export default withModal