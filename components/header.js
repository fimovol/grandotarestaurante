import Image from 'next/image'
import logo from '../img/grandota.png'
import { Buttonblue, WahtsAppIcon } from './button'

export default function Header(){
    return <header className='bg-black w-full flex items-center py-2 justify-around md:justify-between md:px-5'>
    <div className='flex justify-center items-center'>
        <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
            <path  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        
        <Image src={logo} alt='logo de la empresa' width={150} height={70}/>
    </div>
    
    <div className='flex justify-center items-center'>
        <WahtsAppIcon/>
        <Buttonblue capitalize>contáctenos</Buttonblue>
    </div>
    
  </header>
}