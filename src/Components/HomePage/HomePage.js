import React, { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import MainContent from "../MainContent/MainContent";
import { useDispatch } from "react-redux";
import { getData, like } from "Redux/Actions/feedPageActions";
import { LIKE, SETDATA } from "Redux/Actions/feedPageActions/actionStates";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  
  }, []);
  
  return (
    <div>
      <NavBar />
      <MainContent />
    </div>
  );
}

export default Home;
