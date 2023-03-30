import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getData } from 'Redux/Actions/feedPageActions';
import MainContent from 'Views/Main Content/MainContent'
import Navbar from 'Views/Navbar/Navbar'

function HomePage() {
  const dispatch = useDispatch();
  
  // useEffect(()=>{
  //   dispatch(getData())

  // },[])
  return (
    <div className="d-flex">
        <Navbar/>
        <MainContent/>
    </div>
  )
}

export default HomePage