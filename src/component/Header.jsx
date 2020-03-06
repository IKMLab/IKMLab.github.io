import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'

import HeaderStyle from 'src/style/Header.module.scss'
import logo from 'src/image/logo.png'

export default class Header extends React.Component {
  render() {
    return (
      <AppBar position='static'>
        <Toolbar className={HeaderStyle['toolbar']}>
          <Grid container>
            <Grid item container lg={2} alignItems='center'>
              <img
                src={logo}
                alt='IKMLab logo'
                className={HeaderStyle['toolbar-logo']}/>
            </Grid>
            <Grid item container lg alignItems='center'>
              <span className={HeaderStyle['toolbar-lab-name']}>
                Intelligent Knowledge Management Lab
              </span>
            </Grid>
            <Grid item lg alignItems='center' justify='flex-end'>
              <Link
                href={`${PUBLIC_URL}home.html`}
                className={HeaderStyle['toolbar-link']}>
                  Home
              </Link>
              <Link
                href={`${PUBLIC_URL}member.html`}
                className={HeaderStyle['toolbar-link']}>
                  Member
              </Link>
              <Link
                href={`${PUBLIC_URL}research.html`}
                className={HeaderStyle['toolbar-link']}>
                  Research
              </Link>
              <Link
                href={`${PUBLIC_URL}relate.html`}
                className={HeaderStyle['toolbar-link']}>
                  Relate
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
}
