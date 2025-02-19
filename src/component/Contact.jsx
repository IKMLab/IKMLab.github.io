import AccessTimeIcon from '@material-ui/icons/AccessTime'
import Box from '@material-ui/core/Box'
import CallIcon from '@material-ui/icons/Call'
import EmailIcon from '@material-ui/icons/Email'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import React from 'react'

import ContactStyle from 'src/style/Contact.module.scss'

export default function Contact() {
  return (
    <Box className={ContactStyle['contact-wrapper-out']}>
      <Grid
        className={ContactStyle['contact-wrapper-in']}
        container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <h2 className={ContactStyle['contact-title']}>
            GET IN TOUCH
          </h2>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
          <List className={ContactStyle['contact-info-list']}>
            <ListItem>
              <CallIcon />
              <Link
                className={ContactStyle['contact-info']}
                href='tel:+88635715131,33518'>
                +886-3-5715131 ext.33518
              </Link>
            </ListItem>
            <ListItem>
              <EmailIcon />
              <Link
                className={ContactStyle['contact-info']}
                href='mailto:ikmlab.nthu@gmail.com'>
                ikmlab.nthu@gmail.com
              </Link>
            </ListItem>
            <ListItem>
              <AccessTimeIcon />
              <span
                className={ContactStyle['contact-info']}>
                Office Hour:<br />
                  AM 08:00 - PM 05:00 GMT+0800<br />
                  (Taipei Standard Time)
              </span>
            </ListItem>
            <ListItem>
              <LocationOnIcon />
              <address
                className={ContactStyle['contact-info']}>
                Rm. 634, C.L.Liu Building(EECS Building),<br />
                  101, Section 2, Kuang-Fu Road, Hsinchu 300044,<br />
                  Taiwan (R.O.C.)
              </address>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
          <iframe
            className={ContactStyle['contact-map']}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.0145593482007!2d120.98962667770058!3d24.794954977972225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468360b9e03f9e3%3A0x22772dceb9fafb07!2z5ZyL56uL5riF6I-v5aSn5a24IOWKieeCr-acl-mkqA!5e0!3m2!1szh-TW!2stw!4v1729568838865!5m2!1szh-TW!2stw"></iframe>
        </Grid>
      </Grid>
    </Box>
  )
}
