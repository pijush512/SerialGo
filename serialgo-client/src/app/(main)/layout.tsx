import React from 'react'
import Navbar from '../components/navbar/page'
import Footer from '../components/footer/footer'

const MainLayout = ({children}: {children:React.ReactNode}) => {
  return (
    <div>
        <header>
            <Navbar/>
        </header>
        <main>{children}</main>
        <footer>
            <Footer/>
        </footer>
    </div>
  )
}

export default MainLayout