import AssignmentIcon from '@material-ui/icons/Assignment'
import CallIcon from '@material-ui/icons/Call'
import Collapse from '@material-ui/core/Collapse'
import EmailIcon from '@material-ui/icons/Email'
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents'
import EventSeatIcon from '@material-ui/icons/EventSeat'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Grid from '@material-ui/core/Grid'
import GroupIcon from '@material-ui/icons/Group'
import HighlightIcon from '@material-ui/icons/Highlight'
import Link from '@material-ui/core/Link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import React from 'react'
import SchoolIcon from '@material-ui/icons/School'
import Typography from '@material-ui/core/Typography'
import WorkIcon from '@material-ui/icons/Work'

import HungYuKao from 'src/res/image/member/Hung-Yu-Kao.png'
import ProfessorStyle from 'src/style/Professor.module.scss'
import {researchData} from 'src/res/data/research.js'


const journals = researchData
    .filter((research) => research.venueType === 'journal')
    .sort((researchA, researchB) => researchB.year - researchA.year)
    .map((research) => research.professorPreferredFormat)
const conferences = researchData
    .filter((research) => research.venueType === 'conference')
    .sort((researchA, researchB) => researchB.year - researchA.year)
    .map((research) => research.professorPreferredFormat)

export default function Professor() {
  const [isOpen, setOpen] = React.useState({
    ConfChair: false,
    ProgCoChair: false,
    PCMembers: false,
  })

  const handleListClick = (clickItem) => {
    return () => {
      setOpen({...isOpen, ...clickItem})
    }
  }

  return (
    <>
      <Grid
        className={ProfessorStyle['container']}
        container>
        <Grid
          className={ProfessorStyle['profile']}
          container
          item xs={12} sm={6} md={5} lg={4} xl={2}>
          <img
            className={ProfessorStyle['image']}
            src={HungYuKao} />
          <h2 className={ProfessorStyle['name']}>
            高宏宇
          </h2>
          <h2 className={ProfessorStyle['name']}>
            Hung-Yu Kao
          </h2>
          <h3 className={ProfessorStyle['department']}>
            Department of Computer Science and Information Engineering at
            National Cheng Kung University
          </h3>
        </Grid>
        <Grid
          className={ProfessorStyle['contact']}
          item xs={12} sm={6} md={5} lg={4} xl={2}>
          <List>
            <ListItem>
              <ListItemIcon>
                <CallIcon />
              </ListItemIcon>
              <ListItemText>
                <Link
                  className={ProfessorStyle['contact-text']}
                  href='tel:+88662757575,62546'>
                  +886-6-275-7575 ext 62546
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText>
                <Link
                  className={ProfessorStyle['contact-text']}
                  href='mailto:hykao@mail.ncku.edu.tw'>
                  hykao@mail.ncku.edu.tw
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText>
                <address
                  className={ProfessorStyle['contact-text']}>
                  Rm. 65C11, CSIE new building,<br />
                  No. 1, Daxue Rd., East Dist., Tainan City 701,<br />
                  Taiwan (R.O.C.)
                </address>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <HighlightIcon />
              </ListItemIcon>
              <ListItemText
                className={ProfessorStyle['contact-text']}>
                Call for Big Data Mining / Text Mining Ph.D. students !! <br />
                [Please send your C.V. .]
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Grid
        className={ProfessorStyle['container']}
        container>
        <Grid
          className={ProfessorStyle['intro']}
          item xs={12}>
          <Typography className={ProfessorStyle['intro-text']}>
            Hung-Yu Kao received the B.S. and M.S. degree in Computer Science
            from National Tsing Hua University in 1994 and 1996 respectively.
            In July 2003, he received the PhD degree from the Electrical
            Engineering Department, National Taiwan University.
            He is currently a professor of Department of Computer Science and
            Information Engineering (CSIE) of National Cheng Kung University.
            He is also the chair of IEEE CIS Tainan Chapter.
            He was a post-doctoral fellow of Institute of Information Science
            (IIS), Academia Sinica from 2003 to 2004.
            His research interests include Natural Language Processing(NLP), Web
            information retrieval / extraction, search engine, knowledge
            management, data mining, social network analysis and bioinformatics.
            He has published more than 60 research papers in refereed
            international journals and conference proceedings.
            He is a member of IEEE and ACM.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        className={ProfessorStyle['container']}
        container>
        <Grid className={ProfessorStyle['education']}
          item xs={12} sm={6} md={6} lg={6} xl={6}>
          <List subheader={
            <ListSubheader disableSticky={true}>
              Education
            </ListSubheader>
          }>
            <ListItem className={ProfessorStyle['education-item']}>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['education-text']}>
                Ph.D.,
                Department of Electrical Engineering,
                National Taiwan University <br />
                1999.8 ~ 2003.7
              </ListItemText>
            </ListItem>
            <ListItem className={ProfessorStyle['education-item']}>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['education-text']}>
                M.S.,
                Department of Computer Science,
                National Tsing Hua University <br />
                1994.8 ~ 1996.7
              </ListItemText>
            </ListItem>
            <ListItem className={ProfessorStyle['education-item']}>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['education-text']}>
                B.S.,
                Department of Computer Science,
                National Tsing Hua University <br />
                1990.8 ~ 1994.7
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid className={ProfessorStyle['research']}
          item xs={12} sm={6} md={6} lg={6} xl={12}>
          <List subheader={
            <ListSubheader disableSticky={true}>
              Research
            </ListSubheader>
          }>
            <ListItem className={ProfessorStyle['research-item']}>
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['research-text']}>
                Information Retrieval / Extraction
              </ListItemText>
            </ListItem>
            <ListItem className={ProfessorStyle['research-item']}>
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['research-text']}>
                Big / Web Data Mining
              </ListItemText>
            </ListItem>
            <ListItem className={ProfessorStyle['research-item']}>
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['research-text']}>
                Bioinformatics
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Grid
        className={ProfessorStyle['container']}
        container>
        <Grid className={ProfessorStyle['experience']}
          item xs={12} sm={6} md={6} lg={6} xl={6}>
          <List subheader={
            <ListSubheader disableSticky={true}>
              Experience
            </ListSubheader>
          }>
            <ListItem className={ProfessorStyle['experience-item']}>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['experience-text']}>
                Director,
                Department of Computer Science and Information Engineering
                (CSIE), NCKU <br />
                2018.2 ~ present
              </ListItemText>
            </ListItem>
            <ListItem className={ProfessorStyle['experience-item']}>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['experience-text']}>
                Director,
                Institute of Medical Informatics (IMI),
              NCKU <br />
              2015.8 ~ present
              </ListItemText>
            </ListItem>
            <ListItem className={ProfessorStyle['experience-item']}>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['experience-text']}>
                Chair,
                IEEE Computational Intelligence Society (CIS) Tainan Chapter
                <br />
                2017.8 ~ present
              </ListItemText>
            </ListItem>
            <ListItem className={ProfessorStyle['experience-item']}>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['experience-text']}>
                Vice Chair,
                IEEE Computational Intelligence Society (CIS) Tainan Chapter
                <br />
                2015.8 ~ 2017.7
              </ListItemText>
            </ListItem>
            <ListItem className={ProfessorStyle['experience-item']}>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['experience-text']}>
                Professor,
                Department of Computer Science and Information Engineering
                (CSIE), NCKU <br />
                2014.8 ~ present
              </ListItemText>
            </ListItem>
            <ListItem className={ProfessorStyle['experience-item']}>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['experience-text']}>
                Adjunct Professor,
                Institute of Medical Informatics (IMI),
                NCKU <br />
                2014.8 ~ present
              </ListItemText>
            </ListItem>
            <ListItem className={ProfessorStyle['experience-item']}>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['experience-text']}>
                Associate Professor,
                Department of Computer Science and Information Engineering
                (CSIE), NCKU <br />
                2011.8 ~ 2014.7
              </ListItemText>
            </ListItem>
            <ListItem className={ProfessorStyle['experience-item']}>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['experience-text']}>
                Adjunct Associate Professor,
                Institute of Medical Informatics (IMI),
                NCKU <br />
                2011.8 ~ 2014.7
              </ListItemText>
            </ListItem>
            <ListItem className={ProfessorStyle['experience-item']}>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['experience-text']}>
                Secretary General,
                IEEE Computational Intelligence Society (CIS) Tainan Chapter
                <br />
                2013.8 ~ 2015.7
              </ListItemText>
            </ListItem>
            <ListItem className={ProfessorStyle['experience-item']}>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['experience-text']}>
                Assistant Professor,
                Department of Computer Science and Information Engineering
                (CSIE), NCKU <br />
                2004.8 ~ 2011.7
              </ListItemText>
            </ListItem>
            <ListItem className={ProfessorStyle['experience-item']}>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['experience-text']}>
                Post-doctoral Fellow,
                Computer System and Communication Laboratory,
                Institute of Information Science,
                Academia Sinica
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid className={ProfessorStyle['honor']}
          item xs={12} sm={6} md={6} lg={6} xl={6}>
          <List subheader={
            <ListSubheader disableSticky={true}>
              Honor
            </ListSubheader>
          }>
            <ListItem className={ProfessorStyle['honor-item']}>
              <ListItemIcon>
                <EmojiEventsIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['honor-text']}>
                National Cheng Kung University Teaching Award <br />
                2015
              </ListItemText>
            </ListItem>
            <ListItem className={ProfessorStyle['honor-item']}>
              <ListItemIcon>
                <EmojiEventsIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['honor-text']}>
                Natinal Cheng Kung University College EECS Outstanding Mentoring
                Award <br />
                2014
              </ListItemText>
            </ListItem>
            <ListItem className={ProfessorStyle['honor-item']}>
              <ListItemIcon>
                <EmojiEventsIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['honor-text']}>
                National Cheng Kung University Distinguished Teaching Award
                <br />
                2011 to 2013.
              </ListItemText>
            </ListItem>
            <ListItem className={ProfessorStyle['honor-item']}>
              <ListItemIcon>
                <EmojiEventsIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['honor-text']}>
                BioCreAtIvE III Competition, Gene Normalization Task, 1st award
                Winner <br />
                2010
              </ListItemText>
            </ListItem>
            <ListItem className={ProfessorStyle['honor-item']}>
              <ListItemIcon>
                <EmojiEventsIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['honor-text']}>
                Research Grant of Intel Research Quad Core Seeding Program
                <br />
                2007
              </ListItemText>
            </ListItem>
            <ListItem className={ProfessorStyle['honor-item']}>
              <ListItemIcon>
                <EmojiEventsIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['honor-text']}>
                Biographical Listings in IBC (International Biographical Centre,
                Cambridge, England) Leading Scientists of the World <br />
                2008
              </ListItemText>
            </ListItem>
            <ListItem className={ProfessorStyle['honor-item']}>
              <ListItemIcon>
                <EmojiEventsIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['honor-text']}>
                Biographical Listings in Marquis&apos;s Who&apos;s Who in the
                World 25th ~ 27th Silver Anniversary Edition <br />
                2008 ~ 2010
              </ListItemText>
            </ListItem>
            <ListItem className={ProfessorStyle['honor-item']}>
              <ListItemIcon>
                <EmojiEventsIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['honor-text']}>
                Biographical Listings in Marquis&apos;s Who&apos;s Who in
                Science and Engineering 9th, 10th Anniversary Edition <br />
                2006 ~ 2007, 2007 ~ 2008
              </ListItemText>
            </ListItem>
            <ListItem className={ProfessorStyle['honor-item']}>
              <ListItemIcon>
                <EmojiEventsIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['honor-text']}>
                Long Term Award for PhD Thesis, Acer Foundation <br />
                2003
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Grid
        className={ProfessorStyle['container']}
        container>
        <Grid className={ProfessorStyle['personal-activities']}
          item xs={12} sm={6} md={6} lg={6} xl={6}>
          <List subheader={
            <ListSubheader disableSticky={true}>
              Personal Activities
            </ListSubheader>
          }>
            <ListItem className={ProfessorStyle['personal-activities-item']}>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText
                className={ProfessorStyle['personal-activities-text']}>
                Editorial board, Journal of Emerging Technologies in Web
                Intelligence (JETWI) <br />
                from 2009
              </ListItemText>
            </ListItem>
            <ListItem className={ProfessorStyle['personal-activities-item']}>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText
                className={ProfessorStyle['personal-activities-text']}>
                Editorial Board of Scientifica, Bioinformatics Area
              </ListItemText>
            </ListItem>
            <ListItem
              button
              className={ProfessorStyle['personal-activities-item']}
              onClick={handleListClick({ConfChair: !isOpen.ConfChair})}>
              <ListItemIcon>
                <EventSeatIcon />
              </ListItemIcon>
              <ListItemText
                className={ProfessorStyle['personal-activities-text']}>
                Conference Chair
              </ListItemText>
              {isOpen.ConfChair ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={isOpen.ConfChair} timeout='auto' unmountOnExit>
              <List className={ProfessorStyle['personal-activities-nested']}>
                <ListItem
                  className={ProfessorStyle['personal-activities-item']}>
                  <ListItemIcon>
                    <EventSeatIcon />
                  </ListItemIcon>
                  <ListItemText>
                    the 28th Conference on Computational Linguistics and Speech
                    Processing (ROCLING-2016) <br />
                    2016
                  </ListItemText>
                </ListItem>
              </List>
            </Collapse>
            <ListItem
              button
              className={ProfessorStyle['personal-activities-item']}
              onClick={handleListClick({ProgCoChair: !isOpen.ProgCoChair})}>
              <ListItemIcon>
                <EventSeatIcon />
              </ListItemIcon>
              <ListItemText
                className={ProfessorStyle['personal-activities-text']}>
                Program Chair / Co-Chair
              </ListItemText>
              {isOpen.ProgCoChair ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={isOpen.ProgCoChair} timeout='auto' unmountOnExit>
              <List className={ProfessorStyle['personal-activities-nested']}>
                <ListItem
                  className={ProfessorStyle['personal-activities-item']}>
                  <ListItemIcon>
                    <EventSeatIcon />
                  </ListItemIcon>
                  <ListItemText>
                    the 27th Conference on Computational Linguistics and Speech
                    Processing (ROCLING-2015) <br />
                    2015
                  </ListItemText>
                </ListItem>
                <ListItem
                  className={ProfessorStyle['personal-activities-item']}>
                  <ListItemIcon>
                    <EventSeatIcon />
                  </ListItemIcon>
                  <ListItemText>
                    the 26th Conference on Computational Linguistics and Speech
                    Processing (ROCLING-2014) <br />
                    2014
                  </ListItemText>
                </ListItem>
                <ListItem
                  className={ProfessorStyle['personal-activities-item']}>
                  <ListItemIcon>
                    <EventSeatIcon />
                  </ListItemIcon>
                  <ListItemText>
                    the 23th Genome Informatics Workshop (GIW-2012) <br />
                    Dec. 12~14, 2012
                  </ListItemText>
                </ListItem>
                <ListItem
                  className={ProfessorStyle['personal-activities-item']}>
                  <ListItemIcon>
                    <EventSeatIcon />
                  </ListItemIcon>
                  <ListItemText>
                    the 2012 Conference on Technologies and Applications of
                    Artificial Intelligence (TAAI-2012) <br />
                    Nov. 16 ~ 18, 2012
                  </ListItemText>
                </ListItem>
                <ListItem
                  className={ProfessorStyle['personal-activities-item']}>
                  <ListItemIcon>
                    <EventSeatIcon />
                  </ListItemIcon>
                  <ListItemText>
                    the 2011 International Conference on Data Engineering and
                    Internet Technology (DEIT-2011) <br />
                    Mar. 15 ~ 17, 2011
                  </ListItemText>
                </ListItem>
              </List>
            </Collapse>
            <ListItem
              button
              className={ProfessorStyle['personal-activities-item']}
              onClick={handleListClick({PCMembers: !isOpen.PCMembers})}>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText
                className={ProfessorStyle['personal-activities-text']}>
                PC Members
              </ListItemText>
              {isOpen.PCMembers ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={isOpen.PCMembers} timeout='auto' unmountOnExit>
              <List className={ProfessorStyle['personal-activities-nested']}>
                <ListItem
                  className={ProfessorStyle['personal-activities-item']}>
                  <ListItemIcon>
                    <GroupIcon />
                  </ListItemIcon>
                  <ListItemText>
                    the 19th Pacific-Asia Conference on Knowledge Discovery and
                    Data Mining (PAKDD-2015) <br />
                    Ho Chi Minh City, Viet Nam, 2015
                  </ListItemText>
                </ListItem>
                <ListItem
                  className={ProfessorStyle['personal-activities-item']}>
                  <ListItemIcon>
                    <GroupIcon />
                  </ListItemIcon>
                  <ListItemText>
                    the 18th Pacific-Asia Conference on Knowledge Discovery and
                    Data Mining (PAKDD-2014) <br />
                    Tainan, Taiwan, 2014
                  </ListItemText>
                </ListItem>
                <ListItem
                  className={ProfessorStyle['personal-activities-item']}>
                  <ListItemIcon>
                    <GroupIcon />
                  </ListItemIcon>
                  <ListItemText>
                    the 2013 International Health Informatics Conference
                    (IHIC-2013) <br />
                    2013
                  </ListItemText>
                </ListItem>
                <ListItem
                  className={ProfessorStyle['personal-activities-item']}>
                  <ListItemIcon>
                    <GroupIcon />
                  </ListItemIcon>
                  <ListItemText>
                    the 2013 Conference on Technologies and Applications of
                    Artificial Intelligence (TAAI-2013) <br />
                    2013
                  </ListItemText>
                </ListItem>
                <ListItem
                  className={ProfessorStyle['personal-activities-item']}>
                  <ListItemIcon>
                    <GroupIcon />
                  </ListItemIcon>
                  <ListItemText>
                    the 17th Pacific-Asia Conference on Knowledge Discovery and
                    Data Mining (PAKDD-2013) <br />
                    Apr. 14 ~ 17, Gold Coast, Australia 2013
                  </ListItemText>
                </ListItem>
                <ListItem
                  className={ProfessorStyle['personal-activities-item']}>
                  <ListItemIcon>
                    <GroupIcon />
                  </ListItemIcon>
                  <ListItemText>
                    the 25th International Conference on Industrial,
                    Engineering &amp; Other Applications of Applied Intelligent
                    Systems (IEA/AIE-2012) <br />
                    2012
                  </ListItemText>
                </ListItem>
                <ListItem
                  className={ProfessorStyle['personal-activities-item']}>
                  <ListItemIcon>
                    <GroupIcon />
                  </ListItemIcon>
                  <ListItemText>
                    the Workshop on Databases, Data Mining, and Information
                    Retrieval, NCS 2011 <br />
                    2011
                  </ListItemText>
                </ListItem>
                <ListItem
                  className={ProfessorStyle['personal-activities-item']}>
                  <ListItemIcon>
                    <GroupIcon />
                  </ListItemIcon>
                  <ListItemText>
                    the 20th ACM Conference on Information and Knowledge
                    Management (CIKM-2011) <br />
                    Oct. 24 ~ 28, 2011
                  </ListItemText>
                </ListItem>
                <ListItem
                  className={ProfessorStyle['personal-activities-item']}>
                  <ListItemIcon>
                    <GroupIcon />
                  </ListItemIcon>
                  <ListItemText>
                    the 2nd IEEE Intern&apos;l Conf. on Cloud Computing
                    Technology and Science (CloudCom-2010) <br />
                    Nov. 30 ~ Dec. 3, 2010
                  </ListItemText>
                </ListItem>
                <ListItem
                  className={ProfessorStyle['personal-activities-item']}>
                  <ListItemIcon>
                    <GroupIcon />
                  </ListItemIcon>
                  <ListItemText>
                    the 2010 Intern&apos;l Conf. on Data Mining (DMIN-2010)
                    <br />
                    June 12 ~ 15, 2010
                  </ListItemText>
                </ListItem>
                <ListItem
                  className={ProfessorStyle['personal-activities-item']}>
                  <ListItemIcon>
                    <GroupIcon />
                  </ListItemIcon>
                  <ListItemText>
                    the 2006 Asia-Pacific Signal and Information Processing
                    Association, Annual Summit and Conference <br />
                    Oct. 4 ~ 7, 2009
                  </ListItemText>
                </ListItem>
                <ListItem
                  className={ProfessorStyle['personal-activities-item']}>
                  <ListItemIcon>
                    <GroupIcon />
                  </ListItemIcon>
                  <ListItemText>
                    the 2009 Intern&apos;l Conf. on Data Mining (DMIN-2009)
                    <br />
                    June 13 ~ 16, 2009
                  </ListItemText>
                </ListItem>
                <ListItem
                  className={ProfessorStyle['personal-activities-item']}>
                  <ListItemIcon>
                    <GroupIcon />
                  </ListItemIcon>
                  <ListItemText>
                    the 2008 Intern&apos;l Conf. on Data Mining (DMIN-2008)
                    <br />
                    June 14 ~ 17, 2008
                  </ListItemText>
                </ListItem>
                <ListItem
                  className={ProfessorStyle['personal-activities-item']}>
                  <ListItemIcon>
                    <GroupIcon />
                  </ListItemIcon>
                  <ListItemText>
                    the 2007 Intern&apos;l Conf. on Data Mining (DMIN-2007)
                    <br />
                    June 25 ~ 28, 2007
                  </ListItemText>
                </ListItem>
                <ListItem
                  className={ProfessorStyle['personal-activities-item']}>
                  <ListItemIcon>
                    <GroupIcon />
                  </ListItemIcon>
                  <ListItemText>
                    the 2006 Intern&apos;l Conf. on Data Mining (DMIN-2006)
                    <br />
                    June 26 ~ 29, 2006
                  </ListItemText>
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Grid>
        <Grid className={ProfessorStyle['course']}
          item xs={12} sm={6} md={6} lg={6} xl={6}>
          <List subheader={
            <ListSubheader disableSticky={true}>
              Course
            </ListSubheader>
          }>
            <ListItem className={ProfessorStyle['course-item']}>
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['course-text']}>
                Data Mining <br />
                2017 Fall
              </ListItemText>
            </ListItem>
            <ListItem className={ProfessorStyle['course-item']}>
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['course-text']}>
                Discrete Mathematics <br />
                2008 ~ 2015 Spring
              </ListItemText>
            </ListItem>
            <ListItem className={ProfessorStyle['course-item']}>
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['course-text']}>
                Web Programming I <br />
                2004 ~ 2008 Fall
              </ListItemText>
            </ListItem>
            <ListItem className={ProfessorStyle['course-item']}>
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['course-text']}>
                Algorithms <br />
                2004 ~ 2007 Fall
              </ListItemText>
            </ListItem>
            <ListItem className={ProfessorStyle['course-item']}>
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['course-text']}>
                Web Information Retrieval and Text Mining <br />
                2005 ~ 2007 Spring, 2008 ~ 2012 Fall
              </ListItemText>
            </ListItem>
            <ListItem className={ProfessorStyle['course-item']}>
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['course-text']}>
                Special Topics in Text Data Mining <br />
                2009 ~ 2012 Fall
              </ListItemText>
            </ListItem>
            <ListItem className={ProfessorStyle['course-item']}>
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['course-text']}>
                Web Information Retrieval and Text Mining <br />
                2005 ~ 2007 Spring, 2008 ~ 2012 Fall
              </ListItemText>
            </ListItem>
            <ListItem className={ProfessorStyle['course-item']}>
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['course-text']}>
                Bioinformatics Programming <br />
                2005 ~ 2009 Summer
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Grid
        className={ProfessorStyle['container']}
        container>
        <Grid className={ProfessorStyle['publication']}
          item xs={12} sm={12} md={12} lg={12} xl={12}>
          <List subheader={
            <ListSubheader disableSticky={true}>
              Journal Papers
            </ListSubheader>
          }>
            {journals.map((publication, idx) => (
              <ListItem
                className={ProfessorStyle['publication-item']}
                key={publication}>
                <ListItemIcon>
                  {idx + 1}.
                </ListItemIcon>
                <ListItemText className={ProfessorStyle['publication-text']}>
                  {publication}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
      <Grid
        className={ProfessorStyle['container']}
        container>
        <Grid className={ProfessorStyle['publication']}
          item xs={12} sm={12} md={12} lg={12} xl={12}>
          <List subheader={
            <ListSubheader disableSticky={true}>
              Conference Papers
            </ListSubheader>
          }>
            {conferences.map((publication, idx) => (
              <ListItem
                className={ProfessorStyle['publication-item']}
                key={publication}>
                <ListItemIcon>
                  {idx + 1}.
                </ListItemIcon>
                <ListItemText className={ProfessorStyle['publication-text']}>
                  {publication}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
      <Grid
        className={ProfessorStyle['container']}
        container>
        <Grid className={ProfessorStyle['publication']}
          item xs={12} sm={12} md={12} lg={12} xl={12}>
          <List subheader={
            <ListSubheader disableSticky={true}>
              Thesis
            </ListSubheader>
          }>
            <ListItem className={ProfessorStyle['publication-item']}>
              <ListItemIcon>
                1.
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['publication-text']}>
                H.-Y. Kao,
                &quot;Informative Structure and Information Hierarchy Mining in
                a Systematic Web Site,&quot;
                Ph.D Thesis,
                Department of Electrical Engineering at National Taiwan
                University,
                R.O.C.
              </ListItemText>
            </ListItem>
            <ListItem className={ProfessorStyle['publication-item']}>
              <ListItemIcon>
                2.
              </ListItemIcon>
              <ListItemText className={ProfessorStyle['publication-text']}>
                H.-Y. Kao,
                &quot;Design and Implementation of a PC-based Video-On-Demand
                System&quot;
                Master Thesis,
                Department of Computer Science at National Tsing Hua University,
                R.O.C.
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  )
}
