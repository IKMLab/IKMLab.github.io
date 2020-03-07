import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import CallIcon from '@material-ui/icons/Call'
import EmailIcon from '@material-ui/icons/Email'
import LocationOnIcon from '@material-ui/icons/LocationOn'

import ContactStyle from 'src/style/Contact.module.scss'

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Box className={ContactStyle['contact-wrapper-out']}>
        <Grid
          className={ContactStyle['contact-wrapper-in']}
          container>
          <Grid item xl={12}>
            <h1 className={ContactStyle['contact-title']}>
            GET IN TOUCH
            </h1>
          </Grid>
          <Grid item xl={5}>
            <List className={ContactStyle['contact-info-list']}>
              <ListItem>
                <CallIcon/>
                <a
                  className={ContactStyle['contact-info']}
                  href='tel:062757575,62520,2903'>
                  06-275-7575 ext 62520 ext 2903
                </a>
              </ListItem>
              <ListItem>
                <CallIcon/>
                <a
                  className={ContactStyle['contact-info']}
                  href='tel:+88662757575,62520,2903'>
                  +886-6-275-7575 ext 62520 ext 2903
                </a>
              </ListItem>
              <ListItem>
                <EmailIcon/>
                <a
                  className={ContactStyle['contact-info']}
                  href='mailto:ikmlab@mail.csie.ncku.edu.tw'>
                  ikmlab@mail.csie.ncku.edu.tw
                </a>
              </ListItem>
              <ListItem>
                <AccessTimeIcon/>
                <span
                  className={ContactStyle['contact-info']}>
                  Office Hour:<br/>
                  AM 08:00 - PM 05:00 GMT+0800<br/>
                  (Taipei Standard Time)
                </span>
              </ListItem>
              <ListItem>
                <LocationOnIcon/>
                <address
                  className={ContactStyle['contact-info']}>
                  Rm. 65903, CSIE new building,<br/>
                  No. 1, Daxue Rd., East Dist., Tainan City 701,<br/>
                  Taiwan (R.O.C.)
                </address>
              </ListItem>
            </List>
          </Grid>
          <Grid item xl={5}>
            <iframe
              className={ContactStyle['contact-map']}
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7345.44068589906!2d120.22149759999998!3d22.997309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2stw!4v1583579953358!5m2!1sen!2stw"/>
          </Grid>
        </Grid>
      </Box>
    )
  }
}
