import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { containerStyle } from "./Theme";
import { defaultOptions } from "./defaultOptions";

interface MapProps {
  center: CoordinatesType;
}

const Map: React.FC<MapProps> = ({ center }) => {
  const mapRef = React.useRef(undefined);

  const onLoad = React.useCallback(function callback(map: any) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback() {
    mapRef.current = undefined;
  }, []);

  return (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
        {/* to show the marker , you need to link the card to "Google Cloud" ! ! ! */}
        <Marker position={center} />
        <></>
      </GoogleMap>
    </>
  );
};

export default Map;
