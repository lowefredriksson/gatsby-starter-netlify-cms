import React from 'react'
import PropTypes from 'prop-types'
import { DesignerTemplate } from '../../templates/designer'

const DesignerPreview = ({ entry, widgetFor }) => (
  <DesignerTemplate
    name={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

DesignerPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default DesignerPreview
