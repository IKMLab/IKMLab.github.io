import CallIcon from '@material-ui/icons/Call'
import Divider from '@material-ui/core/Divider'
import EmailIcon from '@material-ui/icons/Email'
import GitHubIcon from '@material-ui/icons/GitHub'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import React from 'react'

import CSIEIcon from 'src/res/image/relate/NCKU-CSIE.png'
import FooterStyle from 'src/style/Footer.module.scss'
import NCKUIcon from 'src/res/image/relate/NCKU.png'
import materialUIIcon from 'src/res/image/tech/material-ui.svg'
import reactIcon from 'src/res/image/tech/react.png'
import sassIcon from 'src/res/image/tech/sass.png'
import webpackIcon from 'src/res/image/tech/webpack.svg'

export default function Footer() {
  return (
    <Grid
      className={FooterStyle['footer-section']}
      container>
      <Grid
        className={FooterStyle['footer-contact']}
        item xs={12} sm={6} md={3} lg={2} xl={2}>
        <Divider className={FooterStyle['divider']} />
        <List>
          <ListItem>
            <CallIcon />
            <Link
              className={FooterStyle['contact']}
              href='tel:+88662757575,62520,2903'>
              +886-6-275-7575 ext 62520 ext 2903
            </Link>
          </ListItem>
          <ListItem>
            <EmailIcon />
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
          <Link className={FooterStyle['powered-by-icon']} href='https://reactjs.org/'>
            <img
              className={FooterStyle['powered-by-icon-image']}
              src={reactIcon} />
            <h2 className={FooterStyle['powered-by-icon-name']}>
              REACT
            </h2>
          </Link>
          <Link className={FooterStyle['powered-by-icon']} href='https://webpack.js.org/'>
            <img
              className={FooterStyle['powered-by-icon-image']}
              src={webpackIcon} />
            <h2 className={FooterStyle['powered-by-icon-name']}>
              WEBPACK
            </h2>
          </Link>
          <Link className={FooterStyle['powered-by-icon']} href='https://material-ui.com/'>
            <img
              className={FooterStyle['powered-by-icon-image']}
              src={materialUIIcon} />
            <h2 className={FooterStyle['powered-by-icon-name']}>
              MATERIAL-UI
            </h2>
          </Link>
          <Link className={FooterStyle['powered-by-icon']} href='https://sass-lang.com/'>
            <img
              className={FooterStyle['powered-by-icon-image']}
              src={sassIcon} />
            <h2 className={FooterStyle['powered-by-icon-name']}>
              SASS
            </h2>
          </Link>
          <Divider className={FooterStyle['divider']} />
        </figure>
      </Grid>
      <Grid
        className={FooterStyle['footer-related']}
        item xs={12} sm={6} md={3} lg={2} xl={2}>
        <h2 className={FooterStyle['related-title']}>
          Related Link
        </h2>
        <figure>
          <Link className={FooterStyle['related-icon']} href='https://web.ncku.edu.tw/index.php'>
            <img
              className={FooterStyle['related-icon-image']}
              src={NCKUIcon} />
              <h2 className={FooterStyle['related-icon-name']}>
              National Cheng Kung University
            </h2>
          </Link>
          <Link className={FooterStyle['related-icon']}  href='http://www.csie.ncku.edu.tw/ncku_csie/'>
            <img
              className={FooterStyle['related-icon-image']}
              src={CSIEIcon} />
             <h2 className={FooterStyle['related-icon-name']}>
              Department of Computer Science and Information Engineering
            </h2>
          </Link>
          <Link className={FooterStyle['related-icon']}  href='https://github.com/IKMLab' >
            <GitHubIcon
              className={FooterStyle['related-icon-image']} />
            <h2 className={FooterStyle['related-icon-name']}>
              Intelligent Knowledge Management Laboratory
            </h2>
          </Link>
        </figure>
      </Grid>
    </Grid>
  )
}
