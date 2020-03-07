import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import QuoteStyle from 'src/style/Quote.module.scss'

export default class Quote extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Box className={QuoteStyle['quote-wrapper-out']}>
        <Grid
          className={QuoteStyle['quote-wrapper-in']}
          container>
          <q className={QuoteStyle['quote-text']}>
            In God we trust,<br/>
            all others must bring data.
          </q>
          <span className={QuoteStyle['quote-author']}>
            - William Edwards Deming
          </span>
        </Grid>
      </Box>
    )
  }
}
