import React from 'react'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CallIcon from '@material-ui/icons/Call'
import EmailIcon from '@material-ui/icons/Email'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import StaffStyle from 'src/style/Staff.module.scss'
import MeiFengLee from 'src/res/image/member/Mei-Feng-Lee.png'

export default class Staff extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid
        className={StaffStyle['staff-wrapper']}
        container>
        <Grid
          item
          xl={12}>
          <h1
            className={StaffStyle['staff-section-title']}>
              Staff
          </h1>
        </Grid>
        <Grid
          className={StaffStyle['staff']}
          container
          item
          xl={2}>
          <img
            className={StaffStyle['staff-image']}
            src={MeiFengLee}/>
          <h2 className={StaffStyle['staff-name']}>
            李美鳳
          </h2>
          <h2 className={StaffStyle['staff-name']}>
            Mei Feng Lee
          </h2>
        </Grid>
        <Grid
          item
          xl={2}>
          <List className={StaffStyle['staff-contact']}>
            <ListItem>
              <CallIcon/>
              <a
                className={StaffStyle['staff-contact-text']}
                href='tel:062757575,62520,2903'>
                  06-275-7575 ext 62520 ext 2903
              </a>
            </ListItem>
            <ListItem>
              <CallIcon/>
              <a
                className={StaffStyle['staff-contact-text']}
                href='tel:+88662757575,62520,2903'>
                  +886-6-275-7575 ext 62520 ext 2903
              </a>
            </ListItem>
            <ListItem>
              <EmailIcon/>
              <a
                className={StaffStyle['staff-contact-text']}
                href='mailto:michelle.hyk99@gmail.com'>
                  michelle.hyk99@gmail.com
              </a>
            </ListItem>
            <ListItem>
              <LocationOnIcon/>
              <address
                className={StaffStyle['staff-contact-text']}>
                  Rm. 65903, CSIE new building,<br/>
                  No. 1, Daxue Rd., East Dist., Tainan City 701,<br/>
                  Taiwan (R.O.C.)
              </address>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    )
  }
}
