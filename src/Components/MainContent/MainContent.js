import React from 'react';
import "./MainContent.css";
import { Grid } from '@mui/material';
import StatusBar from '../StatusBar/StatusBar';
import MainPage from '../MainPage/MainPage';
import Info from '../Info_Section/Info';
import Suggestion from '../Suggestion/Suggestion';
import SideNavBar from '../SideNavBar/SideNavBar';
function MainContent() {
  return (
    <div>
    <Grid container>
      <Grid item xs={2}>
        <div>
            <SideNavBar/>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div>
          <StatusBar/>
          <MainPage/>
        </div>
      </Grid>
      <Grid item xs={2}>
        <Info/>
        <Suggestion/>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
    </div>
  )
}

export default MainContent