"use client"

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import * as React from "react";

const navHeaderLink = [
  {
    id: 1,
    link: <Link href="#">Home</Link>
  },
  {
    id: 2,
    link: <Link href="#">Courses</Link>
  },
  {
    id: 3,
    link: <Link href="#">Instructors</Link>
  },
  {
    id: 4,
    link: <Link href="#">Schedules</Link>
  },
  {
    id: 5,
    link: <Link href="#">Contact Us</Link>
  },
]

function OpenMenu__Icon(props) {
  return <svg stroke="currentColor" fill="currentColor" strokeWidth={0} 
  viewBox="0 0 24 24" height="1.5em" width="1.5em" {...props}><g><path fill="none" d="M0 0h24v24H0z" /><path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z" /></g></svg>;
}

function CloseMenu__Icon(props) {
  return <svg stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24"
   height="1.5em" width="1.5em" {...props}><path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" fill="currentColor" /></svg>;
}

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  function List__Item() {
    const ResponsiveListItem = navHeaderLink.map((item, isActive) => <li key={item.id} className={`p-2 hover:text-green-600 ${isActive ? 'text-slate-800' : 'text-green-500'}`}>{item.link}</li>)
    return <ul className={`font-semibold bg-slate-200 p-2 rounded-md`}>{ResponsiveListItem}</ul>
  }

  return (
    <div className={`absolute z-10 top-5 right-5 text-green-500`}>
      <button onClick={toggleMenu}>
        {isOpen ? <CloseMenu__Icon className={`absolute right-1 top-0.5`}/> : <OpenMenu__Icon/>}
      </button>
      {isOpen && ( <List__Item /> )}
    </div>
  );
}

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {windowWidth <= 768 && (<div className="pr-5"> <HamburgerMenu /> </div> )}
    </div>
  );
}

function List() {
  const listItem = navHeaderLink.map((items, isActive) => <li key={items.id} className={`hover:text-green-600 ${isActive ? 'text-slate-800' : 'text-green-500'}`}>{items.link}</li>)
  return <ul className={"hidden space-x-4 md:flex font-semibold"}>{listItem}</ul>
}

function Login() {
  return (
    <button className={"text-green-500 font-semibold pr-4"}><Link href="./source/login">LOGIN</Link></button>
  )
}

function Register() {
  return (
    <button className={"text-green-500 font-semibold"}><Link href="./source/SignUp">REGISTER</Link></button>
  )
}

function PunditBrandImage() {
    return (
      <Link href="#">
        <Image 
          src={'/pundit.svg'}
          alt={'pundit brand image'}
          width = '150'
          height = '50'
          className=""
        />
      </Link>
    )
}

export default function Nav() {
  return (
    <nav className={'flex items-start justify-between -mt-12'}>
      <PunditBrandImage />
      <List />

      <div className={'hidden md:inline'}>
        <Login />
        <Register />
      </div>
  
      <App/>
    </nav>
  )
}