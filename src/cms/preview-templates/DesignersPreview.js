import React from 'react'
import PropTypes from 'prop-types'
import { DesignersTemplate } from '../../templates/designers'

const DesignersPreview = ({ entry, widgetFor }) => (
  <DesignersTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

DesignersPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default DesignersPreview
