import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Chip from '@material-ui/core/Chip'
import CodeIcon from '@material-ui/icons/Code'
import Grid from '@material-ui/core/Grid'
import LaunchIcon from '@material-ui/icons/Launch'
import LinkIcon from '@material-ui/icons/Link'
import LoyaltyIcon from '@material-ui/icons/Loyalty'
import PersonIcon from '@material-ui/icons/Person'
import SchoolIcon from '@material-ui/icons/School'
import ResearchStyle from 'src/style/Research.module.scss'
import {researchData} from 'src/res/data/research.js'

export default class Research extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // Split into 4 tracks.
    const researchSplits = [[], [], [], []]
    researchData
        .sort((r1, r2)=>r2.year-r1.year)
        .sort((r1, r2)=>r1.topic>r2.topic)
        .forEach((research, index)=>{
          researchSplits[index % researchSplits.length].push(research)
        })

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
                      label={`${research.venue} ${research.year}`}
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
                </CardActionArea>
                <CardActions className={ResearchStyle['research-tags']}>
                  {research.url &&
                <Chip
                  className={ResearchStyle['research-tag-link']}
                  clickable
                  component='a'
                  href={research.url}
                  icon={<LinkIcon/>}
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
                </CardActions>
              </Card>
            ))}
          </Grid>
        ))}
      </Grid>
    )
  }
}
