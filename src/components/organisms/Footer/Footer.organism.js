import React from 'react'
import './Footer.organism.scss'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { ReactComponent as ChatIcon } from '../../../assets/icons/bottom_chat.svg'
import { ReactComponent as DashboardIcon } from '../../../assets/icons/bottom_dashboard.svg'
import { ReactComponent as KarmaIcon } from '../../../assets/icons/bottom_karma.svg'
import { ReactComponent as MatchIcon } from '../../../assets/icons/bottom_match.svg'
import { ReactComponent as ProfileIcon } from '../../../assets/icons/bottom_profile.svg'

const Footer = () => {
  const [value, setValue] = React.useState(0)

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      showLabels
      className="bottombar"
    >
      <BottomNavigationAction label="profil" icon={<ProfileIcon />} />
      <BottomNavigationAction label="match" icon={<MatchIcon />} />
      <BottomNavigationAction label="dashboard" icon={<DashboardIcon />} />
      <BottomNavigationAction label="karma" icon={<KarmaIcon />} />
      <BottomNavigationAction label="chat" icon={<ChatIcon />} />
    </BottomNavigation>
  )
}
export default Footer
