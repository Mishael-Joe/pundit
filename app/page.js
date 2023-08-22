"use client"

import Nav from './component/Nav/page'
import Footer from './component/footer/page'
import MainContent from './maincontent/page'
import FirstTimeVisitor from './utils/FirstTimeVisitor/page'

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
