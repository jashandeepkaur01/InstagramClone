import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "Redux/Actions/feedPageActions";
import NavBar from "../../Components/Atoms/NavBar/NavBar";
import MainContent from "../MainContent/MainContent";

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
