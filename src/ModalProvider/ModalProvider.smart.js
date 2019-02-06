import { compose, withState, withContext, getContext } from 'recompose'
import PropTypes from 'prop-types'
import ModalProvider from './ModalProvider.dumb'


export default compose(
  withContext(
    { modals: PropTypes.object },
    (props) => ({ modals: props }),
  ),
)(ModalProvider)