"use client"

import Nav from './component/Nav/page'
import Footer from './component/footer/page'
import MainContent from './maincontent/page'
import FirstTimeVisitor from './utils/FirstTimeVisitor/page'
//className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
export default function Home() {
  return (
    <>
    <Nav />
    <FirstTimeVisitor />
    <MainContent />
    <Footer />
    </>
  )
}
