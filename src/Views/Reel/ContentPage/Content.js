import { Grid } from "@mui/material";
import SideNavBar from "Components/Atoms/SideNavBar/SideNavBar";
import Info from "Views/Info_Section/Info";
import Reels from "../Reels/Reels";

function Content() {
  return (
    <div>
      <div>
        <Grid container>
          <Grid item xs={2}>
            <div>
              <SideNavBar />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <Reels />
            </div>
          </Grid>
          <Grid item xs={2}>
            <Info />
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Content;
