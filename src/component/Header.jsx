import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'

import HeaderStyle from 'src/style/Header.module.scss'
import logo from 'src/res/image/logo.png'

export default class Header extends React.Component {
  render() {
    return (
      <AppBar position='static'>
        <Toolbar className={HeaderStyle['header']}>
          <Grid container>
            <Grid
              className={HeaderStyle['header-grid-item-1']}
              container
              item
              xl={8}>
              <img
                alt='IKMLab logo'
                className={HeaderStyle['header-logo']}
                src={logo}/>
              <span className={HeaderStyle['header-lab-name']}>
                Intelligent Knowledge Management Lab
              </span>
            </Grid>
            <Grid
              className={HeaderStyle['header-grid-item-2']}
              container
              item
              xl>
              <Link
                className={HeaderStyle['header-link']}
                href={`${PUBLIC_URL}home.html`}>
                  Home
              </Link>
              <Link
                className={HeaderStyle['header-link']}
                href={`${PUBLIC_URL}member.html`}>
                  Member
              </Link>
              <Link
                className={HeaderStyle['header-link']}
                href={`${PUBLIC_URL}research.html`}>
                  Research
              </Link>
              <Link
                className={HeaderStyle['header-link']}
                href={`${PUBLIC_URL}relate.html`}>
                  Relate
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
}
