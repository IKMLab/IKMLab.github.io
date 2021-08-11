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
import "@fontsource/roboto";

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
        <Link
          className={HeaderStyle['logo-link']}
          href={`${PUBLIC_URL}home.html`}>
          <img
            alt='IKMLab logo'
            className={HeaderStyle['logo']}
            role='img'
            src={logoImage} />
        </Link>
        <List className={HeaderStyle['list-hotbar']}>
          <IconButton className={HeaderStyle['hotbar']}>
            <HomeIcon
                    className={HeaderStyle['hotbar-icon']}
                    titleAccess='Home' />
                <Link
                        className={HeaderStyle['hotbar-text']}
                        href={`${PUBLIC_URL}home.html`}>
                        Home
                </Link>
          </IconButton>
          <IconButton className={HeaderStyle['hotbar']}>
            <PersonIcon
                    className={HeaderStyle['hotbar-icon']}
                    titleAccess='Advisor' />
                <Link
                        className={HeaderStyle['hotbar-text']}
                        href={`${PUBLIC_URL}advisor.html`}>
                        Advisor
                </Link>
          </IconButton>
          <IconButton className={HeaderStyle['hotbar']}>
              <PeopleIcon
                    className={HeaderStyle['hotbar-icon']}
                    titleAccess='Member' />
                <Link
                      className={HeaderStyle['hotbar-text']}
                      href={`${PUBLIC_URL}member.html`}>
                      Member
                </Link>
          </IconButton>
          <IconButton className={HeaderStyle['hotbar']}>
              <LibraryBooksIcon
                    className={HeaderStyle['hotbar-icon']}
                    titleAccess='Research' />
                <Link
                      className={HeaderStyle['hotbar-text']}
                      href={`${PUBLIC_URL}research.html`}>
                      Research
                </Link>
          </IconButton>
        </List>
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
          <List className={HeaderStyle['list']}>
            <ListItem>
              <ListItemIcon>
                <HomeIcon
                  className={HeaderStyle['list-item-icon']}
                  titleAccess='Home' />
              </ListItemIcon>
              <ListItemText>
                <Link
                  className={HeaderStyle['list-item-text']}
                  href={`${PUBLIC_URL}home.html`}>
                  Home
                </Link>
              </ListItemText>
            </ListItem>
            <Divider className={HeaderStyle['list-item-divider']} />
            <ListItem>
              <ListItemIcon>
                <PersonIcon
                  className={HeaderStyle['list-item-icon']}
                  titleAccess='Advisor' />
              </ListItemIcon>
              <ListItemText>
                <Link
                  className={HeaderStyle['list-item-text']}
                  href={`${PUBLIC_URL}advisor.html`}>
                  Advisor
                </Link>
              </ListItemText>
            </ListItem>
            <Divider className={HeaderStyle['list-item-divider']} />
            <ListItem>
              <ListItemIcon>
                <PeopleIcon
                  className={HeaderStyle['list-item-icon']}
                  titleAccess='Member' />
              </ListItemIcon>
              <ListItemText>
                <Link
                  className={HeaderStyle['list-item-text']}
                  href={`${PUBLIC_URL}member.html`}>
                  Member
                </Link>
              </ListItemText>
            </ListItem>
            <Divider className={HeaderStyle['list-item-divider']} />
            <ListItem>
              <ListItemIcon>
                <LibraryBooksIcon
                  className={HeaderStyle['list-item-icon']}
                  titleAccess='Research' />
              </ListItemIcon>
              <ListItemText>
                <Link
                  className={HeaderStyle['list-item-text']}
                  href={`${PUBLIC_URL}research.html`}>
                  Research
                </Link>
              </ListItemText>
            </ListItem>
          </List>
        </SwipeableDrawer>
      </Toolbar>
    </AppBar>
  )
}