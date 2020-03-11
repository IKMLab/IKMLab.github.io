import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import IntroStyle from 'src/style/Intro.module.scss'

import knowledgeManagement
  from 'src/res/image/research/knowledge-management.png'
import informationRetrieval
  from 'src/res/image/research/information-retrieval.png'
import dataMining
  from 'src/res/image/research/data-mining.png'
import naturalLanguageProcessing
  from 'src/res/image/research/natural-language-processing.png'
import deepLearning
  from 'src/res/image/research/deep-learning.png'
import medicalInformatics
  from 'src/res/image/research/medical-informatics.png'

class IntroLab extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid
        className={IntroStyle['intro-lab-section']}
        container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <h2 className={IntroStyle['intro-lab-title']}>
            WHO ARE WE?
          </h2>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <p
            author='Reinald Rein Adrian & Tzu Hsuan Chou'
            className={IntroStyle['intro-lab']}>
            The
            {' '}<strong>I</strong>ntelligent
            {' '}<strong>K</strong>nowledge
            {' '}<strong>M</strong>anagement
            {' '}<strong>L</strong>aboratory
            {' '}(<strong>IKMLab</strong>) at the
            <Link href='https://web.ncku.edu.tw/index.php'>
              {' '}National Cheng Kung University
            </Link>
            {' '}is composed of talented and passionate graduate students
            {' '}(both Masters and Ph.D.) from the
            {' '}
            <Link href='http://www.csie.ncku.edu.tw/'>
              {' '}Artificial Intelligence Technology Master Program
            </Link>,
            <Link href='http://www.imi.ncku.edu.tw/'>
              {' '}Institute of Medical Informatics
            </Link>, and
            <Link href='http://www.csie.ncku.edu.tw/'>
              {' '}Department of Computer Science and Information Engineering
            </Link>.
          </p>
        </Grid>
      </Grid>
    )
  }
}

class IntroResearch extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const topics = [
      {
        image: naturalLanguageProcessing,
        text: 'Natural Language Processing',
      },
      {
        image: medicalInformatics,
        text: 'Medical Informatics',
      },
      {
        image: deepLearning,
        text: 'Deep Learning',
      },
      {
        image: dataMining,
        text: 'Data Mining',
      },
      {
        image: knowledgeManagement,
        text: 'Knowledge Management',
      },
      {
        image: informationRetrieval,
        text: 'Information Retrieval',
      },
    ]
    return (
      <Grid
        className={IntroStyle['intro-research-section']}
        container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <h2 className={IntroStyle['intro-research-title']}>
            WHAT WE DO?
          </h2>
        </Grid>
        {
          topics.map((topic)=>(
            <Grid item xs={12} sm={6} md={4} lg={4} xl={2}
              key={topic.text}>
              <Card className={IntroStyle['intro-research-topic-card']}>
                <CardMedia
                  className={IntroStyle['intro-research-topic-pic']}
                  image={topic.image}/>
                <CardContent className={IntroStyle['intro-research-topic']}>
                  {topic.text}
                </CardContent>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    )
  }
}

class IntroGoal extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Grid
        className={IntroStyle['intro-goal-section']}
        container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <h2 className={IntroStyle['intro-goal-title']}>
            GOAL
          </h2>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <p
            author='Reinald Rein Adrian'
            className={IntroStyle['intro-goal']}>
            We aim to construct novel and innovative models, improve
            {' '}existing methods, and build {' '}
            <strong>S</strong>tate-<strong>O</strong>f-<strong>
            T</strong>he-<strong>A</strong>rt applications that
            {' '}can contribute to the body of knowledge in research.
          </p>
        </Grid>
      </Grid>
    )
  }
}

export default class Intro extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <IntroLab/>
        <IntroResearch/>
        <IntroGoal/>
      </>
    )
  }
}
