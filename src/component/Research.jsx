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
import Pagination from '@material-ui/lab/Pagination';
import PersonIcon from '@material-ui/icons/Person'
import PropTypes from 'prop-types'
import React from 'react'
import ResearchStyle from 'src/style/Research.module.scss'
import SchoolIcon from '@material-ui/icons/School'
import Slider from '@material-ui/core/Slider'

import { researchData } from 'src/res/data/research.js'

// Get all topics.
const allTopics = Array.from(
  new Set(researchData.map((research) => research.topic)),
).sort()

// Get all subfields.
const allSubfields = Array.from(
  new Set([].concat(
    ...researchData
      .map((research) => research.subfields)
      .filter(Boolean),
  )),
).sort()

const allYr = Array.from(new Set(researchData.map((research => research.year))))
const defaultStartYr = Math.min(...allYr)
const defaultEndYr = Math.max(...allYr)
const defaultTopic = 'all'
const defaultSubfields = []
const defaultPage = 1
const maxNumItemPerPage = 12;

function ResearchFilter(props) {
  return (
    <>
      <Grid
        className={ResearchStyle['research-time-filter']}
        item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Slider
          className={ResearchStyle['time-filter']}
          marks={true}
          max={defaultEndYr}
          min={defaultStartYr}
          onChange={props.handleTimeChange}
          step={1}
          value={[props.startYr, props.endYr]}
          valueLabelDisplay='on'
        />
      </Grid>
      <Grid
        className={ResearchStyle['research-topic-filter']}
        item xs={12} sm={12} md={12} lg={12} xl={12}>
        {
          allTopics.map((topic) => (
            <Chip
              className={ResearchStyle['topic-filter']}
              clickable
              deleteIcon={<DoneIcon />}
              icon={<LoyaltyIcon />}
              key={topic}
              label={topic}
              onClick={() => props.handleTopicChange(topic)}
              onDelete={props.topic === topic ? () => { } : null}
            />
          ))
        }
      </Grid>
      <Grid
        className={ResearchStyle['research-subfield-filter']}
        item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Hidden mdDown>
          {
            allSubfields.map((subfield) => (
              <Chip
                className={ResearchStyle['subfield-filter']}
                clickable
                deleteIcon={<DoneIcon />}
                icon={<LoyaltyIcon />}
                key={subfield}
                label={subfield}
                onClick={() => props.handleSubfieldChange(subfield)}
                onDelete={props.subfields.includes(subfield) ? () => { } : null}
              />
            ))
          }
        </Hidden>
      </Grid>
    </>
  )
}

ResearchFilter.propTypes = {
  startYr: PropTypes.number,
  endYr: PropTypes.number,
  topic: PropTypes.string,
  subfields: PropTypes.array,
  handleFilterChange: PropTypes.func,
  handleTimeChange: PropTypes.func,
  handleSubfieldChange: PropTypes.func,
}

