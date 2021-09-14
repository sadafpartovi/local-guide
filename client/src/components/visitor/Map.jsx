import "./visitor.css";
import { useState, useEffect } from "react";
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps'

const Map = withScriptjs(withGoogleMap(({coordinate}) => {

  return (
    <GoogleMap defaultZoom={10} defaultCenter={coordinate.length > 0 ? {lat: coordinate[0].lat, lng: coordinate[0].lng} : null}>

      {coordinate.map((item, key)=> (
        <Marker position={{ lat: item.lat, lng: item.lng }} />
      ))}
    </GoogleMap>

  );
}));



export default function FinalMap({coordinate}) {
  return (
    <div  style={{width: '40rem', height: '40rem'}}>
    <Map coordinate={coordinate}
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBUCfZQCldXDedOdHwEK9N1_DX8TPK6z4k`}
      loadingElement = {<div style={{height: '100%'}}></div>}
      containerElement={<div style={{height: '100%'}}></div>}
      mapElement={<div style={{height: '100%'}}></div>}
    />
    </div>
  )
};