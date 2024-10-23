import CallIcon from '@material-ui/icons/Call'
import EmailIcon from '@material-ui/icons/Email'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import React from 'react'

import MeiFengLee from 'src/res/image/member/Mei-Feng-Lee.png'
import StaffStyle from 'src/style/Staff.module.scss'

export default function Staff() {
  return (
    <Grid
      className={StaffStyle['staff-section']}
      container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <h1 className={StaffStyle['staff-section-title']}>
          Project Manager
        </h1>
      </Grid>
      <Grid
        className={StaffStyle['staff']}
        container
        item xs={12} sm={6} md={5} lg={4} xl={2}>
        <img
          className={StaffStyle['staff-image']}
          src={MeiFengLee} />
        <h2 className={StaffStyle['staff-name']}>
          米雪兒
        </h2>
        <h2 className={StaffStyle['staff-name']}>
          Michelle
        </h2>
      </Grid>
      <Grid
        className={StaffStyle['staff-contact']}
        item xs={12} sm={6} md={5} lg={4} xl={2}>
        <List>
          <ListItem>
            <CallIcon />
            <Link
              className={StaffStyle['staff-contact-text']}
              href='tel:+88635715131,33518'>
              +886-3-5715131 ext.33518
            </Link>
          </ListItem>
          <ListItem>
            <EmailIcon />
            <Link
              className={StaffStyle['staff-contact-text']}
              href='mailto:michelle.hyk99@gmail.com'>
              michelle.hyk99@gmail.com
            </Link>
          </ListItem>
          <ListItem>
            <LocationOnIcon />
            <address
              className={StaffStyle['staff-contact-text']}>
              Rm. 633, Delta building,<br />
              101, Section 2, Kuang-Fu Road, Hsinchu 300044,<br />
              Taiwan (R.O.C.)
            </address>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  )
}
