import AssignmentIcon from '@material-ui/icons/Assignment'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
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

function EducationContent() {
  const textContent = [
    [
      `Ph.D.,
      Department of Electrical Engineering,
      National Taiwan University`,
      `1999.8 ~ 2003.7`,
    ],
    [
      `M.S.,
      Department of Computer Science,
      National Tsing Hua University`,
      `1994.8 ~ 1996.7`,
    ],
    [
      `B.S.,
      Department of Computer Science,
      National Tsing Hua University `,
      `1990.8 ~ 1994.7`,
    ],
  ]

  return (
    <List subheader={
      <ListSubheader disableSticky={true}>
        Education
      </ListSubheader>
    }>
      {textContent.map((text, index) => {
        return (
          <ListItem key={index} className={ProfessorStyle['education-item']}>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText className={ProfessorStyle['education-text']}>
              {text[0]} <br /> {text[1]}
            </ListItemText>
          </ListItem>)
      })}
    </List>
  )
}

function ResearchContent() {
  const textContent = [
    `Natural Language Processing`,
    `Information Retrieval / Extraction`,
    `Big / Web Data Mining`,
    `Bioinformatics`,
  ]
  return (
    <List subheader={
      <ListSubheader disableSticky={true}>
        Research
      </ListSubheader>
    }>
      {textContent.map((text, index) => {
        return (
          <ListItem key={index} className={ProfessorStyle['research-item']}>
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText className={ProfessorStyle['research-text']}>
              {text}
            </ListItemText>
          </ListItem>
        )
      })}
    </List>
  )
}

function ExperienceContent() {
  const textContent = [
    [
      `Professor,
      Department of Computer Science (CS), NTHU`,
      `2024.8 ~ now`,
    ],
    [
      `Vice Dean,
      College of Electrical Engineering and Computer Science
      (EECS), NCKU`,
      `2021.8 ~ 2024.7`,
    ],
    [
      `Distinguished Professor,
      Department of Computer Science and Information Engineering (CSIE), NCKU`,
      `2023.2 ~ 2024.7`,
    ],
    [
      `Chair,
      Ph.D. Program of Multimedia system and intelligent computing
      , NCKU`,
      `2021.8 ~ 2024.7`,
    ],
    [
      `Director,
      Department of Computer Science and Information Engineering
      (CSIE), NCKU`,
      `2018.2 ~ 2021.1`,
    ],
    [
      `Director,
      Institute of Medical Informatics (IMI),
      NCKU`,
      `2015.8 ~ 2018.7`,
    ],
    [
      `Chair,
      IEEE Computational Intelligence Society (CIS) Tainan Chapter`,
      `2017.8 ~ 2021.7`,
    ],
    [
      `Vice Chair,
      IEEE Computational Intelligence Society (CIS) Tainan Chapter`,
      `2015.8 ~ 2017.7`,
    ],
    [
      `Professor,
      Department of Computer Science and Information Engineering
      (CSIE), NCKU`,
      `2014.8 ~ 2024.7`,
    ],
    [
      `Adjunct Professor,
      Institute of Medical Informatics (IMI),
      NCKU`,
      `2014.8 ~ 2024.7`,
    ],
    [
      `Associate Professor,
      Department of Computer Science and Information Engineering
      (CSIE), NCKU`,
      `2011.8 ~ 2014.7`,
    ],
    [
      `Adjunct Associate Professor,
      Institute of Medical Informatics (IMI),
      NCKU`,
      `2011.8 ~ 2014.7`,
    ],
    [
      `Secretary General,
      IEEE Computational Intelligence Society (CIS) Tainan Chapter`,
      `2013.8 ~ 2015.7`,
    ],
    [
      `Assistant Professor,
      Department of Computer Science and Information Engineering
      (CSIE), NCKU`,
      `2004.8 ~ 2011.7`,
    ],
    [
      `Post-doctoral Fellow,
      Computer System and Communication Laboratory,
      Institute of Information Science,
      Academia Sinica`,
    ],
  ]


  return (
    <List subheader={
      <ListSubheader disableSticky={true}>
        Experience
      </ListSubheader>
    }>
      {textContent.map((text, index) => {
        return (
          <ListItem key={index} className={ProfessorStyle['experience-item']}>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText className={ProfessorStyle['experience-text']}>
              {text[0]} <br /> {text[1]}
            </ListItemText>
          </ListItem>
        )
      })}
    </List>
  )
}

function HonorContent() {
  const textContent = [
    [
      `National Cheng Kung University Teaching Award`,
      `2015, 2021`,
    ],
    [
      `National Cheng Kung University College EECS Outstanding Mentoring
      Award`,
      `2014`,
    ],
    [
      `National Cheng Kung University Distinguished Teaching Award`,
      `2011`,
    ],
    [
      `BioCreAtIvE III Competition, Gene Normalization Task, 1st award
      Winner`,
      `2010`,
    ],
    [
      `Research Grant of Intel Research Quad Core Seeding Program`,
      `2007`,
    ],
    [
      `Biographical Listings in IBC (International Biographical Centre,
        Cambridge, England) Leading Scientists of the World`,
      `2008`,
    ],
    [
      `Biographical Listings in Marquis's Who's Who in the
      World 25th ~ 27th Silver Anniversary Edition`,
      `2008 ~ 2010`,
    ],
    [
      `Biographical Listings in Marquis's Who's Who in
      Science and Engineering 9th, 10th Anniversary Edition`,
      `2006 ~ 2007, 2007 ~ 2008`,
    ],
    [
      `Long Term Award for PhD Thesis, Acer Foundation`,
      `2003`,
    ],
  ]

  return (
    <List subheader={
      <ListSubheader disableSticky={true}>
        Honor
      </ListSubheader>
    }>
      {textContent.map((text, index) => {
        return (
          <ListItem key={index} className={ProfessorStyle['honor-item']}>
            <ListItemIcon>
              <EmojiEventsIcon />
            </ListItemIcon>
            <ListItemText className={ProfessorStyle['honor-text']}>
              {text[0]} <br /> {text[1]}
            </ListItemText>
          </ListItem>
        )
      })}
    </List>
  )
}

