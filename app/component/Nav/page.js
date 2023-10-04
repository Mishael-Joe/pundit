"use client"

import { useState, useEffect } from "react";
import Theme from "@/app/utils/ThemeSetting/page";
import Link from "next/link";
import { BiSearch, BSearch, OpenMenuIcon, CloseMenuIcon, CgProfile, CgCloseR } from '@/app/utils/icons/icons';
import Hambuger from './responsivenav'

const navHeaderLinks = [
  { id: 1, label: "Home", href: "#" },
  { id: 2, label: "Courses", href: "#" },
  { id: 3, label: "Instructors", href: "#" },
  { id: 4, label: "Schedules", href: "#" },
  { id: 5, label: "Contact", href: "#" }
];

function List() {
  const listItems = navHeaderLinks.map((link, isActive) => (
    <li key={link.id} className={`hover:text-green-600 dark:hover:text-green-600 ${isActive ? 'text-slate-900' : 'text-green-600'} dark:text-slate-100 transition ease-in-out delay-100`}>
      <Link href={link.href}>{link.label}</Link>
    </li>
  ));

  return <ul className="hidden gap-x-2 lg:gap-4 md:flex font-semibold">{listItems}</ul>;
}

const SearchBar = () => {
  const [ isOpen, setIsOpen] = useState(false);
  const [ word, setWord ] = useState({
    words: ''
  });

  const handelChange = (event) => {
    const {name, value} = event.target

    setWord(prev => {
      return {
          ...prev,
          [name] : value
      }
    })
  }

  function handelSubmit(event) {
    event.preventDefault()
  }

  const toggleSearch = () => {setIsOpen(!isOpen)}

  useEffect(() => {

    function KeyPressed(event) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keyup', KeyPressed)

    return () => {
      window.removeEventListener('keyup', KeyPressed)
    }
  }, [])

  return (
    <>
      <button onClick={toggleSearch}><BiSearch/></button>
      {isOpen && (
        <div className=" w-[100vw] max-w-[100%] h-[100vh] fixed z-[300] flex items-center justify-center bg-[#252830] delay-150 transition ease-in top-0 left-0">
          <div className="">
              <span className=" absolute top-4 right-4" onClick={toggleSearch}> <CgCloseR /> </span>
              <span class="text-xs text-slate-200 font-mono">Press ESC to close.</span>
              <form onSubmit={handelSubmit}>
                <div className=" flex items-end">
                  <input 
                  name="words"
                  value={word.words}
                  type="text"
                  placeholder="What are you looking for?"
                  onChange={handelChange}
                  className="h-12 w-[50vw] md:w-[35vw] rounded-s-md shadow-lg border-green-300 focus:border-green-600 border-2 focus:outline-none px-4 placeholder:text-slate-600 placeholder:font-mono"
                  />
                  <span className=" bg-green-700 hover:bg-green-500 h-12 w-10 flex items-center justify-center rounded-e-md"><BSearch/></span>
                </div>
              </form>
            </div>
        </div>
      )}
    </>
  )
}

function Nav() { 
  useEffect(() => {
    let navId = document.getElementById('nav');

    function Scrolly() {
      if (window.scrollY >= 15) {
        navId.classList.add('bg_color')
      } else {
        navId.classList.remove('bg_color')
      }
    }

    window.addEventListener('scroll', Scrolly)

    return () => {
      window.removeEventListener('scroll', Scrolly)
    }
  }, []) 

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-3xl h-14 dark:bg-green-950 transition ease-in-out delay-100" id="nav">
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center">
          <span className="dark:text-slate-100 mr-4"><Hambuger/></span>
          <Link href={``} className="font-Rubik font-bold pr-1 text-xl dark:text-green-400 transition ease-in-out delay-100">WiSchool</Link>
        </div>
        <div>
          <List />
        </div>
        <div className="flex gap-x-2 lg:gap-4 items-center justify-center">
          <div className="flex items-baseline justify-center gap-3">
            <span className=" dark:text-slate-100"> <SearchBar /> </span>
            <span className=""><Theme /></span>
            <span className="md:hidden dark:text-slate-200"><CgProfile/></span>
          </div>
          <div className=" hidden md:flex gap-4 items-baseline">
            <button className="text-green-600 font-semibold">
              <Link href="./login">LOGIN</Link>
            </button>
            <button className=" text-slate-200 font-semibold bg-green-600 hover:bg-green-500 w-28 rounded h-8">
              <Link href="./signup">REGISTER</Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav












function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <span className="md:hidden dark:text-slate-100" onClick={toggleMenu}><CgProfile /></span>
      {isOpen && (
        <div className=" max-w-sm h-fit flex flex-col gap-3 bg-slate-500">
          <div className="flex flex-col gap-4 items-center">
            <button className="text-green-600 font-semibold">
              <Link href="./login">LOGIN</Link>
            </button>
            <button className=" text-slate-200 font-semibold bg-green-600 hover:bg-green-500 w-28 rounded h-8">
              <Link href="./signup">REGISTER</Link>
            </button>
          </div>
          <div className=" flex justify-between gap-2 items-center">
            <span className="hidden md:inline-block"><Theme /></span>
            <span className="hidden md:inline-block"> <SearchBar /> </span>
          </div>
        </div>
      )}
    </div>
    // <div className="absolute z-10 top-5 right-5 text-green-500">
    //   <button onClick={toggleMenu}>
    //     {isOpen ? (
    //       <CloseMenuIcon className="absolute right-1 top-0.5" />
    //     ) : (
    //       <OpenMenuIcon />
    //     )}
    //   </button>
      
    // </div>
  );
}

function App() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {windowWidth <= 819 && (
        <div className="pr-5">
          <HamburgerMenu />
        </div>
      )}
    </div>
  );
}