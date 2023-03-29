import React from 'react'
import MainContent from 'Views/Main Content/MainContent'
import Navbar from 'Views/Navbar/Navbar'

function HomePage() {
  return (
    <div className="d-flex">
        <Navbar/>
        <MainContent/>
    </div>
  )
}

export default HomePage