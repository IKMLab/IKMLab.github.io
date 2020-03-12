import React from 'react'
import PropTypes from 'prop-types'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Chip from '@material-ui/core/Chip'
import CodeIcon from '@material-ui/icons/Code'
import DoneIcon from '@material-ui/icons/Done'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import LaunchIcon from '@material-ui/icons/Launch'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import LoyaltyIcon from '@material-ui/icons/Loyalty'
import PersonIcon from '@material-ui/icons/Person'
import SchoolIcon from '@material-ui/icons/School'
import Slider from '@material-ui/core/Slider'
import ResearchStyle from 'src/style/Research.module.scss'
import {researchData} from 'src/res/data/research.js'


// Get all topics.
const allTopics = Array.from(
    new Set(researchData.map((research)=>research.topic)),
).sort()

// Get all subfields.
const allSubfields = Array.from(
    new Set([].concat(
        ...researchData
            .map((research)=>research.subfields)
            .filter(Boolean),
    )),
).sort()

class ResearchFilter extends React.Component {
  constructor(props) {
    super(props)

    this.handleTimeChange=this.handleTimeChange.bind(this)
    this.handleTopicChange=this.handleTopicChange.bind(this)
    this.handleSubfieldChange=this.handleSubfieldChange.bind(this)
  }

  handleTimeChange(_, value) {
    this.props.handleFilterChange({
      yearBegin: value[0],
      yearEnd: value[1],
    })
  }

  handleTopicChange(topic) {
    // If topic is already clicked.
    if (this.props.topic === topic) {
      this.props.handleFilterChange({
        topic: 'all',
      })
      return
    }

    // Topic is not clicked before.
    this.props.handleFilterChange({
      topic,
    })
  }

  handleSubfieldChange(subfield) {
    // If subfield is already clicked, then remove from the clicked list.
    if (this.props.subfields.includes(subfield)) {
      const index = this.props.subfields.indexOf(subfield)
      this.props.handleFilterChange({
        subfields:
          this.props.subfields.slice(0, index).concat(
              this.props.subfields.slice(
                  index+1,
                  this.props.subfields.length,
              ),
          ),
      })
      return
    }
    // Subfield is not clicked before, so add to the clicked list.

    this.props.handleFilterChange({
      subfields: this.props.subfields.concat([subfield]).sort(),
    })
  }

  render() {
    return (
      <>
        <Grid
          className={ResearchStyle['research-time-filter']}
          item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Slider
            className={ResearchStyle['time-filter']}
            value={[
              this.props.yearBegin,
              this.props.yearEnd,
            ]}
            min={this.props.yearBeginDefault}
            max={this.props.yearEndDefault}
            marks={true}
            onChange={this.handleTimeChange}
            valueLabelDisplay='on'
          />
        </Grid>
        <Grid
          className={ResearchStyle['research-topic-filter']}
          item xs={12} sm={12} md={12} lg={12} xl={12}>
          {
            allTopics.map((topic)=>(
              <Chip
                className={ResearchStyle['topic-filter']}
                clickable
                deleteIcon={<DoneIcon/>}
                icon={<LoyaltyIcon/>}
                key={topic}
                label={topic}
                onClick={()=>this.handleTopicChange(topic)}
                onDelete={this.props.topic === topic ?
                  ()=>{}:null}
              />
            ))
          }
        </Grid>
        <Grid
          className={ResearchStyle['research-subfield-filter']}
          item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Hidden mdDown>
            {
              allSubfields.map((subfield)=>(
                <Chip
                  className={ResearchStyle['subfield-filter']}
                  clickable
                  deleteIcon={<DoneIcon/>}
                  icon={<LoyaltyIcon/>}
                  key={subfield}
                  label={subfield}
                  onClick={()=>this.handleSubfieldChange(subfield)}
                  onDelete={this.props.subfields.includes(subfield)?
                  ()=>{}:null}
                />
              ))
            }
          </Hidden>
        </Grid>
      </>
    )
  }
}

ResearchFilter.propTypes = {
  yearBegin: PropTypes.number,
  yearBeginDefault: PropTypes.number,
  yearEnd: PropTypes.number,
  yearEndDefault: PropTypes.number,
  topic: PropTypes.string,
  subfields: PropTypes.array,
  handleFilterChange: PropTypes.func,
}

