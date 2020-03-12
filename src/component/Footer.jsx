import React from 'react'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CallIcon from '@material-ui/icons/Call'
import EmailIcon from '@material-ui/icons/Email'
import GitHubIcon from '@material-ui/icons/GitHub'
import FooterStyle from 'src/style/Footer.module.scss'
import logo from 'src/res/image/logo.png'
import reactIcon from 'src/res/image/tech/react.png'
import materialUIIcon from 'src/res/image/tech/material-ui.svg'
import webpackIcon from 'src/res/image/tech/webpack.svg'
import sassIcon from 'src/res/image/tech/sass.png'
import NCKUIcon from 'src/res/image/relate/NCKU.png'
import CSIEIcon from 'src/res/image/relate/NCKU-CSIE.png'

export default class Footer extends React.Component {
  render() {
    return (
      <Grid
        className={FooterStyle['footer-section']}
        container>
        <Grid
          className={FooterStyle['footer-signature']}
          item xs={12} sm={6} md={3} lg={2} xl={2}>
          <img
            alt='IKMLab logo'
            className={FooterStyle['logo']}
            src={logo}/>
          <p className={FooterStyle['copyright']}>
            Copyright © {new Date(Date.now()).getFullYear()} IKMLab.<br/>
            All right reserved.
          </p>
        </Grid>
        <Grid
          className={FooterStyle['footer-contact']}
          item xs={12} sm={6} md={3} lg={2} xl={2}>
          <List>
            <ListItem>
              <CallIcon/>
              <Link
                className={FooterStyle['contact']}
                href='tel:+88662757575,62520,2903'>
                  +886-6-275-7575 ext 62520 ext 2903
              </Link>
            </ListItem>
            <ListItem>
              <EmailIcon/>
              <Link
                className={FooterStyle['contact']}
                href='mailto:ikmlab@mail.csie.ncku.edu.tw'>
                  ikmlab@mail.csie.ncku.edu.tw
              </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid
          className={FooterStyle['footer-powered-by']}
          item xs={12} sm={6} md={3} lg={2} xl={2}>
          <h2 className={FooterStyle['powered-by-title']}>
            Powered By
          </h2>
          <figure>
            <Link href='https://reactjs.org/'>
              <img
                className={FooterStyle['powered-by-icon']}
                src={reactIcon}/>
            </Link>
            <Link href='https://webpack.js.org/'>
              <img
                className={FooterStyle['powered-by-icon']}
                src={webpackIcon}/>
            </Link>
            <Link href='https://material-ui.com/'>
              <img
                className={FooterStyle['powered-by-icon']}
                src={materialUIIcon}/>
            </Link>
            <Link href='https://sass-lang.com/'>
              <img
                className={FooterStyle['powered-by-icon']}
                src={sassIcon}/>
            </Link>
          </figure>
        </Grid>
        <Grid
          className={FooterStyle['footer-related']}
          item xs={12} sm={6} md={3} lg={2} xl={2}>
          <h2 className={FooterStyle['related-title']}>
            Related Link
          </h2>
          <figure>
            <Link href='https://web.ncku.edu.tw/index.php'>
              <img
                className={FooterStyle['related-icon']}
                src={NCKUIcon}/>
            </Link>
            <Link href='http://www.csie.ncku.edu.tw/ncku_csie/'>
              <img
                className={FooterStyle['related-icon']}
                src={CSIEIcon}/>
            </Link>
            <Link href='https://github.com/IKMLab'>
              <GitHubIcon
                className={FooterStyle['related-icon']}/>
            </Link>
          </figure>
        </Grid>
      </Grid>
    )
  }
}
