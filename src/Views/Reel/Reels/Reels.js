import { useSelector } from "react-redux";

function Reels() {
  const reelData = useSelector((state) => state?.HomeReducer?.reelData);
  return <div></div>;
}

export default Reels;
