import { compose } from 'recompose'

import Content from './Content.dumb'
import withModal from '../HOC/withModal'

export default compose(
  withModal
)(Content)