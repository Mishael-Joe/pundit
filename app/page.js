"use client"

import { useState, useEffect } from 'react'
import Nav from './component/Nav/page'
import Footer from './component/footer/page'
import MainContent from './maincontent/page'
import FirstTimeVisitor from './utils/FirstTimeVisitor/page'
//className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"

import * as React from "react";


export default function Home() {


  return (
    <section className=''>
    <Nav />
    <FirstTimeVisitor />
    <MainContent />
    <Footer />
    </section>
  )
}
