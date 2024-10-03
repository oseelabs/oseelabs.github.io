import HomeIcon from '@/app/utils/icons/HomeIcon'
import NewspaperIcon from '@/app/utils/icons/NewspaperIcon'
import AboutIcon from '@/app/utils/icons/AboutIcon';
import SettingsIcon from '@/app/utils/icons/SettingsIcon';
import LogoutIcon from '@/app/utils/icons/LogoutIcon';
import MobileNavLinks from './MobileNavLinks';


export interface NavLink {
  url: string;
  destination: string;
  icon?: JSX.Element;
}

const NavLinks = () => {
    const isMobile: boolean = true
    const links: NavLink[] = [
      { 
        url: '/', 
        destination: 'Home', 
        icon: <HomeIcon /> 
      },
      { 
        url: '/portfolio', 
        destination: 'Portfolio', 
        icon: <NewspaperIcon /> 
      },
      { 
        url: '/about', 
        destination: 'About', 
        icon: <AboutIcon /> 
      },
    ]

    const profileLinks: NavLink[] = [
      { url: '/', destination: 'Settings', icon: <SettingsIcon /> },
      { url: '/', destination: 'Log Out', icon: <LogoutIcon /> },
    ]

  return (
    <div className='flex sticky z-10'>
    { 
      isMobile ? 
        <MobileNavLinks links={links} profileLinks={profileLinks} /> 
      : 
        <DesktopNavLinks /> 
    }
    </div>
  )
}

export const DesktopNavLinks = () => {
  return (
    <nav className='navbar'>

    </nav>
  )
}


export default NavLinks