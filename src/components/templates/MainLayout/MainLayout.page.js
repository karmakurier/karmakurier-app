import React from 'react'
import Footer from '../../organisms/Footer/Footer.organism'
import './MainLayout.page.scss'

const MainLayout = ({ children }) => {
  return (
    <div className="page">
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}

export default MainLayout
