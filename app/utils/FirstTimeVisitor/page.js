"use client"

import { useState, useEffect } from 'react'
import * as React from "react";
import Link from 'next/link';

function CloseMenu__Icon(props) {
    return <svg stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24"
     height="1.5em" width="1.5em" {...props}><path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" fill="currentColor" /></svg>;
}

const FirstTimeVisitor = () => {
    // State to track if the user is a first-time visitor
    const [isFirstTimeVisitor, setIsFirstTimeVisitor] = useState(true);
    // State to control if the sign-up prompt should be shown
    const [showSignUpPrompt, setShowSignUpPrompt] = useState(false);
  
    useEffect(() => {
      // Check if the user is a first-time visitor by checking if their
      // browser cookie has the "first_time_visitor" key.
      const isFirstTimeVisitorCookie = localStorage.getItem('first_time_visitor');
      if (isFirstTimeVisitorCookie === null) {
        //setIsFirstTimeVisitor(false);
        localStorage.setItem('first_time_visitor', 'true');
      } else {
        setIsFirstTimeVisitor(true);
      }
  
      // Set a timer to show the sign-up prompt after 5 seconds
      const timer = setTimeout(() => {
        setShowSignUpPrompt(isFirstTimeVisitor);
      }, 5000);
  
      // Clear the timer if the component unmounts or if isFirstTimeVisitor changes
      return () => clearTimeout(timer);
    }, [isFirstTimeVisitor]);
  
    const handleSignUp = () => {
      // Handle the sign-up logic here
      // Redirect or show the sign-up page/component
      // For now, we'll just hide the sign-up prompt
      setShowSignUpPrompt(false);
    };
  
    const handleClose = () => {
      setShowSignUpPrompt(false);
      // Additional logic to handle closing the FirstTimeVisitor component
      // For example, you can set a flag in localStorage to prevent it from appearing again on subsequent visits
      localStorage.setItem('hide_first_time_visitor', 'true');
    };
  
    if (showSignUpPrompt) {
      // Render the sign-up prompt if showSignUpPrompt is true
      return (
        
        <div className="max-w-md px-8 py-4 bg-white rounded-lg shadow-2xl dark:bg-gray-800 z-30 fixed bottom-5 right-2" >
            <button onClick={handleClose} className={`absolute right-5`}><CloseMenu__Icon/></button>

            <div className="mt-2">
                <h1 className='text-xl md:text-2xl text-center font-semibold'>Welcome to <span className='font-semibold text-green-500'>PUNDIT</span></h1>
                <p className="md:text-lg font-bold text-gray-700 dark:text-white dark:hover:text-gray-200">Unlimited Learning Materials Available Just For You</p>
                <p className="mt-2 font-semibold text-gray-600 dark:text-gray-300">You are a first-time visitor. Would you like to sign up?</p>
                
            </div>

            <div className='text-center'><Link href={'../source/SignUp'}><button onClick={handleSignUp} className='bg-green-400 p-2 rounded-md text-slate-100 font-semibold'>Sign Up</button></Link></div>
        </div>
        
      );
    }
  
    // Return null if showSignUpPrompt is false
    return null;
  };

export default FirstTimeVisitor