import AppBar from '@material-ui/core/AppBar'
import Divider from '@material-ui/core/Divider'
import HomeIcon from '@material-ui/icons/Home'
import IconButton from '@material-ui/core/IconButton'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import Link from '@material-ui/core/Link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MenuIcon from '@material-ui/icons/Menu'
import PeopleIcon from '@material-ui/icons/People'
import PersonIcon from '@material-ui/icons/Person'
import React from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import '@fontsource/roboto'

import HeaderStyle from 'src/style/Header.module.scss'
import logoImage from 'src/res/image/logo.png'


/**
 * Mobile mode only routes.
 * @return {HTMLElement}
 *
 * Only show up in mobile mode.
 */
function MobileModeRoutes() {
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
    <>
      <IconButton
        aria-label='button'
        className={HeaderStyle['menu-icon']}
        color='inherit'
        edge='start'
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor='left'
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        open={isOpen}
        PaperProps={{
          className: HeaderStyle['drawer-paper'],
        }}
        variant='temporary'
      >
        <List className={HeaderStyle['mobile-mode-list']}>
          <ListItem>
            <Link
              className={HeaderStyle['mobile-mode-list-item-link']}
              href={`${PUBLIC_URL}home.html`}>
              <ListItemIcon
                className={HeaderStyle['mobile-mode-list-item-icon']}>
                <HomeIcon titleAccess='Home' />
              </ListItemIcon>
              <ListItemText
                className={HeaderStyle['mobile-mode-list-item-text']}>
                <Typography>
                  Home
                </Typography>
              </ListItemText>
            </Link>
          </ListItem>
          <Divider className={HeaderStyle['mobile-mode-list-item-divider']} />
          <ListItem>
            <Link
              className={HeaderStyle['mobile-mode-list-item-link']}
              href={`${PUBLIC_URL}advisor.html`}>
              <ListItemIcon
                className={HeaderStyle['mobile-mode-list-item-icon']}>
                <PersonIcon titleAccess='Advisor' />
              </ListItemIcon>
              <ListItemText
                className={HeaderStyle['mobile-mode-list-item-text']}>
                <Typography>
                  Advisor
                </Typography>
              </ListItemText>
            </Link>
          </ListItem>
          <Divider className={HeaderStyle['mobile-mode-list-item-divider']} />
          <ListItem>
            <Link
              className={HeaderStyle['mobile-mode-list-item-link']}
              href={`${PUBLIC_URL}member.html`}>
              <ListItemIcon
                className={HeaderStyle['mobile-mode-list-item-icon']}>
                <PeopleIcon titleAccess='Member' />
              </ListItemIcon>
              <ListItemText
                className={HeaderStyle['mobile-mode-list-item-text']}>
                <Typography>
                  Member
                </Typography>
              </ListItemText>
            </Link>
          </ListItem>
          <Divider className={HeaderStyle['mobile-mode-list-item-divider']} />
          <ListItem>
            <Link
              className={HeaderStyle['mobile-mode-list-item-link']}
              href={`${PUBLIC_URL}research.html`}>
              <ListItemIcon
                className={HeaderStyle['mobile-mode-list-item-icon']}>
                <LibraryBooksIcon titleAccess='Research' />
              </ListItemIcon>
              <ListItemText
                className={HeaderStyle['mobile-mode-list-item-text']}>
                <Typography>
                  Research
                </Typography>
              </ListItemText>
            </Link>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </>
  )
}

/**
 * PC mode only routes.
 * @return {HTMLElement}
 *
 * Only show up in PC mode.
 */
function PCModeRoutes() {
  return (
    <>

      <List className={HeaderStyle['pc-mode-route-list']}>
        <ListItem className={HeaderStyle['pc-mode-route-list-item']}>
          <Link
            className={HeaderStyle['pc-mode-route-list-item-link']}
            href={`${PUBLIC_URL}home.html`}>
            <IconButton
              className={HeaderStyle['pc-mode-route-list-item-button']}>
              <HomeIcon
                className={HeaderStyle['pc-mode-route-list-item-icon']}
                titleAccess='Home' />
              <ListItemText
                className={HeaderStyle['pc-mode-route-list-item-text']}>
                <Typography>
                  Home
                </Typography>
              </ListItemText>
            </IconButton>
          </Link>
        </ListItem>
        <ListItem className={HeaderStyle['pc-mode-route-list-item']}>
          <Link
            className={HeaderStyle['pc-mode-route-list-item-link']}
            href={`${PUBLIC_URL}advisor.html`}>
            <IconButton
              className={HeaderStyle['pc-mode-route-list-item-button']}>
              <PersonIcon
                className={HeaderStyle['pc-mode-route-list-item-icon']}
                titleAccess='Advisor' />
              <ListItemText
                className={HeaderStyle['pc-mode-route-list-item-text']}>
                <Typography>
                  Advisor
                </Typography>
              </ListItemText>
            </IconButton>
          </Link>
        </ListItem>
        <ListItem className={HeaderStyle['pc-mode-route-list-item']}>
          <Link
            className={HeaderStyle['pc-mode-route-list-item-link']}
            href={`${PUBLIC_URL}member.html`}>
            <IconButton
              className={HeaderStyle['pc-mode-route-list-item-button']}>
              <PeopleIcon
                className={HeaderStyle['pc-mode-route-list-item-icon']}
                titleAccess='Member' />
              <ListItemText
                className={HeaderStyle['pc-mode-route-list-item-text']}>
                <Typography>
                  Member
                </Typography>
              </ListItemText>
            </IconButton>
          </Link>
        </ListItem>
        <ListItem className={HeaderStyle['pc-mode-route-list-item']}>
          <Link
            className={HeaderStyle['pc-mode-route-list-item-link']}
            href={`${PUBLIC_URL}research.html`}>
            <IconButton
              className={HeaderStyle['pc-mode-route-list-item-button']}>
              <LibraryBooksIcon
                className={HeaderStyle['pc-mode-route-list-item-icon']}
                titleAccess='Research' />
              <ListItemText
                className={HeaderStyle['pc-mode-route-list-item-text']}>
                <Typography>
                  Research
                </Typography>
              </ListItemText>
            </IconButton>
          </Link>
        </ListItem>
      </List>
    </>
  )
}

export default function Header() {
  return (
    <AppBar position='static'>
      <Toolbar
        className={HeaderStyle['toolbar']}
        variant='regular'
      >
        <Link
          className={HeaderStyle['logo-link']}
          href={`${PUBLIC_URL}home.html`}>
          <img
            alt='IKMLab logo'
            className={HeaderStyle['logo']}
            role='img'
            src={logoImage} />
        </Link>
        <PCModeRoutes />
        <MobileModeRoutes />
      </Toolbar>
    </AppBar>
  )
}