function ResearchCard(props) {
  return (
    <Card className={ResearchStyle['research']}>
      <CardActionArea>
        <CardContent>
          <h2 className={ResearchStyle['research-title']}>
            {props.title}
          </h2>
        </CardContent>
        <CardContent className={ResearchStyle['research-tags']}>
          {
            props.authors.map((author) => (
              <Chip
                className={ResearchStyle['research-tag-author']}
                key={author}
                icon={<PersonIcon />}
                label={author}
                size='small'
                variant='outlined' />
            ))
          }
          <Chip
            className={ResearchStyle['research-tag-venue']}
            icon={<SchoolIcon />}
            label={props.venue}
            size='small' />
          <Chip
            className={ResearchStyle['research-tag-year']}
            icon={<CalendarTodayIcon />}
            label={props.year}
            size='small' />
          <Chip
            className={ResearchStyle['research-tag-topic']}
            icon={<LoyaltyIcon />}
            label={props.topic}
            size='small' />
          {
            props.subfields
            &&
            props.subfields.map((subfield) => (
              <Chip
                className={ResearchStyle['research-tag-subfield']}
                icon={<LoyaltyIcon />}
                key={subfield}
                label={subfield}
                size='small' />
            ))
          }
        </CardContent>
        <CardContent className={ResearchStyle['research-tags']}>
          {
            props.url
            &&
            <Chip
              className={ResearchStyle['research-tag-link']}
              clickable
              component='a'
              href={props.url}
              icon={<LibraryBooksIcon />}
              label='Paper'
              size='small' />
          }
          {
            props.code
            &&
            <Chip
              className={ResearchStyle['research-tag-link']}
              clickable
              component='a'
              href={props.code}
              icon={<CodeIcon />}
              label='Source code'
              size='small' />
          }
          {
            props.demo
            &&
            <Chip
              className={ResearchStyle['research-tag-link']}
              clickable
              component='a'
              href={props.demo}
              icon={<LaunchIcon />}
              label='Demo'
              size='small' />
          }
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

ResearchCard.propTypes = {
  title: PropTypes.string,
  authors: PropTypes.array,
  venue: PropTypes.string,
  year: PropTypes.number,
  topic: PropTypes.string,
  subfields: PropTypes.array,
  url: PropTypes.string,
  code: PropTypes.string,
  demo: PropTypes.string,
}

export default function Research() {
  const [startYr, setStartYr] = React.useState(defaultStartYr)
  const [endYr, setEndYr] = React.useState(defaultEndYr)
  const [topic, setTopic] = React.useState(defaultTopic)
  const [subfields, setSubfields] = React.useState(defaultSubfields)
  const [page, setPage] = React.useState(defaultPage)


  const handleTimeChange = (_, [newStartYr, newEndYr]) => {
    if (startYr !== newStartYr)
      setStartYr(newStartYr)
    if (endYr !== newEndYr)
      setEndYr(newEndYr)
  }
  const handleTopicChange = (newTopic) => {
    if (topic === newTopic)
      setTopic(defaultTopic)
    else
      setTopic(newTopic)
  }
  const handleSubfieldChange = (newSubfield) => {
    const newSubfields = subfields.filter(subfield => subfield !== newSubfield)

    // Add newSubfield to selected group if not selected.
    if (newSubfields.length === subfields.length)
      setSubfields([...subfields, newSubfield])
    // Remove newSubfield from selected group.
    else
      setSubfields(newSubfields)
  }
  const handlePageChange = (event, newPage) => {
    if (page !== newPage) {
      setPage(newPage)

      // Scroll to begin after page changed.
      const anchor = (event.target.ownerDocument || document)
        .querySelector('#back-to-top-anchor');

      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  // Filter out data by year range, topic and subfields.
  const filteredResearchData = researchData
    .filter(research => startYr <= research.year && research.year <= endYr)
    .filter(research => topic === defaultTopic || topic === research.topic)
    .filter(research => {
      // (OR operation) If no subfields were selected, than keep all subfields.
      if (subfields.length === 0)
        return true
      // (AND operation) if some subfields were selected, than keep data which
      // subfields including the selected subfields.
      if (subfields.every((subfield) => research.subfields.includes(subfield)))
        return true
      return false
    })

  let totalPage = Math.floor(filteredResearchData.length / maxNumItemPerPage)
  if (filteredResearchData.length % maxNumItemPerPage > 0)
    totalPage += 1

  const startIdx = (page - 1) * maxNumItemPerPage
  const endIdx = startIdx + maxNumItemPerPage

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
        startYr={startYr}
        endYr={endYr}
        topic={topic}
        subfields={subfields}
        handleTimeChange={handleTimeChange}
        handleTopicChange={handleTopicChange}
        handleSubfieldChange={handleSubfieldChange}
      />
      <Grid
        container
        id='back-to-top-anchor'
        item xs={12} sm={12} md={12} lg={12} xl={12}>
        {
          filteredResearchData.slice(startIdx, endIdx).map(research => (
            <Grid
              item xs={12} sm={6} md={4} lg={3} xl={2}
              key={research.title + research.venue}>
              <ResearchCard
                title={research.title}
                authors={research.authors}
                venue={research.venue}
                year={research.year}
                topic={research.topic}
                subfields={research.subfields}
                url={research.url}
                code={research.code}
                demo={research.demo}
              />
            </Grid>
          ))
        }
      </Grid>
      <Grid
        className={ResearchStyle['research-page']}
        container
        item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Hidden smUp>
          {
            totalPage ?
              <Pagination
                count={totalPage}
                onChange={handlePageChange}
                page={page}
                siblingCount={0}
                size='small' />
              :
              '0 matched result'
          }
        </Hidden>
        <Hidden xsDown>
          {
            totalPage ?
              <Pagination
                count={totalPage}
                onChange={handlePageChange}
                page={page}
                siblingCount={1}
                size='large' />
              :
              '0 matched result'
          }
        </Hidden>
      </Grid>
    </Grid>
  )
}
