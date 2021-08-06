import AppBar from '@material-ui/core/AppBar'
import HomeIcon from '@material-ui/icons/Home'
import IconButton from '@material-ui/core/IconButton'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import Link from '@material-ui/core/Link'
import PeopleIcon from '@material-ui/icons/People'
import PersonIcon from '@material-ui/icons/Person'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'

import HeaderStyle from 'src/style/Header.module.scss'
import logoImage from 'src/res/image/logo.png'

export default function Header() {
  const [isOpen, setOpen] = React.useState(false)

  const toggleDrawer = (open) => {
    // function copy directly from mui's drawer demo code.
    return (event) => {
      if (event &&
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')) {
        return
      }

      setOpen(open)
    }
  }

  return (
    <AppBar position='static'>
      <Toolbar
        className={HeaderStyle['toolbar']}
        variant='regular'
      >
        <IconButton>
           <HomeIcon
                  className={HeaderStyle['hotbar-icon']}
                  titleAccess='Home' />
           <Link
                  className={HeaderStyle['hotbar-text']}
                  href={`${PUBLIC_URL}home.html`}>
                  &#160;Home
           </Link>
        </IconButton>
        <IconButton>
            <PersonIcon
                  className={HeaderStyle['hotbar-icon']}
                  titleAccess='Advisor' />
            <Link
                  className={HeaderStyle['hotbar-text']}
                  href={`${PUBLIC_URL}advisor.html`}>
                  &#160;Advisor
            </Link>
        </IconButton>
        <IconButton>
            <PeopleIcon
                  className={HeaderStyle['hotbar-icon']}
                  titleAccess='Member' />
            <Link
                  className={HeaderStyle['hotbar-text']}
                  href={`${PUBLIC_URL}member.html`}>
                  &#160;Member
            </Link>
        </IconButton>
        <IconButton>
            <LibraryBooksIcon
                  className={HeaderStyle['hotbar-icon']}
                  titleAccess='Research' />
            <Link
                  className={HeaderStyle['hotbar-text']}
                  href={`${PUBLIC_URL}research.html`}>
                  &#160;Research
            </Link>
        </IconButton>
        <Link
          className={HeaderStyle['logo-link']}
          href={`${PUBLIC_URL}home.html`}>
          <img
            alt='IKMLab logo'
            className={HeaderStyle['logo']}
            role='img'
            src={logoImage} />
        </Link>
      </Toolbar>
    </AppBar>
  )
}
