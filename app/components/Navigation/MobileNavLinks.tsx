import { NavLink } from './NavLinks'
import Link from 'next/link'
import Image from 'next/image'

import ProfileIcon from '@/app/utils/icons/ProfileIcon'
import ThemeController from '@/app/components/Theme/ThemeController'


export const MobileNavLinks = (
    { links, profileLinks }: {
      links: NavLink[], 
      profileLinks: NavLink[] 
    }
  ) => {
    return (
      <nav className='navbar bg-base-100 p-2 sticky'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'>
                { links.map((link: NavLink) => (
                  <li key={link.destination} className='pb-2'>
                    <Link href={link.url}>
                      {link.icon ?? ''}
                      {link.destination}
                      </Link>
                  </li>
                )) }
              </ul>
          </div>
        </div>
        <div className='navbar-center'>
          <Link href='/' className='text-xl'>OseeLabs</Link>
        </div>
        <div className='navbar-end'>
          <button className='btn btn-ghost btn-sm hover:btn-neutral'>
            <ThemeController />
          </button>
          <div  className='dropdown dropdown-end'>
            <div tabIndex={0} role='button' className='btn btn-ghost btn-circle avatar'>
              <div className='w-10 rounded-full'>
                <Image
                  src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' 
                  alt={''}
                  width={24}
                  height={24} 
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'>
                <li>
                  <Link href='/' className='justify-between'>
                    <ProfileIcon />
                    Profile
                    <span className='badge badge-sm badge-secondary'>New</span>
                  </Link>
                </li>
                <div className='divider'></div>
                { profileLinks.map((link: NavLink) => (
                  <li key={link.destination}>
                    <Link href={link.url}>
                    {link.icon ?? '&nbsp;'} &nbsp; {link.destination}</Link>
                  </li>
                )) }
              </ul>
          </div>
        </div>
      </nav>
    )
  }  

export default MobileNavLinks