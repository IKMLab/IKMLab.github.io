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
        <Toolbar className={HeaderStyle['toolbar']}>
          <Grid container>
            <Grid
              className={HeaderStyle['toolbar-logo']}
              item xs={12} sm={12} md={3} lg={2} xl={2}>
              <Link href={`${PUBLIC_URL}home.html`}>
                <img
                  alt='IKMLab logo'
                  className={HeaderStyle['logo']}
                  src={logo}/>
              </Link>
            </Grid>
            <Grid
              className={HeaderStyle['toolbar-lab-name']}
              item xs={12} sm={12} md={8} lg={6} xl={6}>
              Intelligent Knowledge Management Lab
            </Grid>
            <Grid
              className={HeaderStyle['toolbar-link']}
              item xs={12} sm={12} md={12} lg={4} xl={4}>
              <Link
                className={HeaderStyle['link']}
                href={`${PUBLIC_URL}home.html`}>
                  Home
              </Link>
              <Link
                className={HeaderStyle['link']}
                href={`${PUBLIC_URL}member.html`}>
                  Member
              </Link>
              <Link
                className={HeaderStyle['link']}
                href={`${PUBLIC_URL}research.html`}>
                  Research
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
}
