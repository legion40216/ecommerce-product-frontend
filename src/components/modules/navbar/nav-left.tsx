import NavGroup from './nav-left/nav-group'

import logo from '../../../assets/icons/logo.svg'

export default function NavLeft() {
  return (
    <div className='flex items-center gap-2 h-full flex-row-reverse md:flex-row'>
      <img src={logo} alt="logo" className='w-35 h-5'/>
      
      <NavGroup />
    </div>
  )
}
