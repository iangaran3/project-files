import React, { useEffect, useState } from 'react';
import { CssBaseline,Grid } from '@material-ui/core'
import Headers from './compoents/header/header';
import List from './compoents/list/list';
import Map from './compoents/map/map';
import Pds from './compoents/placedetails/places'; 
import { getDetails } from './compoents';
function App() {
  const [lists,setlists]=useState([]);
  const [coordinates,setCoordinates]=useState({});
  const [bounds,setBounds]=useState(null)
  useEffect(()=>{
navigator.geolocation.getCurrentPosition(({coords:{ latitude,longitude}})=>{
setCoordinates({lat: latitude,lng:longitude});
})
  },[]);
  useEffect(()=>{
    getDetails(bounds.sw , bounds.ne)
    .then((data)=>{
      console.log(data);
      setlists(data);
    })
  },[coordinates,bounds]);
  return (
    <div>
     <CssBaseline />
     <Headers />
     <Grid container spacing={3} style={{width : '100%'}}>
      <Grid item xs={12} md={4}>
<List />
      </Grid>
<Grid item xs={12} md={8}>
  <Map
   setCoordinates={setCoordinates}
  setBounds={setBounds}
  coordinates={coordinates}
  />
</Grid>
     </Grid>
    </div>

);
}

export default App;
