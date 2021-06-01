import CssBaseline from '@material-ui/core/CssBaseline'
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import React from 'react'
import PropTypes from 'prop-types'
import { StylesProvider } from '@material-ui/core/styles'
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import Footer from 'src/component/Footer.jsx'
import Header from 'src/component/Header.jsx'
import LayoutStyle from 'src/style/Layout.module.scss'

export default function Layout(props) {
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  const handleFabClick = (event) => {
    const anchor = (event.target.ownerDocument || document)
      .querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <>
      <CssBaseline />
      <StylesProvider injectFirst>
        <div id='back-to-top-anchor'></div>
        <Header />
        {props.children}
        <Footer />
        <Zoom in={scrollTrigger}>
          <Fab
            className={LayoutStyle['fab']}
            onClick={handleFabClick}>
            <KeyboardArrowUpIcon />
          </Fab>
        </Zoom>
      </StylesProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
