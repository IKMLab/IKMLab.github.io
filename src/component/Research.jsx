import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Chip from '@material-ui/core/Chip'
import CodeIcon from '@material-ui/icons/Code'
import Grid from '@material-ui/core/Grid'
import LaunchIcon from '@material-ui/icons/Launch'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import LoyaltyIcon from '@material-ui/icons/Loyalty'
import PersonIcon from '@material-ui/icons/Person'
import SchoolIcon from '@material-ui/icons/School'
import ResearchStyle from 'src/style/Research.module.scss'
import {researchData} from 'src/res/data/research.js'

export default class Research extends React.Component {
  constructor(props) {
    super(props)
  }

  static heightAlgorithm() {
    // style compoenent's width
    const iconWidth = 2
    const chipMarginWidth = 3
    const breakPoint = 30
    // Split into 4 tracks.
    const researchSplits = [[], [], [], []]
    const researchSplitsHeight = [0, 0, 0, 0]
    // First sorted by year and topic, then split into
    // different tracks by component's total height.
    researchData
        .sort((r1, r2)=>{
          if (r1.year !== r2.year) {
            return r2.year-r1.year
          }
          return r1.topic>r2.topic
        })
        .forEach((research)=>{
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

  render() {
    const researchSplits = this.constructor.heightAlgorithm()
    return (
      <Grid
        className={ResearchStyle['research-wrapper']}
        container>
        <Grid
          item
          xl={12}>
          <h1
            className={ResearchStyle['research-section-title']}>
            Research
          </h1>
        </Grid>
        {researchSplits.map((researchSplit, index)=>(
          <Grid
            item
            key={index}
            xl={2}>
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
                      icon={<SchoolIcon/>}
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
      </Grid>
    )
  }
}
