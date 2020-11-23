import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const Map = () => {

  const mapStyles = {
    height:"50vh",
    width:"100%"
  }

  const defaultCenter = {
    lat: 19.4267624, lng: -99.1747555
  }

  return (
    <LoadScript googleMapsApiKey='AIzaSyAgFdWddMkEpxEjbOcYlZnOriZf_OrxdG4'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom= {9}
        center= {defaultCenter}
      >
        <Marker position={defaultCenter}/>
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
