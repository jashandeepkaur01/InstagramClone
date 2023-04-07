import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import statusImg from "../../../Images/images/pp1.png";
import "./StatusBar.css";
function StatusBar() {
  const [statusList, setStatusList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let data = [
      {
        username: "jashanhans",
        image: "../../Images/images/pp1.png",
      },
      {
        username: "jashagjghjnhans",
        image: "../../Images/images/pp1.png",
      },
      {
        username: "dxgfdfshanhans",
        image: "../../Images/images/pp1.png",
      },
      {
        username: "gchghjanhans",
        image: "../../Images/images/pp1.png",
      },
      {
        username: "jashagjghjnhans",
        image: "../../Images/images/pp1.png",
      },
      {
        username: "dxgfdfshanhans",
        image: "../../Images/images/pp1.png",
      },
      {
        username: "gchghjanhans",
        image: "../../Images/images/pp1.png",
      },
      {
        username: "jashagjghjnhans",
        image: "../../Images/images/pp1.png",
      },
      {
        username: "dxgfdfshanhans",
        image: "../../Images/images/pp1.png",
      },
      {
        username: "gchghjanhans",
        image: "../../Images/images/pp1.png",
      },
    ];
    setStatusList(data);
  };

  return (
    <div>
      <div className="statusBar_container">
        {console.log(statusList, "fhgh")}
        {statusList.map((item, idx) => {
          return (
            <div key={idx} className="status">
              <Avatar className="statusBar_status" src={statusImg} />
              <div className="statusBar_text">{item.username}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StatusBar;
