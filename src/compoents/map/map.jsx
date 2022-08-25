// import React, { startTransition } from 'react';
// import GoogleMapReact from "google-map-react";

// import useStyle from './style'
// import { useMediaQuery } from "@mui/material";
// const center = {
//   lat: 20.5937,
//     lng:78.9629
//   };
// const Map=()=>{
  
//     const make=useStyle();
//     const ismobile=useMediaQuery('(mid-width:600px)');
//     const coordinates={ lat : 20, lng : 19};
//     return(
//         <>
//         <div className={make.mapContainer}>
//             <GoogleMapReact
//             className="react-map"
//           bootstrapURLKeys={{key:process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
//           //  center={center}
//           //  defaultCenter={{}}
//           defaultZoom={14}
//            margin={[50,50,50,50]}
//            options={''}
//            onChange={''}
//            onChildClick={''}
//         >
//            </GoogleMapReact>
//         </div>
//         </>
//     );
// }
// export default Map;



import  React  from "react";
import {GoogleMap ,useJsApiLoader} from '@react-google-maps/api';
import useStyle from './style'
import { margin } from "@mui/system";
function Map({setCoordinates , setBounds , coordinates}){
const {isLoaded}=useJsApiLoader({
  googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
});
const center = {
    lat: 20.5937,
    lng:78.9629
  };
  const containerStyle = {
    width: '100%',
    height: '90vh'
  };
const make=useStyle();
 
if(!isLoaded) {
return <div>loading....</div>}
  return(
    <>
   
  <><div className={make.mapContainer}>
  <GoogleMap
  zoom={10}
  center={center}
mapContainerStyle={containerStyle}
  onClick={(e)=>{     
    console.log(e);
    setCoordinates({lat:e.center.lat , lng:e.center.lng}) 
    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });

}}
>
    </GoogleMap>
   
    </div>
  </>

   </>
  );
}

export default Map;


// import React from "react";
// import GoogleMapReact from "google-map-react";




// class Map extends React.Component {
  
//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: "100vh", width: "100%" }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{
//             key: "AIzaSyA16d9FJFh__vK04jU1P64vnEpPc3jenec"
//           }}
//           defaultCenter={ {
//             lat: 60.192059,
//             lng: 24.945831
//           }}
//           defaultZoom={11}
//         >
          
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default Map;