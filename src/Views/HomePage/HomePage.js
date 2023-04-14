import StatusBar from "Components/Atoms/StatusBar/StatusBar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData, reels } from "Redux/Actions/feedPageActions";
import Post from "Views/Post/Post";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getData());
      dispatch(reels());
    }, 1000);
  }, [dispatch]);

  return (
    <div>
      <StatusBar />
      <Post />
    </div>
  );
}

export default Home;