class ResearchCard extends React.Component {
  constructor(props) {
    super(props)
  }

  heightAlgorithm() {
    // style compoenent's width
    const iconWidth = 2
    const chipMarginWidth = 3
    const breakPoint = 30
    // Split into `this.props.split` tracks.
    const researchSplits = []
    const researchSplitsHeight = []
    console.log(this.props.split)
    for (let i=0; i<this.props.split; ++i) {
      researchSplits.push([])
      researchSplitsHeight.push(0)
    }
    // Split into different tracks according to component's total height.
    this.props.researchs.forEach((research)=>{
      // Consider all text fields.
      // Non-existed fields will be filtered.
      const heightTarget = [].concat(...[
        // `research.title` is 2 times wide because it is bold.
        [research.title, research.title],
        research.authors,
        [research.venue],
        // Number do not have `length` attribute, so convert to string.
        [String(research.year)],
        [research.topic],
        research.subfields,
        // We render `Paper, `Source Code`, and `Demo`.
        ['Paper'],
        research.code && ['Source Code'],
        research.demo && ['Demo'],
      ].filter(Boolean))

      // Card height.
      let researchHeight = 0
      // Current line length.
      let currentLength = 0
      heightTarget.forEach((target)=>{
        // Each chip have icon.
        currentLength += (iconWidth + target.length)
        // Switch line when current line is longer then breakpoint.
        if (currentLength >= breakPoint) {
          currentLength = 0
          ++researchHeight
        } else {
          // Next chip will have space in front.
          currentLength += chipMarginWidth
        }
      })

      // Find the minimum height track and put element into it.
      const minLenIndex = researchSplitsHeight
          .indexOf(Math.min(...researchSplitsHeight))
      researchSplits[minLenIndex].push(research)
      // Update tracks total height.
      researchSplitsHeight[minLenIndex] += researchHeight
    })
    return researchSplits
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.split !== nextProps.split) {
      return true
    }
    // We already sorted before, so we only need to compare index.
    if (this.props.researchs.length && this.props.researchs.every(
        (research, index)=>research===nextProps[index])
    ) {
      return false
    }
    return true
  }

  render() {
    const researchSplits = this.heightAlgorithm()
    return (
      <>
        {researchSplits.map((researchSplit, index)=>(
          <Grid
            key={index}
            item xs={12} sm={6} md={4} lg={3} xl={2}>
            {researchSplit.map((research, index)=>(
              <Card
                className={ResearchStyle['research']}
                key={index}>
                <CardActionArea>
                  <CardContent>
                    <h2 className={ResearchStyle['research-title']}>
                      {research.title}
                    </h2>
                  </CardContent>
                  <CardContent className={ResearchStyle['research-tags']}>
                    {research.authors.map((author)=>(
                      <Chip
                        className={ResearchStyle['research-tag-author']}
                        key={author}
                        icon={<PersonIcon/>}
                        label={author}
                        size='small'
                        variant='outlined'/>
                    ))}
                    <Chip
                      className={ResearchStyle['research-tag-venue']}
                      icon={<SchoolIcon/>}
                      label={research.venue}
                      size='small'/>
                    <Chip
                      className={ResearchStyle['research-tag-year']}
                      icon={<CalendarTodayIcon/>}
                      label={research.year}
                      size='small'/>
                    <Chip
                      className={ResearchStyle['research-tag-topic']}
                      icon={<LoyaltyIcon/>}
                      label={research.topic}
                      size='small'/>
                    {research.subfields &&
                   research.subfields.map((subfield)=>(
                     <Chip
                       className={ResearchStyle['research-tag-subfield']}
                       icon={<LoyaltyIcon/>}
                       key={subfield}
                       label={subfield}
                       size='small'/>
                   ))}
                  </CardContent>
                  <CardContent className={ResearchStyle['research-tags']}>
                    {research.url &&
                <Chip
                  className={ResearchStyle['research-tag-link']}
                  clickable
                  component='a'
                  href={research.url}
                  icon={<LibraryBooksIcon/>}
                  label='Paper'
                  size='small'/>}
                    {research.code &&
                <Chip
                  className={ResearchStyle['research-tag-link']}
                  clickable
                  component='a'
                  href={research.code}
                  icon={<CodeIcon/>}
                  label='Source code'
                  size='small'/>}
                    {research.demo &&
                <Chip
                  className={ResearchStyle['research-tag-link']}
                  clickable
                  component='a'
                  href={research.demo}
                  icon={<LaunchIcon/>}
                  label='Demo'
                  size='small'/>}
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Grid>
        ))}
      </>
    )
  }
}

ResearchCard.propTypes = {
  researchs: PropTypes.array,
  split: PropTypes.number,
}

export default class Research extends React.Component {
  constructor(props) {
    super(props)

    const currentYear = new Date(Date.now()).getFullYear()
    this.state = {
      yearBegin: 2006,
      yearBeginDefault: 2006,
      yearEnd: currentYear,
      yearEndDefault: currentYear,
      topic: 'all',
      subfields: [],
      split: this.constructor.getSplitAlgorithm(),
    }
    this.handleWindowResize = this.handleWindowResize.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  static getSplitAlgorithm() {
    const currentWindowWidth = window.innerWidth
    // We follow Material UI's break point. For screen size smaller than 600px
    // we use only 1 split. For screen size between 600px and 960px we use 2
    // splits. For screen size between 960px and 1280px we use 3 splits. For
    // screen size between 1280px and 1920px we use 4 splits. For screen size
    // above 1920px we use 6 splits.
    return currentWindowWidth < 600 ? 1 :
      currentWindowWidth < 960 ? 2 :
      currentWindowWidth < 1280 ? 3 :
      currentWindowWidth < 1920 ? 4 : 6
  }

  componentDidMount() {
    window.onresize = this.handleWindowResize
  }

  handleWindowResize() {
    const split = this.constructor.getSplitAlgorithm()
    if (split !== this.state.split) {
      this.setState((prevState)=>({
        ...prevState,
        split,
      }))
    }
  }

  handleFilterChange({
    yearBegin,
    yearEnd,
    topic,
    subfields,
  } = {}) {
    this.setState((prevState)=>({
      yearBegin:
        yearBegin ? yearBegin : prevState.yearBegin,
      yearEnd:
        yearEnd ? yearEnd : prevState.yearEnd,
      topic:
        topic ? topic : prevState.topic,
      subfields:
        subfields ? subfields : prevState.subfields,
    }))
  }

  render() {
    const researchs = researchData
        .filter((research)=>research.year >= this.state.yearBegin)
        .filter((research)=>research.year <= this.state.yearEnd)
        // Only one `topics` is active at the same time.
        // Let user select topics they interest.
        // If no topic were choose, then all topic will be show.
        .filter((research)=>(this.state.topic === 'all' ||
          this.state.topic === research.topic))
        // Perform AND operation on `subfields`.
        // Let user select subfields combination they interest.
        .filter((research)=>!this.state.subfields.length ||
          this.state.subfields.every(
              (subfield)=>research.subfields.includes(subfield),
          ))
        // Sort `researchData` according to year and topic.
        // This must be done in order to compare fast.
        .sort((r1, r2)=>{
          if (r1.year !== r2.year) {
            return r2.year-r1.year
          }
          return r1.topic>r2.topic
        })

    return (
      <Grid
        className={ResearchStyle['research-section']}
        container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <h1
            className={ResearchStyle['research-section-title']}>
            Research
          </h1>
        </Grid>
        <ResearchFilter
          yearBegin={this.state.yearBegin}
          yearBeginDefault={this.state.yearBeginDefault}
          yearEnd={this.state.yearEnd}
          yearEndDefault={this.state.yearEndDefault}
          topic={this.state.topic}
          subfields={this.state.subfields}
          handleFilterChange={this.handleFilterChange}
        />
        <Grid container item xs={12} sm={12} md={12} lg={12} xl={12}>
          <ResearchCard
            researchs={researchs}
            split={this.state.split}/>
        </Grid>
      </Grid>
    )
  }
}
