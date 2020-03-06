import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

import SectionStyle from 'src/style/Section.module.scss'

export default class Section extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Grid
        container
        justify='center'
        alignItems='center'
        xl
        className={SectionStyle['section']}>
        {this.props.children}
      </Grid>
    )
  }
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
}
