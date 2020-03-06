import React from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import {StylesProvider} from '@material-ui/core/styles'

import Header from 'src/component/Header.jsx'
import Footer from 'src/component/Footer.jsx'

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <CssBaseline />
        <StylesProvider injectFirst>
          <Header />
          {this.props.children}
          <Footer />
        </StylesProvider>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
