import React from 'react'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CallIcon from '@material-ui/icons/Call'
import EmailIcon from '@material-ui/icons/Email'
import LinkIcon from '@material-ui/icons/Link'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import ProfessorStyle from 'src/style/Professor.module.scss'
import HungYuKao from 'src/res/image/member/Hung-Yu-Kao.png'

export default class Professor extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid
        className={ProfessorStyle['professor-wrapper']}
        container>
        <Grid
          item
          xl={12}>
          <h1
            className={ProfessorStyle['professor-section-title']}>
              Professor
          </h1>
        </Grid>
        <Grid
          className={ProfessorStyle['professor']}
          container
          item
          xl={2}>
          <img
            className={ProfessorStyle['professor-image']}
            src={HungYuKao}/>
          <h2 className={ProfessorStyle['professor-name']}>
            高宏宇
          </h2>
          <h2 className={ProfessorStyle['professor-name']}>
            Hung Yu Kao
          </h2>
          <h3 className={ProfessorStyle['professor-department']}>
            Department of Computer Science and Information Engineering at
            National Cheng Kung University
          </h3>
        </Grid>
        <Grid
          item
          xl={2}>
          <List className={ProfessorStyle['professor-contact']}>
            <ListItem>
              <CallIcon/>
              <a
                className={ProfessorStyle['professor-contact-text']}
                href='tel:+88662757575,62546'>
                  +886-6-275-7575 ext 62546
              </a>
            </ListItem>
            <ListItem>
              <EmailIcon/>
              <a
                className={ProfessorStyle['professor-contact-text']}
                href='mailto:hykao@mail.ncku.edu.tw'>
                  hykao@mail.ncku.edu.tw
              </a>
            </ListItem>
            <ListItem>
              <LocationOnIcon/>
              <address
                className={ProfessorStyle['professor-contact-text']}>
                  Rm. 65C11, CSIE new building,<br/>
                  No. 1, Daxue Rd., East Dist., Tainan City 701,<br/>
                  Taiwan (R.O.C.)
              </address>
            </ListItem>
            <ListItem>
              <LinkIcon/>
              <a
                className={ProfessorStyle['professor-contact-text']}
                href='http://myweb.ncku.edu.tw/~hykao/'>
                http://myweb.ncku.edu.tw/~hykao/
              </a>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    )
  }
}
