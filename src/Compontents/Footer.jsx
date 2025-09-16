
// @ts-ignore
const logo = '/logo.png'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa'


const Footer = () => {
  const whatsappNumber = "201020666116";
  const whatsappLink = `https://wa.me/${whatsappNumber}`
  return (
    <footer className='w-full flex flex-col-reverse items-center md:flex-row md:justify-between md:items-center border-t border-t-gray-300' style={{ padding: "0px 20px", marginTop: '40px' }}>
      <div className='flex gap-3 items-center'>
          <Link to='/' className={`footer-logo left-[7%]`}><img src={logo} loading='lazy' className='transition-all' width={40} height={40} /> </Link>
        <div className='hidden md:block h-7 border-r border-gray-500/60'></div>
        <p className='text-gray-500 text-xs md:text-sm '>© 2025 Eng.Dania Alfakhouri Design. All rights reserved. | Developed by Eng.Youssef Magdy</p>
      </div>
      <div className={`footer-links flex gap-2 items-center justify-end  `}>
        <a href='https://www.facebook.com/share/1AEQoCdaWL/' target='_blank' className='cursor-pointer border border-gray-300 rounded-full flex items-center justify-center w-8 h-8 ' >
          <FaFacebookF className='w-5 h-5' />
        </a>
        <a href={whatsappLink} target='_blank' className='cursor-pointer border border-gray-300 rounded-full flex items-center justify-center w-8 h-8 ' >
          <FaWhatsapp className='w-5 h-5' />
        </a>
        <a href='#' target='_blank' className='cursor-pointer border border-gray-300 rounded-full flex items-center justify-center  w-8 h-8 ' >
          <FaInstagram className='w-5 h-5' />
        </a>
      </div>
    </footer>
  )
}

export default Footer
