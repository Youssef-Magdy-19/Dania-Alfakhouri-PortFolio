import React, { useEffect, useRef, useState } from 'react'
// @ts-ignore
const logo = '/logo.png'
import { Link, useLocation } from 'react-router-dom'
// @ts-ignore
import { Moon, Sun, Menu, X } from 'lucide-react'
import { HashLink } from 'react-router-hash-link'


const Navbar = () => {
    const location = useLocation()
    const [isOpen, setIsOpen] = useState(false)
    // @ts-ignore
    const sidebarRef = useRef()
    useEffect(() => {
        const handleClickOutSide = (e) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutSide)
        } else {
            document.removeEventListener("mousedown", handleClickOutSide)
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutSide)
        }
    }, [isOpen])
    

    return (
        <>
            <header className='fixed z-50 w-full h-[60px] border-b border-gray-300 bg-white'>
                <div className="container h-full flex items-center justify-between">
                    {isOpen == true ?
                        <button
                            className={`cursor-pointer text-gray-500 hover:text-red-600 order-1 trainsition`}
                            onClick={() => setIsOpen(false)}
                        >
                            <X className="w-6 h-6" />
                        </button>
                        :
                        <button className='block md:hidden p-[7px] cursor-pointer order-1 trainsition' onClick={() => setIsOpen(true)}><Menu className="w-6 h-6 text-gray-500" /></button>
                    }
                    <Link to='/' ><img loading='lazy' src={logo} className='transition-all' alt="" width={50} height={50} /></Link>
                    <nav className='hidden md:block'>
                        <ul className='flex items-center gap-[3rem]'>
                            <li>
                                <Link to="/"
                                    className={`${location.pathname == '/' && location.hash != '#contact' ? 'active text-blue-500 font-semibold' : 'text-gray-600 '} hover:text-blue-500 link transition-all`}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects"
                                    className={`${location.pathname == '/projects' ? 'active text-blue-500 font-semibold' : 'text-gray-600 '} hover:text-blue-500 link transition-all`}
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link to="/about"
                                    className={`${location.pathname == '/about' ? 'active text-blue-500 font-semibold' : 'text-gray-600 '} hover:text-blue-500 link transition-all`}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <HashLink smooth to="/#contact"
                                    className={`${location.pathname == '/' && location.hash == '#contact' ? 'active text-blue-500 font-semibold' : 'text-gray-600 '} hover:text-blue-500 link transition-all`}
                                >
                                    Contact
                                </HashLink>
                            </li>
                        </ul>
                    </nav>
                    {/* button switch mode */}
                    {/* <div className="flex gap-[1rem] items-center">
                        
                        {currentMode == 'light' ?
                            <div className="btn-mode transition-all flex items-center justify-center text-gray-500 hover:text-yellow-500 border border-gray-400 cursor-pointer rounded-full w-[35px] h-[35px]"
                                onClick={() => {
                                    setCurrentMode(() => currentMode == 'light' ? 'dark' : 'light')
                                    localStorage.setItem('currentMode', currentMode)
                                }}
                            >
                                <Sun className="w-6 h-6" />
                            </div>
                            :
                            <div className="btn-mode transition-all flex items-center justify-center text-gray-500 hover:text-white border border-gray-400 cursor-pointer rounded-full w-[35px] h-[35px]"
                                onClick={() => {
                                    setCurrentMode(() => currentMode == 'light' ? 'dark' : 'light')
                                    localStorage.setItem('currentMode', currentMode)
                                }}
                            >
                                <Moon className="w-6 h-6" />
                            </div>
                        }

                    </div> */}

                </div>
            </header>

            {/* overlay */}
            <div className={`fixed inset-0 bg-black/30 z-40 backdrop-blur-[2px] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}></div>

            {/*  side bar  */}
            <aside ref={sidebarRef} className={`sidebar fixed z-50 top-0 bottom-0 left-0  w-[75%] min-h-screen duration-300 transition-all bg-white text-gray-800 shadow-lg transform transition-transform ease-in-out  ${isOpen ? 'translate-x-0' : '-translate-x-full'} `}>
                {/* <button
                    className={`fixed top-5 right-5 cursor-pointer text-gray-500 hover:text-red-600`}
                    onClick={() => setIsOpen(false)}
                >
                    <X className="w-6 h-6" />
                </button> */}
                <nav style={{ marginTop: '40px', padding: '10px 0px' }}>
                    <ul className='flex flex-col justify-center'>
                        <li style={{ padding: '12.5px' }}
                            className={`cursor-pointer hover:bg-gray-100 overflow-hidden ${location.pathname == '/' && location.hash != '#contact' ? 'resactive text-blue-500 font-semibold bg-blue-50' : 'text-gray-600'} hover:bg-blue-50  hover:text-blue-500 transition-all`}
                        >
                            <Link onClick={() => setIsOpen(false)}
                                style={{ padding: `0 210px 0 0 ` }}
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li style={{ padding: '12.5px' }}
                            className={`cursor-pointer hover:bg-gray-100 overflow-hidden ${location.pathname == '/projects' ? 'resactive text-blue-500 font-semibold bg-blue-50' : 'text-gray-600'} hover:bg-blue-50  hover:text-blue-500 transition-all`}
                        >
                            <Link onClick={() => setIsOpen(false)}
                                style={{ padding: '0 140px 0 0 ' }}
                                to="/projects"
                            >
                                Projects
                            </Link>
                        </li>
                        <li style={{ padding: '12.5px' }}
                            className={`cursor-pointer hover:bg-gray-100 overflow-hidden ${location.pathname == '/about' ? 'resactive text-blue-500 font-semibold bg-blue-50' : 'text-gray-600'} hover:bg-blue-50 hover:text-blue-500 transition-all`}
                        >
                            <Link onClick={() => setIsOpen(false)}
                                style={{ padding: '0 180px 0 0 ' }}
                                to="/about"
                            >
                                About Us
                            </Link>
                        </li>
                        <li style={{ padding: '12.5px' }}
                            className={`cursor-pointer hover:bg-gray-100 overflow-hidden ${location.pathname == '/' && location.hash == '#contact' ? 'resactive text-blue-500 font-semibold bg-blue-50' : 'text-gray-600'} hover:bg-blue-50 hover:text-blue-500  transition-all`}
                        >
                            <HashLink smooth to="/#contact" onClick={() => setIsOpen(false)}
                                style={{ padding: '0 175px 0 0 ' }}
                            >
                                Contact
                            </HashLink>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}

export default Navbar
