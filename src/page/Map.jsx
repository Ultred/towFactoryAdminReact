import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useState } from "react";
import styles from "./Map.module.css";

const containerStyle = {
  height: "100% ",
  width: "100%",
};

const center = {
  lat: 14.68843,
  lng: 121.0745,
};

const Map = () => {
  const [markerPosition, setMarkerPosition] = useState(center);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyA06ZsF5FHeRM-nEax-v0VsOezcS69DsAY",
  });

  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={markerPosition}
        zoom={15}
        options={{
          zoomControl: false,
          mapTypeControl: false,
        }}
        className={styles.mapContainer}
      ></GoogleMap>
    </>
  ) : (
    <></>
  );
};

export default Map;