function CourseContent() {
  const textContent = [
    [
      `Data Mining`,
      `2017 Fall`,
    ],
    [
      `Discrete Mathematics`,
      `2008 ~ 2015 Spring`,
    ],
    [
      `Web Programming I`,
      `2004 ~ 2008 Fall`,
    ],
    [
      `Algorithms`,
      `2004 ~ 2007 Fall`,
    ],
    [
      `Web Information Retrieval and Text Mining`,
      `2005 ~ 2007 Spring, 2008 ~ 2012 Fall`,
    ],
    [
      `Special Topics in Text Data Mining`,
      `2009 ~ 2012 Fall`,
    ],
    [
      `Web Information Retrieval and Text Mining`,
      `2005 ~ 2007 Spring, 2008 ~ 2012 Fall`,
    ],
    [
      `Bioinformatics Programming`,
      `2005 ~ 2009 Summer`,
    ],
  ]

  return (
    <List subheader={
      <ListSubheader disableSticky={true}>
        Course
      </ListSubheader>
    }>
      {textContent.map((text, index) => {
        return (
          <ListItem key={index} className={ProfessorStyle['course-item']}>
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText className={ProfessorStyle['course-text']}>
              {text[0]} <br /> {text[1]}
            </ListItemText>
          </ListItem>
        )
      })}
    </List>
  )
}

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
            Department of Computer Science at National Tsing Hua University
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
                  href='tel:+88635731214'>
                  +886-3-5731214
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
                  href='mailto:hykao@cs.nthu.edu.tw'>
                  hykao@cs.nthu.edu.tw
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
                  Rm. 633, Delta building,<br />
                  101, Section 2, Kuang-Fu Road, Hsinchu 300044,<br />
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
      <Grid // Professor intro
        className={ProfessorStyle['container']}
        container>
        <Grid
          className={ProfessorStyle['intro']}
          item xs={12}>
          <Typography className={ProfessorStyle['intro-text']}>
            HUNG-YU KAO received the B.S. and M.S. degrees in Computer Science from National Tsing Hua University in 1994 and 1996, respectively. In July 2003, he received a PhD degree from the Electrical Engineering Department, National Taiwan University. He is currently a professor at the Department of Computer Science of National Tsing Hua University (NTHU). He was the vice Dean of the College of EECS in National Cheng Kung University (NCKU) from 2021 to 2024 and the Director of Dept. CSIE of NCKU from 2018 to 2021. He was the chair of IEEE CIS Tainan Chapter from 2017 to 2021.
            <br />
            His research interests include Natural Language Processing, Machine learning, Web information retrieval/extraction, knowledge management, data mining, social network analysis, and bioinformatics. He has published over 140 research papers in refereed international journals (IEEE TKDE, TAI, TASLP) and conference proceedings, including AAAI, ACL, and EMNLP. He is the Associate Editor of IEEE/ACM Transactions on Audio, Speech, and Language Processing. He is a member of IEEE and ACM.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        className={ProfessorStyle['container']}
        container>
        <Grid className={ProfessorStyle['education']}
          item xs={12} sm={6} md={6} lg={6} xl={6}>
          <EducationContent />
        </Grid>
        <Grid className={ProfessorStyle['research']}
          item xs={12} sm={6} md={6} lg={6} xl={12}>
          <ResearchContent />
        </Grid>
      </Grid>
      <Grid
        className={ProfessorStyle['container']}
        container>
        <Grid className={ProfessorStyle['experience']}
          item xs={12} sm={6} md={6} lg={6} xl={6}>
          <ExperienceContent />
        </Grid>
        <Grid className={ProfessorStyle['honor']}
          item xs={12} sm={6} md={6} lg={6} xl={6}>
          <HonorContent />
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
          <CourseContent />
        </Grid>
      </Grid>
      <Grid
        className={ProfessorStyle['publication-divider']}
        container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          Publications
        </Grid>
      </Grid>
      <Grid
        className={ProfessorStyle['publication-divider']}
        container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Breadcrumbs aria-label='breadcrumb'>
            <Link href='https://www.researchgate.net/profile/Hung-Yu-Kao?ev=hdr_xprf'>
              RG
            </Link>
            <Link href='https://scholar.google.com.tw/citations?user=X5Is2lAAAAAJ&hl=zh-TW'>
              Google Scholar
            </Link>
            <Link href='https://dblp.uni-trier.de/pid/64/5833.html'>
              DBLP
            </Link>
            <Link href='https://www.semanticscholar.org/author/Hung-Yu-Kao/1738550'>
              Semantic Scholar
            </Link>
            <Link href='https://scholargps.com/search.php?q=Hung-Yu+Kao&global_search_type=scholar&type=global'>
              ScholarGPS
            </Link>
            <Link href='https://orcid.org/0000-0002-8890-8544'>
              ORCID
            </Link>
          </Breadcrumbs>
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
