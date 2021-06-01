import Box from '@material-ui/core/Box'
import React from 'react'

import BannerStyle from 'src/style/Banner.module.scss'
import bannerImage from 'src/res/image/background/3.png'

export default function Banner() {
  return (
    <Box className={BannerStyle['banner']}>
      <img
        className={BannerStyle['banner-image']}
        src={bannerImage} />
    </Box>
  )
}
