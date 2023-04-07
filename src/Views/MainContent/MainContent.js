import { Grid } from "@mui/material";
import Post from "Views/Post/Post";
import SideNavBar from "../../Components/Atoms/SideNavBar/SideNavBar";
import StatusBar from "../../Components/Atoms/StatusBar/StatusBar";
import Info from "../Info_Section/Info";
import "./MainContent.css";
function MainContent() {
  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <div>
            <SideNavBar />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div>
            <StatusBar />
            <Post />
          </div>
        </Grid>
        <Grid item xs={2}>
          <Info />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </div>
  );
}

export default MainContent;
