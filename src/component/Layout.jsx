import CssBaseline from '@material-ui/core/CssBaseline'
import React from 'react'
import PropTypes from 'prop-types'
import { StylesProvider } from '@material-ui/core/styles'

import Footer from 'src/component/Footer.jsx'
import Header from 'src/component/Header.jsx'

export default function Layout(props) {
  return (
    <>
      <CssBaseline />
      <StylesProvider injectFirst>
        <Header />
        {props.children}
        <Footer />
      </StylesProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
