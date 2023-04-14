import { Grid } from "@mui/material";
import NavBar from "Components/Atoms/NavBar/NavBar";
import SideNavBar from "Components/Atoms/SideNavBar/SideNavBar";
function AuthLayout({ children }) {
  return (
    <div>
      <div>
        <NavBar />
        <Grid container>
          <Grid item xs={2}>
            <div>
              <SideNavBar />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>{children}</div>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </div>
    </div>
  );
}

export default AuthLayout;
